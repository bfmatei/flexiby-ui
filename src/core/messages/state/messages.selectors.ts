import { createFeatureSelector, createSelector } from '@ngrx/store';

import { MessagesState } from './messages.model';

export const selectState = createFeatureSelector<MessagesState>('messages');

export const selectData = createSelector(
  selectState,
  (state) => state.messages
);
