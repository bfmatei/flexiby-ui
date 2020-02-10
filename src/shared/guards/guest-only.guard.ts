import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

import { AuthFacade } from '~core/auth/auth.facade';
import { MessagesFacade } from '~core/messages/state/messages.facade';

@Injectable()
export class GuestOnlyGuard implements CanActivate {
  constructor(
    private readonly messagesFacade: MessagesFacade,
    private readonly authFacade: AuthFacade,
    private readonly router: Router
  ) {}

  canActivate(): Observable<boolean> {
    return combineLatest([
      this.authFacade.loggedIn$,
      this.authFacade.loggingIn$,
      this.authFacade.fetchingUser$,
      this.authFacade.refreshingToken$
    ]).pipe(
      filter(
        ([_loggedIn, loggingIn, fetchingUser, refreshingToken]) =>
          !loggingIn && !fetchingUser && !refreshingToken
      ),
      map(([loggedIn]) => !loggedIn),
      tap((notLoggedIn) => {
        if (!notLoggedIn) {
          this.messagesFacade.addError('This page is only visible to guests!');

          this.router.navigate(['/']);
        }
      })
    );
  }

  canActivateChild(): Observable<boolean> {
    return this.canActivate();
  }
}
