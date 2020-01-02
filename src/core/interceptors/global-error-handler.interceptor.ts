//https://blog.angularindepth.com/expecting-the-unexpected-best-practices-for-error-handling-in-angular-21c3662ef9e4

import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

// services
import { ErrorService } from '../services/error/error.service';
import { NotificationService } from '../services/notification/notification.service';
import { LoggingService } from '../services/logging/logging.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    constructor(private injector: Injector,
        private errorService: ErrorService,
        private loggingService: LoggingService,
        private notificationService: NotificationService) { }

    handleError(error: Error | HttpErrorResponse) {
        // const errorService = this.injector.get(ErrorService);
        // const loggingService = this.injector.get(LoggingService);
        // const notificationService = this.injector.get(NotificationService);

        let message;
        let stackTrace;
        if (error instanceof HttpErrorResponse) {
            // Server error
            alert('server error');
            message = this.errorService.getServerErrorMessage(error);
            //stackTrace = errorService.getServerErrorStackTrace(error);
            this.notificationService.showError(message);
        } else {
            // Client Error
            alert('Client error - call notification service');
            message = this.errorService.getClientErrorMessage(error);
            this.notificationService.showError(message);
        }
        // Always log errors
        //alert('always - call logging service');
        this.loggingService.logError(message, stackTrace);
        console.error(error);
    }
}