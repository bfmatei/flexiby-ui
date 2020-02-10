import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '~env/environment';

import { StorageFacade } from '~core/storage/storage.facade';

import {
  AuthToken,
  FetchUserSuccessPayload,
  FetchUserSuccessResponse,
  LoginPayload,
  LoginSuccessPayload,
  LoginSuccessResponse,
  RefreshTokenSuccessPayload,
  RefreshTokenSuccessResponse
} from './auth.model';

@Injectable()
export class AuthService {
  private readonly millisecondsInSeconds = 1000;

  constructor(
    private readonly http: HttpClient,
    private readonly storageFacade: StorageFacade,
    @Inject('AuthTokenValueKey') private readonly authTokenValueKey: string,
    @Inject('AuthTokenExpirationKey')
    private readonly authTokenExpirationKey: string
  ) {}

  persistToken(token: AuthToken) {
    this.storageFacade.save(this.authTokenValueKey, token.value);

    this.storageFacade.saveNumber(
      this.authTokenExpirationKey,
      token.expiration
    );
  }

  removeToken() {
    this.storageFacade.remove(this.authTokenValueKey);

    this.storageFacade.remove(this.authTokenExpirationKey);
  }

  transformSecondsToMilliseconds(seconds: number): number {
    return seconds * this.millisecondsInSeconds;
  }

  readToken(): AuthToken {
    const value = this.storageFacade.read('token.value');

    const expiration = this.storageFacade.readNumber('token.expiration');

    if (
      value &&
      !isNaN(expiration) &&
      this.transformSecondsToMilliseconds(expiration) < new Date().getTime()
    ) {
      return {
        value,
        expiration
      };
    }

    return {
      expiration: -1,
      value: null
    };
  }

  login(payload: LoginPayload): Observable<LoginSuccessPayload> {
    return this.http.post<LoginSuccessResponse>(
      `${environment.apiEndpoint}auth/login`,
      payload
    );
  }

  fetchUser(): Observable<FetchUserSuccessPayload> {
    return this.http.get<FetchUserSuccessResponse>(
      `${environment.apiEndpoint}auth/user`
    );
  }

  refreshToken(): Observable<RefreshTokenSuccessPayload> {
    return this.http.get<RefreshTokenSuccessResponse>('auth/token/refresh');
  }
}
