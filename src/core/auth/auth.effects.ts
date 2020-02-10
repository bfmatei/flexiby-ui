import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap, tap } from 'rxjs/operators';

import * as actions from './auth.actions';
import { AuthService } from './auth.service';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.login),
      map((action) => action.payload),
      switchMap((payload) =>
        this.authService.login(payload).pipe(
          map((data) => actions.loginSuccess(data)),
          catchError(() => of(actions.loginError()))
        )
      )
    )
  );

  fetchUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.fetchUser, actions.hydrate, actions.loginSuccess),
      switchMap(() =>
        this.authService.fetchUser().pipe(
          map((data) => actions.fetchUserSuccess(data)),
          catchError(() => of(actions.fetchUserError()))
        )
      )
    )
  );

  persistToken$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.loginSuccess),
        map((action) => action.payload),
        tap((payload) => {
          this.authService.persistToken(payload.token);
        })
      ),
    { dispatch: false }
  );

  removeToken$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.refreshTokenError),
        tap(() => {
          this.authService.removeToken();
        })
      ),
    { dispatch: false }
  );

  refreshToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.refreshToken),
      exhaustMap(() =>
        this.authService.refreshToken().pipe(
          map((data) => actions.refreshTokenSuccess(data)),
          catchError(() => of(actions.refreshTokenError()))
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly authService: AuthService
  ) {}
}
