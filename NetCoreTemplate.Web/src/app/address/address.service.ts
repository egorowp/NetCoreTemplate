import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { Address } from "../models/address";

@Injectable()
export class AddressService {

    selectedAddress: Address;
    
    public addresses = [new Address("", 'Mr. Nice', 'Mr. Nice', 'Mr. Nice')];


    constructor(private http: Http) {
        console.log("AddressService initialization ...");
    }

    getAddress() {
        return this.addresses;

        //this.http.post("./phone", "").map(
        //    res => res.json());
    }

    savePhone(address: Address) {
        debugger;
        //if (!this.phones.includes(this.selectedPhone)) {
        //    this.phones.push(this.selectedPhone);
        //}
        //return this.http.post("phone/save", phone );
    }

    deletePhone(address: Address) {
        //return this.http.post("phone/delete", phone).map(
        //  res => res.json());
    }

}