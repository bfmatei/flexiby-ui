import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { MessagesFacade } from './messages.facade';
import { reducer } from './messages.reducer';

@NgModule({
  imports: [StoreModule.forFeature('messages', reducer)],
  providers: [MessagesFacade]
})
export class MessagesStateModule {}
