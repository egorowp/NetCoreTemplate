import { Component, OnInit  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

import { Phone } from "../models/phone";
import { PhoneFormComponent } from './phone-form.component';
import { PhoneService } from './phone.service';

@Component({
    templateUrl: 'phone-grid.component.html'
})

export class PhoneGridComponent implements OnInit {
    phones: Phone[];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private phoneService: PhoneService
    ) {
    }

    ngOnInit(): void {
        this.phoneService.getPhones()
            .subscribe(ps => { this.phones = ps; });
    }

    onRowClick(i: number) {
        var selectedPhoneId = this.phones[i].Id;
        this.router.navigate(['phone', 'edit', selectedPhoneId]);
    }

    onPhoneDelete(i: number) {
        this.phoneService.deletePhone(this.phones[i])
            .subscribe((u: any) => this.ngOnInit());
        event.stopPropagation();
        return false;
    }
}


