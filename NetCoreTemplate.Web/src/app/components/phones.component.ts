import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { PhonesService } from '../services/phones.service'
import { Phone } from "../models/phone";
declare var $: any;

@Component({
    moduleId: module.id.toString(),
    selector: 'app',
    templateUrl: 'phones.component.html',
    providers: [PhonesService]
})

export class PhonesComponent {

    phones: IPhone[];

    selectedPhone: IPhone;

    constructor(private phonesServices: PhonesService) {
        this.selectedPhone = new Phone("", "", "", 0);
        this.phonesServices.getPhones().subscribe((u: any) => {
            this.phones = u;
        });
    }
    onRowClick(i: number) {
        this.selectedPhone = this.phones[i];
        $('#phonePopup').modal('show');
    }
    onPopupSubmit(a: Object, b: Object) {
        if (!this.phones.includes(this.selectedPhone)) {
            this.phones.push(this.selectedPhone);
        }
        this.phonesServices.savePhone(this.selectedPhone).subscribe((u: any) => { });
        $('#phonePopup').modal('hide');
    }
    onPhoneDelete(i: number) {
        this.phonesServices.deletePhone(this.phones[i]).subscribe((u: any) => {
            this.phones.splice(i, 1);
        });
        event.stopPropagation();
        return false;
    }
    onNewPhone() {
        this.selectedPhone = new Phone("00000000-0000-0000-0000-000000000000", "", "", 0);
        $('#phonePopup').modal('show');
    }
}

interface IPhone {
    Id: string;
    Company: string;
    Name: string;
    Price: number;
}
