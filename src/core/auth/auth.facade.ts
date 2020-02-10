import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { AppState } from '~core/state/state.model';

import * as actions from './auth.actions';
import * as selectors from './auth.selectors';
import { AuthService } from './auth.service';

@Injectable()
export class AuthFacade {
  loggingIn$ = this.store.pipe(select(selectors.selectLoggingIn));

  fetchingUser$ = this.store.pipe(select(selectors.selectFetchingUser));

  token$ = this.store.pipe(select(selectors.selectToken));

  user$ = this.store.pipe(select(selectors.selectUser));

  refreshingToken$ = this.store.pipe(select(selectors.selectRefreshingToken));

  loggedIn$ = this.store.pipe(select(selectors.selectLoggedIn));

  constructor(
    private readonly store: Store<AppState>,
    private readonly authService: AuthService
  ) {}

  hydrate() {
    const token = this.authService.readToken();

    if (token.value !== null) {
      this.store.dispatch(actions.hydrate(token));
    }
  }

  login(username: string, password: string) {
    this.store.dispatch(actions.login({ username, password }));
  }

  refreshToken() {
    this.store.dispatch(actions.refreshToken());
  }
}
