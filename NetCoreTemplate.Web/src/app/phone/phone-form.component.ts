import { Component, OnInit, HostListener, Output, EventEmitter} from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from "@angular/http";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Phone } from "../models/phone";
import { PhoneService } from './phone.service';


@Component({
    moduleId: module.id.toString(),
    templateUrl: 'phone-form.component.html',
    //styleUrls: ['phone.form.component.less']
})

export class PhoneFormComponent implements OnInit{

    @Output() notify: EventEmitter<string> = new EventEmitter<string>();

    private phone: any;

    constructor(
        private http: Http,
        private route: ActivatedRoute,
        private router: Router,
        private phoneService : PhoneService
    ) {
        this.phone = new Phone("00000000-0000-0000-0000-000000000000", "", "", 0);
    }

    ngOnInit(): void {
        var selectedPhoneId = this.route.snapshot.params['id'];
        if (selectedPhoneId != undefined) {
            this.phoneService.getPhone(selectedPhoneId)
                .subscribe();
        }
    }

    @HostListener("window:keydown", ["$event"])
    public keyboardInput(event: any) {
        if (event.keyCode === 27) {
            this.onClose();
        }
    }

    onPopupSubmit() {
        this.phoneService.savePhone(this.phone)
            .subscribe(p => {
                this.notify.emit('Click from nested component');
                this.router.navigate(['phone']);
            });
    }

    onClose() {
        this.router.navigate(['phone']);
    }
}


