import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, filter, map } from 'rxjs/operators';

import { MessagesFacade } from '~core/messages/state/messages.facade';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(
    private readonly messagesFacade: MessagesFacade,
    @Inject('ApiEndpoint') private readonly apiEndpoint: string
  ) {}

  intercept(
    req: HttpRequest<any>,
    delegate: HttpHandler
  ): Observable<HttpEvent<any>> {
    return delegate.handle(req).pipe(
      filter(() => req.url.startsWith(this.apiEndpoint)),
      filter((evt) => evt instanceof HttpResponse),
      map((evt) =>
        (evt as HttpResponse<any>).clone({
          body: (evt as HttpResponse<any>).body.success.response
        })
      ),
      catchError((res) => this.handleError(res))
    );
  }

  handleError(res: HttpErrorResponse): Observable<HttpEvent<any>> {
    this.messagesFacade.addError(res.error.error.response.message);

    return throwError(res);
  }
}
