import { ComponentRef, Injector } from '@angular/core';

import { PortalHost } from './portal-host';

export class Portal<Component> {
  constructor(
    private readonly component: any,
    private readonly host: PortalHost<Component>,
    private readonly injector: Injector
  ) {}

  attach(injector = this.injector): ComponentRef<Component> {
    return this.host.attach(this.component, injector);
  }

  detach() {
    this.host.detach();
  }
}
