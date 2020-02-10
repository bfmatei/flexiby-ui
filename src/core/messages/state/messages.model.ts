export enum MessageTypes {
  INFO = 'info',
  WARN = 'warn',
  ERROR = 'error',
  SUCCESS = 'success'
}

export interface Message {
  id: string;
  type: MessageTypes;
  message: string;
}

export interface MessagesAddPayload {
  message: string;
  type: MessageTypes;
}

export interface MessagesState {
  messages: Message[];
}
