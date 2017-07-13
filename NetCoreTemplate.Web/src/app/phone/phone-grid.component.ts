import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

import { Phone } from "../models/phone";
import { PhoneService } from './phone.service';
import { EventsService } from '../events.service';

@Component({
    templateUrl: 'phone-grid.component.html'
})

export class PhoneGridComponent implements OnInit {
    phones: Phone[];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private phoneService: PhoneService,
        private eventsService : EventsService
    ) {
    }

    ngOnInit(): void {
        debugger;
        this.reloadGridData();
        this.eventsService.on("phone-form-saved", () => {
            this.reloadGridData();
        })
    }

    onRowClick(i: number) {
        var selectedPhoneId = this.phones[i].Id;
        this.router.navigate(['phone', 'edit', selectedPhoneId]);
    }

    onPhoneDelete(i: number) {
        this.phoneService.deletePhone(this.phones[i])
            .subscribe((u: any) => this.reloadGridData());
        event.stopPropagation();
        return false;
    }

    reloadGridData() {
        this.phoneService.getPhones()
            .subscribe(ps => { this.phones = ps; });
    }
}


