import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, throwError } from 'rxjs';
import { catchError, filter, switchMap } from 'rxjs/operators';

import { AppState } from '~core/state/state.model';

import * as actions from './auth.actions';
import { AuthToken } from './auth.model';
import * as selectors from './auth.selectors';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private readonly expiredTokenStatus = 400;

  token$ = this.store.pipe(select(selectors.selectToken));

  token: AuthToken = null;

  refreshingToken$ = this.store.pipe(select(selectors.selectRefreshingToken));

  refreshingToken = false;

  constructor(private readonly store: Store<AppState>) {
    this.token$.subscribe((token) => {
      this.token = token;
    });

    this.refreshingToken$.subscribe((refreshingToken) => {
      this.refreshingToken = refreshingToken;
    });
  }

  private addToken(req: HttpRequest<any>) {
    if (this.token.value) {
      return req.clone({
        headers: req.headers.set('Authorization', `Bearer ${this.token.value}`)
      });
    }

    return req;
  }

  intercept(
    req: HttpRequest<any>,
    delegate: HttpHandler
  ): Observable<HttpEvent<any>> {
    return delegate
      .handle(this.addToken(req))
      .pipe(catchError((res) => this.handleError(res, req, delegate)));
  }

  handleError(
    res: HttpErrorResponse,
    req: HttpRequest<any>,
    delegate: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (
      !req.url.includes('auth/refresh-token') &&
      res instanceof HttpErrorResponse &&
      res.status === this.expiredTokenStatus
    ) {
      this.store.dispatch(actions.refreshToken());

      return this.refreshingToken$.pipe(
        filter((refreshingToken) => !refreshingToken),
        switchMap(() => this.intercept(req, delegate))
      );
    }

    return throwError(res);
  }
}
