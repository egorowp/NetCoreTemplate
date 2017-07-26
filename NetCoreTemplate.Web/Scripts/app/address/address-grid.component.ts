import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { EventsService } from '../../services/events.service';
import { AddressesService, AddressGridViewModel, IdParams } from '../../services/controller-generated.service';

@Component({
    templateUrl: 'address-grid.component.html'
})

export class AddressGridComponent implements OnInit {
    phones: AddressGridViewModel[];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private addressesService: AddressesService,
        private eventsService : EventsService,
    ) {
    }

    ngOnInit(): void {
        this.reloadGridData();
        this.eventsService.on('phone-form-saved',
            () => {
                this.reloadGridData();
            });
    }

    onRowClick(i: number) {
        var selectedPhoneId = this.phones[i].id;
        this.router.navigate(['phone', 'edit', selectedPhoneId]);
    }

    onPhoneDelete(i: number) {
        var idParams = new IdParams();
        idParams.id = this.phones[i].id;
        this.addressesService.delete(idParams)
            .subscribe(u => this.reloadGridData());
        event.stopPropagation();
        return false;
    }

    reloadGridData() {
        this.addressesService.getAll().subscribe(r => { this.phones = r });
    }
}


