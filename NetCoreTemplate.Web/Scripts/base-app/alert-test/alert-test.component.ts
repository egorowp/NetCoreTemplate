import { Component } from '@angular/core';

import { AlertService } from '../../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'alert-test.component.html'
})

export class AlertTestComponent {
    constructor(private alertService: AlertService) { }

    success(message: string) {
        this.alertService.success(message);
    }

    error(message: string) {
        this.alertService.error(message);
    }

    info(message: string) {
        this.alertService.info(message);
    }

    warn(message: string) {
        this.alertService.warn(message);
    }

    clear() {
        this.alertService.clear();
    }
}