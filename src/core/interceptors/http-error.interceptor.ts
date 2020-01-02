// used for global error handling

import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

export class HttpErrorInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        //retry(1),
        catchError((error: HttpErrorResponse) => {
          let errorMessage = '';
          let statusCode = error.status;
          if (statusCode == 403) {
            errorMessage = error.error;
          }
          else {
            if (error.error instanceof ErrorEvent) {
              // client-side erro
              errorMessage = `${error.error}`;
            } else {
              // server-side error
              errorMessage = error.error.Message;
            }
          }

          window.alert(`Error Code: ${statusCode}\nMessage: ${errorMessage}`);
          console.log(error);
          return throwError(errorMessage);
        })
      )
  }
}