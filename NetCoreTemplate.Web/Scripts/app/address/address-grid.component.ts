import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { AddressesService, AddressGridViewModel, IdParams, EventsService, PagerService, PagerParams } from '../../services/index';

@Component({
    templateUrl: 'address-grid.component.html'
})

export class AddressGridComponent implements OnInit {
    addresses: AddressGridViewModel[];
    addressesCount: number;
    currentPage: number = 1;
    pageLength : number = 5;
    // pager object
    pager: any = {};

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
        this.addressesService.getCount().subscribe(r => {
            this.addressesCount = r;
            this.setPage(this.currentPage);
        });
    }

    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.addressesCount, page, this.pageLength);

        var params = new PagerParams();
        params.startIndex = this.pager.startIndex;
        params.endIndex = this.pager.endIndex + 1;

        this.addressesService.getPage(params).subscribe(r => {
            this.addresses = r;
        });
        this.currentPage = page;
    }
}


