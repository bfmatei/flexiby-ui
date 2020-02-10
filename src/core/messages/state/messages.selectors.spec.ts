import * as uuidv4 from 'uuid/v4';

import { AppState } from '~core/state/state.model';

import { Message, MessageTypes } from './messages.model';
import * as selectors from './messages.selectors';

describe('[Core][Messages] Selectors', () => {
  let state: Partial<AppState> = null;

  const message: Message = {
    id: uuidv4(),
    message: 'Message',
    type: MessageTypes.SUCCESS
  };

  beforeEach(() => {
    state = {
      messages: {
        messages: [message]
      }
    };
  });

  it('selectData', () => {
    expect(selectors.selectData(state)).toEqual([message]);
  });
});
