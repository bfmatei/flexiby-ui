/* Static */
export interface AuthToken {
  value: string;
  expiration: number;
}

export interface CurrentUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

/* Actions */
export type HydratePayload = AuthToken;

export interface LoginPayload {
  username: string;
  password: string;
}

export interface LoginSuccessPayload {
  token: AuthToken;
  user: CurrentUser;
}

export type FetchUserSuccessPayload = CurrentUser;

export type RefreshTokenSuccessPayload = AuthToken;

/* Api */
export interface LoginSuccessResponse {
  token: AuthToken;
  user: CurrentUser;
}

export type FetchUserSuccessResponse = CurrentUser;

export type RefreshTokenSuccessResponse = AuthToken;

/* State */
export interface AuthState {
  loggingIn: boolean;
  fetchingUser: boolean;
  refreshingToken: boolean;
  token: AuthToken;
  user: CurrentUser;
}
