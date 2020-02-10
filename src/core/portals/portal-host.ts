import {
  ApplicationRef,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Injector
} from '@angular/core';

export class PortalHost<Component> {
  private componentRef: ComponentRef<Component> = null;

  constructor(
    private readonly destinationElement: Element,
    private readonly componentFactoryResolver: ComponentFactoryResolver,
    private readonly appRef: ApplicationRef
  ) {}

  attach(component: any, injector: Injector): ComponentRef<Component> {
    if (this.componentRef === null) {
      const componentFactory: ComponentFactory<Component> = this.componentFactoryResolver.resolveComponentFactory(
        component
      );

      this.componentRef = componentFactory.create(injector);

      this.appRef.attachView(this.componentRef.hostView);

      this.destinationElement.appendChild(
        (this.componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0]
      );
    }

    return this.componentRef;
  }

  detach() {
    if (this.componentRef !== null) {
      this.appRef.detachView(this.componentRef.hostView);

      this.componentRef.destroy();

      this.componentRef = null;
    }
  }

  dispose() {
    this.detach();

    if (this.destinationElement.parentNode !== null) {
      this.destinationElement.parentNode.removeChild(this.destinationElement);
    }
  }
}
