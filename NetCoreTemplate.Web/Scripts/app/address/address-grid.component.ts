import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { AddressesService, AddressGridViewModel, IdParams, EventsService, PagerService } from '../../services/index';

@Component({
    templateUrl: 'address-grid.component.html'
})

export class AddressGridComponent implements OnInit {
    addresses: AddressGridViewModel[];

    // pager object
    pager: any = {};

    // paged items
    pagedItems: any[];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private addressesService: AddressesService,
        private eventsService: EventsService,
        private pagerService: PagerService
    ) {
    }

    ngOnInit(): void {
        this.reloadGridData();
        this.eventsService.on('address-form-saved',
            () => {
                this.reloadGridData();
            });
    }

    onRowClick(i: number) {
        var id = this.addresses[i].id;
        this.router.navigate(['address', 'edit', id]);
    }

    onAddressDelete(i: number) {
        var idParams = new IdParams();
        idParams.id = this.addresses[i].id;
        this.addressesService.delete(idParams)
            .subscribe(u => this.reloadGridData());
        event.stopPropagation();
        return false;   
    }

    reloadGridData() {
        this.addressesService.getAll().subscribe(r => {
            this.addresses = r;
            this.setPage(1);
        });
    }

    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }

        // get pager object from service
        this.pager = this.pagerService.getPager(this.addresses.length, page, 2);

        // get current page of items
        this.pagedItems = this.addresses.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
}


