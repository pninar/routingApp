import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';
import { GlobalErrorHandler } from './interceptors/global-error-handler.interceptor';
import { ErrorService } from './services/error/error.service';
import { LoggingService } from './services/logging/logging.service';
import { NotificationService } from './services/notification/notification.service';
import { AuthenticationService } from './services/authenticaton/authentication.service';

@NgModule({
  declarations: [],
  imports: [HttpClientModule,],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    AuthenticationService,
    ErrorService,
    LoggingService,
    NotificationService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error("You should import core module only in the root module")
    }
  }
}
