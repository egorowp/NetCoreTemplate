import { Component, OnInit, HostListener} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

import { EventsService, AddressesService, PhonesService, AddressFormViewModel, IdParams} from '../../services/index';

declare var $: any;

@Component({
    moduleId: module.id.toString(),
    selector:'address-form',
    templateUrl: 'address-form.component.html',
    //styleUrls: ['phone.form.component.less']
})

export class AddressFormComponent implements OnInit{

    private address: AddressFormViewModel;
    selectedPhoneIds : any[];
    constructor(
        private http: Http,
        private route: ActivatedRoute,
        private router: Router,
        private addressesService: AddressesService,
        private phonesServices : PhonesService,

        private eventsService: EventsService,
    ) {
        this.address = new AddressFormViewModel();
        this.address.id = '00000000-0000-0000-0000-000000000000';
    }

    ngOnInit(): void {
        var selectedPhoneId = this.route.snapshot.params['id'];
        if (selectedPhoneId != undefined) {
            var idParams = new IdParams();
            idParams.id = selectedPhoneId;
            this.addressesService.get(idParams)
                .subscribe(p => {this.address = p;});
        }
    }

    @HostListener('window:keydown', ['$event'])
    public keyboardInput(event: any) {
        if (event.keyCode === 27) {
            this.onClose();
        }
    }

    onPopupSubmit() {
        this.addressesService.save(this.address)
            .subscribe(p => {
                this.eventsService.broadcast('address-form-saved');
                this.router.navigate(['address']);
            });
    }

    onClose() {
        this.router.navigate(['address']);
    }
}


