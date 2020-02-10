import { Action, createReducer, on } from '@ngrx/store';

import * as actions from './auth.actions';
import { AuthState } from './auth.model';

export const initialState: AuthState = {
  loggingIn: false,
  fetchingUser: false,
  refreshingToken: false,
  token: {
    expiration: -1,
    value: null
  },
  user: null
};

export const reducerFn = createReducer(
  initialState,

  on(actions.hydrate, (state, { payload }) => ({
    ...state,
    token: payload,
    fetchingUser: true
  })),

  on(actions.login, (state) => ({
    ...state,
    loggingIn: true
  })),

  on(actions.loginSuccess, (state, { payload }) => ({
    ...state,
    loggingIn: false,
    fetchingUser: true,
    ...payload
  })),

  on(actions.loginError, (state) => ({
    ...state,
    loggingIn: false
  })),

  on(actions.fetchUser, (state) => ({
    ...state,
    fetchingUser: true
  })),

  on(actions.fetchUserSuccess, (state, { payload }) => ({
    ...state,
    fetchingUser: false,
    user: payload
  })),

  on(actions.fetchUserError, (state) => ({
    ...state,
    fetchingUser: false
  })),

  on(actions.refreshToken, (state) => ({
    ...state,
    refreshingToken: true
  })),

  on(actions.refreshTokenSuccess, (state, { payload }) => ({
    ...state,
    refreshingToken: false,
    token: payload
  })),

  on(actions.refreshTokenError, (state) => ({
    ...state,
    refreshingToken: false,
    token: {
      expiration: -1,
      value: null
    },
    user: null
  }))
);

export function reducer(state: AuthState, action: Action): AuthState {
  return reducerFn(state, action);
}
