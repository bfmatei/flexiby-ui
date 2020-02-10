import {
  ApplicationRef,
  ComponentFactoryResolver,
  Injectable,
  Injector,
  Type
} from '@angular/core';

import { Portal } from './portal';
import { PortalHost } from './portal-host';
import { PORTAL_DATA, PortalInjector } from './portal-injector';

@Injectable({ providedIn: 'root' })
export class PortalsService {
  constructor(
    private readonly componentFactoryResolver: ComponentFactoryResolver,
    private readonly appRef: ApplicationRef,
    private readonly injector: Injector
  ) {}

  createHost<Component>(targetElement = document.body): PortalHost<Component> {
    return new PortalHost<Component>(
      targetElement,
      this.componentFactoryResolver,
      this.appRef
    );
  }

  createPortal<Component>(
    component: Type<Component>,
    host: PortalHost<Component>,
    inputs?: { [id: string]: any }
  ): Portal<Component> {
    return new Portal<Component>(component, host, this.createInjector(inputs));
  }

  createInjector(inputs?: { [id: string]: any }): Injector {
    if (!inputs) {
      return this.injector;
    }

    const customTokens = new WeakMap<any, any>([[PORTAL_DATA, inputs]]);

    return new PortalInjector(this.injector, customTokens);
  }
}
