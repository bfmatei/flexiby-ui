import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AuthState } from './auth.model';

export const selectState = createFeatureSelector<AuthState>('auth');

export const selectLoggingIn = createSelector(
  selectState,
  (state) => state.loggingIn
);

export const selectFetchingUser = createSelector(
  selectState,
  (state) => state.fetchingUser
);

export const selectRefreshingToken = createSelector(
  selectState,
  (state) => state.refreshingToken
);

export const selectToken = createSelector(selectState, (state) => state.token);

export const selectUser = createSelector(selectState, (state) => state.user);

export const selectLoggedIn = createSelector(
  selectToken,
  selectUser,
  (token, user) => token.value !== null && user !== null
);
