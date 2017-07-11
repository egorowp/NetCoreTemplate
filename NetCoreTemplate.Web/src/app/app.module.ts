import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Router } from '@angular/router';

// components
import { AppComponent } from "./app.component";
import { PhoneGridComponent } from "./phone/phone.grid.component";
import { PhoneFormComponent } from "./phone/phone.form.component";

import { AddressModule } from "./address/address.module";

// modules
import { AppRoutingModule } from "./app.routing";

import { DialogService } from './dialog.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AddressModule
    ],
    declarations: [
        AppComponent,
        PhoneGridComponent,
        PhoneFormComponent
    ],
    providers: [
        DialogService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    // Diagnostic only: inspect router configuration
    constructor(router: Router) {
        console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
}