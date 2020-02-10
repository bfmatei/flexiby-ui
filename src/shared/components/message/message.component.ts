import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';

import { MessageTypes } from '~core/messages/state/messages.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageComponent implements OnInit, OnDestroy {
  private readonly defaultMessageTimeout = 6000;

  @Input() id: string;

  @Input() message: string;

  @Input() @HostBinding('class') type = MessageTypes.INFO;

  @Output() readonly removed = new EventEmitter<string>();

  timeoutId: any = null;

  ngOnInit() {
    this.timeoutId = setTimeout(() => {
      this.timeoutId = null;

      this.remove();
    }, this.defaultMessageTimeout);
  }

  ngOnDestroy() {
    if (this.timeoutId !== null) {
      clearTimeout(this.timeoutId);

      this.remove();
    }
  }

  remove() {
    this.removed.emit(this.id);
  }
}
