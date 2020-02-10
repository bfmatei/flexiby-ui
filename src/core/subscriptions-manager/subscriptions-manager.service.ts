import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

import { SubscriptionsManager } from './subscriptions-manager';

@Injectable({ providedIn: 'root' })
export class SubscriptionsManagerService {
  private readonly subscriptions = new WeakMap<any, SubscriptionsManager>();

  create(): SubscriptionsManager {
    return new SubscriptionsManager();
  }

  register(component: any): SubscriptionsManager {
    const originalComponentOnDestroy = component.onDestroy;

    component.onDestroy = () => {
      this.subscriptions.get(component).destroy();

      this.subscriptions.delete(component);

      if (typeof originalComponentOnDestroy === 'function') {
        originalComponentOnDestroy();
      }
    };

    const subscriptionManager = this.create();

    this.subscriptions.set(component, subscriptionManager);

    return subscriptionManager;
  }

  add(component: any, ...subscriptions: Subscription[]) {
    const componentSubscriptions = this.subscriptions.get(component);

    subscriptions.forEach((subscription) => {
      componentSubscriptions.add(subscription);
    });
  }

  remove(component: any, subscription: Subscription) {
    this.subscriptions.get(component).remove(subscription);
  }

  destroy(component: any) {
    this.subscriptions.get(component).destroy();

    this.subscriptions.delete(component);
  }
}
