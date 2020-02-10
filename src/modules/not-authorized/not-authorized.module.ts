import { NgModule } from '@angular/core';

import { SharedModule } from '~shared/shared.module';

import { NotAuthorizedComponent } from './not-authorized.component';
import { NotAuthorizedRoutingModule } from './not-authorized.routing';

@NgModule({
  declarations: [NotAuthorizedComponent],
  imports: [SharedModule, NotAuthorizedRoutingModule]
})
export class NotAuthorizedModule {}
