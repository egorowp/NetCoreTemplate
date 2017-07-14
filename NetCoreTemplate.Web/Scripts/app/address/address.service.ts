import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Address } from '../models/address';

@Injectable()
export class AddressService {

    selectedAddress: Address;
    
    public addresses = [new Address('', 'Mr. Nice', 'Mr. Nice', 'Mr. Nice')];
    
    constructor(private http: Http) {
        console.log('AddressService initialization ...');
    }

    getAddress() {
        return this.addresses;
    }

    savePhone(address: Address) {
    }

    deletePhone(address: Address) {
    }

}