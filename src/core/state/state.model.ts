import { AuthState } from '~core/auth/auth.model';
import { MessagesState } from '~core/messages/state/messages.model';

export interface AppState {
  auth?: AuthState;
  messages?: MessagesState;
}
