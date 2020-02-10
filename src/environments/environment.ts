import { Environment } from './environment.model';

export const environment: Environment = {
  production: false,
  apiEndpoint: '/api/',
  authTokenValueKey: 'token.value',
  authTokenExpirationKey: 'token.expiration'
};

// Uncomment to ignore zone related error stack frames such as `zone.run` and `zoneDelegate.invokeTask`.
// eslint-disable-next-line capitalized-comments
// import 'zone.js/dist/zone-error';
