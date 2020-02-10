import { Action, createReducer, on } from '@ngrx/store';
import * as uuidv4 from 'uuid/v4';

import * as fromActions from './messages.actions';
import { MessagesState } from './messages.model';

export const initialState: MessagesState = {
  messages: []
};

export const reducerFn = createReducer(
  initialState,

  on(fromActions.add, (state, { payload }) => ({
    ...state,
    messages: [
      ...state.messages,
      {
        id: uuidv4(),
        ...payload
      }
    ]
  })),

  on(fromActions.remove, (state, { payload }) => ({
    ...state,
    messages: state.messages.filter((message) => message.id !== payload)
  }))
);

export function reducer(state: MessagesState, action: Action): MessagesState {
  return reducerFn(state, action);
}
