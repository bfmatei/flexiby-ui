import { InjectionToken, Injector } from '@angular/core';

export const PORTAL_DATA = new InjectionToken<{}>('PORTAL_DATA');

export class PortalInjector implements Injector {
  constructor(
    private readonly injector: Injector,
    private readonly customTokens: WeakMap<any, any>
  ) {}

  get(token: any, notFoundValue?: any): any {
    const value = this.customTokens.get(token);

    if (typeof value !== 'undefined') {
      return value;
    }

    return this.injector.get<any>(token, notFoundValue);
  }
}
