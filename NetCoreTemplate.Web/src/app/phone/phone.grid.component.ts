import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { Http } from "@angular/http";

import "rxjs/add/operator/map";

import { Phone } from "../models/phone";

@Component({
    templateUrl: 'phone.grid.component.html'
})

export class PhoneGridComponent {

    phones : Phone[];

    private selectedPhoneId: string;

    constructor(
        private http: Http,
        private route: ActivatedRoute,
        private router: Router
    ) {
        debugger;
        this.selectedPhoneId = "00000000-0000-0000-0000-000000000000";

        this.http.post("./phone", "")
            .map(res => res.json())
            .subscribe(ps => {this.phones = ps;});
    }

    onRowClick(i: number) {
        this.selectedPhoneId = this.phones[i].Id;
        this.router.navigate(['phone', 'edit', this.selectedPhoneId]);
    }

    onPhoneDelete(i: number) {
        this.http.post("phone/delete", this.phones[i])
            .map(res => res.json())
            .subscribe((u: any) => this.phones.splice(i, 1));
        event.stopPropagation();
        return false;
    }
}


