import { NgModule } from '@angular/core';

import { SharedModule } from '~shared/shared.module';

import { MessagesComponent } from './messages.component';
import { MessagesStateModule } from './state/messages.module';

@NgModule({
  declarations: [MessagesComponent],
  imports: [SharedModule, MessagesStateModule],
  exports: [MessagesComponent]
})
export class MessagesModule {}
