import { Subscription } from 'rxjs';

export class SubscriptionsManager {
  readonly subscriptions = new Subscription();

  add(...subscriptions: Subscription[]) {
    subscriptions.forEach((subscription) =>
      this.subscriptions.add(subscription)
    );
  }

  remove(subscription: Subscription) {
    this.subscriptions.remove(subscription);
  }

  destroy() {
    this.subscriptions.unsubscribe();
  }
}
