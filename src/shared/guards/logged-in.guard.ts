import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

import { AuthFacade } from '~core/auth/auth.facade';
import { MessagesFacade } from '~core/messages/state/messages.facade';

@Injectable()
export class LoggedInGuard implements CanActivate {
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
      map(([loggedIn]) => loggedIn),
      tap((loggedIn) => {
        if (!loggedIn) {
          this.messagesFacade.addError(
            'You are not authorized to view this page!'
          );

          this.router.navigate(['/login']);
        }
      })
    );
  }

  canActivateChild(): Observable<boolean> {
    return this.canActivate();
  }
}
