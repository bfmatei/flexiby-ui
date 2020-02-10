import { MetaReducer } from '@ngrx/store';

import { environment } from '~env/environment';

import { AppState } from './state.model';

export const metaReducers: Array<MetaReducer<
  AppState
>> = !environment.production ? [] : [];
