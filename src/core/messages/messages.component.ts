import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MessagesFacade } from './state/messages.facade';
import { Message } from './state/messages.model';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagesComponent {
  data$ = this.messagesFacade.data$;

  constructor(private readonly messagesFacade: MessagesFacade) {}

  remove(id: string) {
    this.messagesFacade.remove(id);
  }

  trackByMessages(_index: number, message: Message) {
    return message.id;
  }
}
