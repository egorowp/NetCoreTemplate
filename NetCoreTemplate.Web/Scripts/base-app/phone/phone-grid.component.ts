import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

import { PhonesService, PhoneViewModel, IdParams, EventsService } from '../../_services/index';

@Component({
    templateUrl: 'phone-grid.component.html'
})

export class PhoneGridComponent implements OnInit {
    phones: PhoneViewModel[];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private phonesService: PhonesService,
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
        this.phonesService.delete(idParams)
            .subscribe(() => this.reloadGridData());
        event.stopPropagation();
        return false;
    }

    reloadGridData() {
        this.phonesService.getAll().subscribe(r => { this.phones = r });
    }
}


