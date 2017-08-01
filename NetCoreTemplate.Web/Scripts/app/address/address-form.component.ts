import { Component, OnInit, HostListener} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';

import { EventsService, AddressesService, AddressViewModel, IdParams} from '../../services/index';


@Component({
    moduleId: module.id.toString(),
    selector:'address-form',
    templateUrl: 'address-form.component.html',
    //styleUrls: ['phone.form.component.less']
})

export class AddressFormComponent implements OnInit{

    private address: AddressViewModel;
    optionsModel: number[];
    myOptions: IMultiSelectOption[];

    constructor(
        private http: Http,
        private route: ActivatedRoute,
        private router: Router,
        private addressesService: AddressesService,
        private eventsService: EventsService,
    ) {
        this.address = new AddressViewModel();
        this.address.id = '00000000-0000-0000-0000-000000000000';
    }

    ngOnInit(): void {
        var selectedPhoneId = this.route.snapshot.params['id'];
        if (selectedPhoneId != undefined) {
            var idParams = new IdParams();
            idParams.id = selectedPhoneId;
            this.addressesService.get(idParams)
                .subscribe(p =>  this.address = p);
        }
        this.myOptions = [
            { id: 1, name: 'Option 1' },
            { id: 2, name: 'Option 2' },
        ];
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


