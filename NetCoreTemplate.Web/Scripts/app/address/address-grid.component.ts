import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
    templateUrl: 'address-grid.component.html'
})

export class AddressGridComponent {

    private selectedAddressId: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.selectedAddressId = '00000000-0000-0000-0000-000000000000';
    }

    onRowClick(i: number) {
        this.router.navigate(['address', 'edit', this.selectedAddressId]);
    }

    onPhoneDelete(i: number) {
        event.stopPropagation();
        return false;
    }
}


