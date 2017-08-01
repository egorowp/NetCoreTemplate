import { NgModule, ErrorHandler,  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';

// components
import { AppComponent } from './app.component';
import { AlertComponent } from '../directives/alert.component';

// modules
import { AppRoutingModule } from './app.routing.module';
import { AddressModule } from './address/address.module';
import { PhoneModule } from './phone/phone.module';
import { AlertTestModule } from './alert-test/alert-test.module';

//services
import { PagerService, AlertService, GlobalErrorHandler, EventsService } from '../services/index';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AddressModule,
        PhoneModule,
        AlertTestModule,
        AppRoutingModule
    ],
    declarations: [
        AlertComponent,
        AppComponent
    ],
    providers: [
        AlertService,
        EventsService,
        PagerService,
        {
            provide: ErrorHandler,
            useClass: GlobalErrorHandler
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    // Diagnostic only: inspect router configuration
    constructor(router: Router) {
        console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
}