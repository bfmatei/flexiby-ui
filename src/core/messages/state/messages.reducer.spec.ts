import * as uuidv4 from 'uuid/v4';

import * as actions from './messages.actions';
import { Message, MessageTypes } from './messages.model';
import { initialState, reducer } from './messages.reducer';

describe('[Core][Messages] Reducer', () => {
  const message: Message = {
    id: uuidv4(),
    message: 'Message',
    type: MessageTypes.SUCCESS
  };

  describe('undefined action', () => {
    it('should return the default state', () => {
      const action: any = {
        type: 'undefined'
      };

      // eslint-disable-next-line no-undefined
      const state = reducer(undefined, action);

      expect(state).toEqual(initialState);
    });
  });

  describe('add action', () => {
    it('should add message', () => {
      const action = actions.add({
        type: message.type,
        message: message.message
      });

      const state = reducer(initialState, action);

      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      expect(state.messages.length).toBe(1);
    });
  });

  describe('remove action', () => {
    it('should remove message', () => {
      let state: any = {
        ...initialState,
        messages: [message]
      };

      const action = actions.remove(message.id);

      state = reducer(state, action);

      expect(state.messages).toEqual([]);
    });
  });
});
