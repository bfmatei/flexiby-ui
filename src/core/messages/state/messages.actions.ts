import { ActionCreators } from '~helpers/action-creators';

import { MessagesAddPayload } from './messages.model';

const creators = new ActionCreators(['Messages']);

export const add = creators.withPayload<MessagesAddPayload>('add');

export const remove = creators.withPayload<string>('remove');
