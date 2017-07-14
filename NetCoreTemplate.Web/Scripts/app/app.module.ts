import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';

// components
import { AppComponent } from './app.component';

// modules
import { AppRoutingModule } from './app.routing.module';
import { AddressModule } from './address/address.module';
import { PhoneModule } from './phone/phone.module';

//services
import { EventsService } from './events.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AddressModule,
        PhoneModule,       
        AppRoutingModule,
        BrowserAnimationsModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        EventsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    // Diagnostic only: inspect router configuration
    constructor(router: Router) {
        console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
}