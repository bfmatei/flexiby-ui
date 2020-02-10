import { ActionCreators } from '~helpers/action-creators';

import {
  FetchUserSuccessPayload,
  HydratePayload,
  LoginPayload,
  LoginSuccessPayload,
  RefreshTokenSuccessPayload
} from './auth.model';

const actionCreators = new ActionCreators(['Auth']);

export const hydrate = actionCreators.withPayload<HydratePayload>('hydrate');

export const login = actionCreators.withPayload<LoginPayload>('login');

export const loginSuccess = actionCreators.withPayload<LoginSuccessPayload>(
  'loginSuccess'
);

export const loginError = actionCreators.simple('loginError');

export const fetchUser = actionCreators.simple('fetchUser');

export const fetchUserSuccess = actionCreators.withPayload<
  FetchUserSuccessPayload
>('fetchUserSuccess');

export const fetchUserError = actionCreators.simple('fetchUserError');

export const refreshToken = actionCreators.simple('refreshToken');

export const refreshTokenSuccess = actionCreators.withPayload<
  RefreshTokenSuccessPayload
>('refreshTokenSuccess');

export const refreshTokenError = actionCreators.simple('refreshTokenError');
