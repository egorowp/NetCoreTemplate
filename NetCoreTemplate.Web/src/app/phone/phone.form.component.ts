import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';

//import { PhoneGridComponent } from "./phone.grid.component";
import { Phone}  from "../models/phone";

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'phone.form.component.html',
    //styleUrls: ['phone.form.component.less']
})

export class PhoneFormComponent implements OnInit, OnDestroy{

    //public selectedPhone: Phone;
    private selectedPhoneId: string;

    constructor(
        //private phonesServices: PhonesService,
        //private phonesGridComponent: PhoneGridComponent,
        private route: ActivatedRoute,
        private router: Router
    ) {
        debugger;
    }

    ngOnInit(): void {
        debugger;
        var selectedPhoneId = this.route.snapshot.params['id'];
        //this.selectedPhone = this.phonesServices.selectedPhone;
        //throw new Error("Not implemented");
    }

    ngOnDestroy(): void {
        //throw new Error("Not implemented");
    }
    
    //@HostListener("window:keydown", ["$event"])
    //public keyboardInput(event: any) {
    //    if (event.keyCode === 27) {
    //        this.router.navigate(["/"]);
    //    }
    //}

    onPopupSubmit(a: Object, b: Object) {
        //this.phonesServices.savePhone(this.selectedPhone).subscribe((u: any) => { });
        //if (!this.phonesGridComponent.phones.includes(this.selectedPhone)) {
        //    this.phones.push(this.selectedPhone);
        //}
        //return this.http.post("phone/save", phone);
        this.router.navigate(['phone']);
    }

    onClose(a: Object, b: Object) {
        this.router.navigate(['phone']);
    }

}


