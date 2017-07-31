﻿import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

// components
import { AddressGridComponent } from './address-grid.component';
import { AddressFormComponent } from './address-form.component';

// modules
import { AddressRoutingModule } from './address.routing.module';

//
import { AddressesService } from "../../services/controller-generated.service";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AddressRoutingModule,
        NgbModule
    ],
    declarations: [
        AddressGridComponent,
        AddressFormComponent
    ],
    providers: [
        AddressesService
    ]
})

export class AddressModule {}