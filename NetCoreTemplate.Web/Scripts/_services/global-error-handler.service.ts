import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AlertService } from '../_services/alert.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    constructor(private injector: Injector, private alertService: AlertService) {
    }

    handleError(error) {
        const location = this.injector.get(LocationStrategy);
        const message = error.message ? error.message : error.toString();
        const url = location instanceof PathLocationStrategy
            ? location.path() : '';

        this.alertService.error(message);
        console.log({ message, url, stack: error.stack });
        throw error;
    }
}