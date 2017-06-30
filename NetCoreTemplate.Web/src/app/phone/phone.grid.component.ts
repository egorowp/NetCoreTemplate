import { Component, Injectable  } from '@angular/core';
import { PhonesService } from './phones.service'
import { Phone } from "../models/phone";
import { PhoneFormComponent } from "./phone.form.component";

import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';

//import { DialogRef, ModalComponent } from 'angular2-modal';
//import { Modal } from 'angular2-modal/plugins/bootstrap';

declare var $: any;

@Component({
    moduleId: module.id.toString(),
    selector: 'app',
    templateUrl: 'phone.grid.component.html',
    providers: [PhonesService]
})
@Injectable()
export class PhoneGridComponent {

    phones: Phone[];

    constructor(private phonesServices: PhonesService, private dialog: MdDialog) {
        this.phonesServices.selectedPhone = new Phone("", "", "", 0);
        this.phonesServices.getPhones().subscribe((u: any) => {
            this.phones = u;
        });
        //modal.defaultViewContainer = vcRef;
    }
    onRowClick(i: number) {
        this.phonesServices.selectedPhone = this.phones[i];
        debugger;
        var dialogRef = this.dialog.open(PhoneFormComponent);
        dialogRef.componentInstance.selectedPhone = this.phonesServices.selectedPhone;
        //this.modal.open(PhoneFormComponent, new PhoneFormComponentData(this.phonesServices.selectedPhone));
        //PhoneFormComponent.open();
        //myModal.open();
        //$('#phonePopup').modal('show');
    }
    onPopupSubmit(a: Object, b: Object) {
        if (!this.phones.includes(this.phonesServices.selectedPhone)) {
            this.phones.push(this.phonesServices.selectedPhone);
        }
        this.phonesServices.savePhone(this.phonesServices.selectedPhone).subscribe((u: any) => { });
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
        this.phonesServices.selectedPhone = new Phone("00000000-0000-0000-0000-000000000000", "", "", 0);
        $('#phonePopup').modal('show');
    }
}


