import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { ApiInterceptor } from './api.interceptor';

@NgModule({
  providers: [
    ApiInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    }
  ]
})
export class ApiModule {}
