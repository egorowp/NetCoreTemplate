import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { EventsService } from '../../services/events.service';
import { PhonesService, PhoneViewModel, IdParams } from '../../services/controller-generated.service';

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
            .subscribe(u => this.reloadGridData());
        event.stopPropagation();
        return false;
    }

    reloadGridData() {
        this.phonesService.getAll().subscribe(r => { debugger; this.phones = r });
    }
}


