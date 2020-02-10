import { createAction } from '@ngrx/store';

export class ActionCreators {
  private readonly modulesString = this.modules
    .map((module) => `[${module}]`)
    .join('');

  constructor(private readonly modules: string[]) {}

  private getActionName(value: string): string {
    return `${this.modulesString} ${value}`;
  }

  simple(name: string) {
    return createAction(this.getActionName(name));
  }

  withPayload<PAYLOAD = any>(name: string) {
    return createAction(this.getActionName(name), (payload: PAYLOAD) => ({
      payload
    }));
  }
}
