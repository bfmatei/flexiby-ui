import { NgModule } from '@angular/core';

import { GuestOnlyGuard } from './guest-only.guard';
import { LoggedInGuard } from './logged-in.guard';

const guards = [GuestOnlyGuard, LoggedInGuard];

@NgModule({
  providers: guards
})
export class GuardsModule {}
