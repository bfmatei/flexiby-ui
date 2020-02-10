import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appApplyFn',
  pure: true
})
export class ApplyFnPipe implements PipeTransform {
  transform(value: any, fn: (...args: any[]) => any, ...fnArgs: any[]): any {
    fnArgs.unshift(value);

    return fn(...fnArgs);
  }
}
