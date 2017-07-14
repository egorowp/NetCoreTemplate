import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

// components
import { PhoneGridComponent } from './phone-grid.component';
import { PhoneFormComponent } from './phone-form.component';

// modules
import { PhoneRoutingModule } from './phone.routing.module';

//services
import { PhoneService } from './phone.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PhoneRoutingModule
    ],
    declarations: [
        PhoneGridComponent,
        PhoneFormComponent
    ],
    providers: [
        PhoneService
    ]
})

export class PhoneModule {}