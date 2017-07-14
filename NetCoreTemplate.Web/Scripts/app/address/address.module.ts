import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

// components
import { AddressGridComponent } from './address-grid.component';

// modules
import { AddressRoutingModule } from './address.routing.module';

import { AddressService } from './address.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AddressRoutingModule
    ],
    declarations: [
        AddressGridComponent
    ],
    providers: [
        AddressService
    ]
})

export class AddressModule {}