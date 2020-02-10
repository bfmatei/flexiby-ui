import { NgModule } from '@angular/core';
import { StorageFacade } from './storage.facade';

@NgModule({
  providers: [StorageFacade]
})
export class StorageModule {}
