import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { AppState } from '~core/state/state.model';

import * as actions from './messages.actions';
import { MessageTypes } from './messages.model';
import * as selectors from './messages.selectors';

@Injectable({ providedIn: 'root' })
export class MessagesFacade {
  data$ = this.store.pipe(select(selectors.selectData));

  constructor(private readonly store: Store<AppState>) {}

  add(message: string, type: MessageTypes) {
    this.store.dispatch(actions.add({ message, type }));
  }

  addInfo(message: string) {
    this.add(message, MessageTypes.INFO);
  }

  addWarn(message: string) {
    this.add(message, MessageTypes.WARN);
  }

  addError(message: string) {
    this.add(message, MessageTypes.ERROR);
  }

  addSuccess(message: string) {
    this.add(message, MessageTypes.SUCCESS);
  }

  remove(id: string) {
    this.store.dispatch(actions.remove(id));
  }
}
