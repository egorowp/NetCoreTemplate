import { Injectable, Injector } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { Alert, AlertType } from '../models/alert';

@Injectable()
export class AlertService {
    private subject = new Subject<Alert>();
    private keepAfterRouteChange = false;

    constructor(private injector: Injector) {
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        setTimeout(() => {
            var router = injector.get(Router);
            router.events.subscribe(event => {
                if (event instanceof NavigationEnd) {
                    if (this.keepAfterRouteChange) {
                        // only keep for a single route change
                        this.keepAfterRouteChange = false;
                    } else {
                        // clear alert messages
                        this.clear();
                    }
                }
            });
        });
    }

    getAlert(): Observable<any> {
        return this.subject.asObservable();
    }

    success(message: string, keepAfterRouteChange = false) {
        this.alert(AlertType.Success, message, keepAfterRouteChange);
    }

    error(message: string, keepAfterRouteChange = false) {
        this.alert(AlertType.Error, message, keepAfterRouteChange);
    }

    info(message: string, keepAfterRouteChange = false) {
        this.alert(AlertType.Info, message, keepAfterRouteChange);
    }

    warn(message: string, keepAfterRouteChange = false) {
        this.alert(AlertType.Warning, message, keepAfterRouteChange);
    }

    alert(type: AlertType, message: string, keepAfterRouteChange = false) {
        setTimeout(e => {
            this.keepAfterRouteChange = keepAfterRouteChange;
            this.subject.next(<Alert>{ type: type, message: message });
        });
    }

    clear() {
        // clear alerts
        this.subject.next();
    }
}