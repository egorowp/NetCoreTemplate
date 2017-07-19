import { Component, OnInit, HostListener} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

import { EventsService } from '../../services/events.service';
import { PhonesService, PhoneViewModel, IdParams } from '../../services/controller-generated.service';


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
        private phonesService: PhonesService,
        private eventsService: EventsService,
    ) {
        this.phone = new PhoneViewModel();
        this.phone.id = '00000000-0000-0000-0000-000000000000';
    }

    ngOnInit(): void {
        var selectedPhoneId = this.route.snapshot.params['id'];
        if (selectedPhoneId != undefined) {
            var idParams = new IdParams();
            idParams.id = selectedPhoneId;
            this.phonesService.get(idParams)
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
        this.phonesService.save(this.phone)
            .subscribe(p => {
                this.eventsService.broadcast('phone-form-saved');
                this.router.navigate(['phone']);
            });
    }

    onClose() {
        this.router.navigate(['phone']);
    }
}


