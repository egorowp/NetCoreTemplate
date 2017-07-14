import { Component, OnInit, HostListener} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

import { Phone } from '../models/phone';
import { PhoneService } from './phone.service';
import { EventsService } from '../events.service';

@Component({
    moduleId: module.id.toString(),
    selector:'phone-form',
    templateUrl: 'phone-form.component.html',
    //styleUrls: ['phone.form.component.less']
})

export class PhoneFormComponent implements OnInit{

    private phone: any;

    constructor(
        private http: Http,
        private route: ActivatedRoute,
        private router: Router,
        private phoneService: PhoneService,
        private eventsService : EventsService
    ) {
        this.phone = new Phone('00000000-0000-0000-0000-000000000000', '', '', 0);
    }

    ngOnInit(): void {
        var selectedPhoneId = this.route.snapshot.params['id'];
        if (selectedPhoneId != undefined) {
            this.phoneService.getPhone(selectedPhoneId)
                .subscribe(p =>  this.phone = p);
        }
    }

    @HostListener('window:keydown', ['$event'])
    public keyboardInput(event: any) {
        if (event.keyCode === 27) {
            this.onClose();
        }
    }

    onPopupSubmit() {
        this.phoneService.savePhone(this.phone)
            .subscribe(p => {
                this.eventsService.broadcast('phone-form-saved');
                this.router.navigate(['phone']);
            });
    }

    onClose() {
        this.router.navigate(['phone']);
    }
}


