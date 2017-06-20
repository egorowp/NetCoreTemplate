import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { PhonesService } from '../services/phones.service'
import { Phone } from "../models/phone";
declare var $ : any;

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
      debugger;
      this.selectedPhone = new Phone(0, "", "");
      this.phonesServices.getUsers().subscribe((u: any) => {
          this.phones = u;
        });
    }
    onRowClick(i:  number) {
      this.selectedPhone = this.phones[i];
        $('#userPopup').modal('show');
    }
    onPopupSubmit(a:Object, b:Object) {
      if (!this.phones.includes(this.selectedPhone)) {
        this.phones.push(this.selectedPhone);
        }
      this.phonesServices.saveUser(this.selectedPhone).subscribe((u: any) => {
            
        });
        $('#userPopup').modal('hide');
    }
    onUserDelete(i: number) {
      return this.phonesServices.deleteUser(this.selectedPhone).subscribe((u: any) => {
            
        });
    }
    onNewUser() {
      this.selectedPhone = new Phone(0, "", "");
        $('#userPopup').modal('show');
    }
}

interface IPhone {
    ID: number;
    UserName: string;
    Email: string;
}
