import { Component, Inject } from '@angular/core';

//import { DialogRef, ModalComponent } from 'angular2-modal';
//import { BSModalContext } from 'angular2-modal/plugins/bootstrap';


import { MdDialogRef } from '@angular/material';

//export class PhoneFormComponentData extends BSModalContext {
//    selectedPhone: Phone;

//    constructor(public phone : Phone) {
//        super();
//        this.selectedPhone = phone;
//    }
//}

import {PhonesService } from "./phones.service";
import { Phone}  from "../models/phone";

@Component({
    moduleId: module.id.toString(),
    selector: 'modal-content',
    templateUrl: 'phone.form.component.html',
    providers: [PhonesService]
})

export class PhoneFormComponent {

    public selectedPhone: Phone;

    constructor(public dialog: MdDialogRef<PhoneFormComponent>, @Inject(MdDialogRef) public data: Phone) {
    }

    onPopupSubmit(a: Object, b: Object) {
        debugger;
        //if (!this.phones.includes(this.selectedPhone)) {
        //    this.phones.push(this.selectedPhone);
        //}
        this.dialog.close();
        //this.phonesServices.savePhone(this.selectedPhone).subscribe((u: any) => { });
        //$('#phonePopup').modal('hide');
    }
}


