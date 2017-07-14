import { Component, Injectable, } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { AddressService } from './address.service'
import { Address } from '../models/address';

@Component({
    templateUrl: 'address-grid.component.html'
})

export class AddressGridComponent {

    phones : Address[];

    private selectedAddressId: string;

    constructor(
        private addressServices: AddressService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.selectedAddressId = '00000000-0000-0000-0000-000000000000';
        this.phones = this.addressServices.getAddress();
    }

    onRowClick(i: number) {
        this.selectedAddressId = this.phones[i].Id;
        this.router.navigate(['address', 'edit', this.selectedAddressId]);
    }

    onPhoneDelete(i: number) {
        this.addressServices.deletePhone(this.phones[i]);
        event.stopPropagation();
        return false;
    }
}


