import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

// components
import { AlertTestComponent } from './alert-test.component';

// modules
import { AlertTestRoutingModule } from './alert-test.routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AlertTestRoutingModule
    ],
    declarations: [
        AlertTestComponent
    ]
})

export class AlertTestModule {}