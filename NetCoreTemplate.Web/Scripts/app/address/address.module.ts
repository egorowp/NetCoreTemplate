import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

// components
import { AddressGridComponent } from './address-grid.component';

// modules
import { AddressRoutingModule } from './address.routing.module';

//
import { AddressesService } from "../../services/controller-generated.service";

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
        AddressesService
    ]
})

export class AddressModule {}