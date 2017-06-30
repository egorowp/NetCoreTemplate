import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

// modal
//import { ModalModule } from 'angular2-modal';
//import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { MdDialogModule, MdButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import { AppComponent } from "./app.component";
import { PhoneGridComponent } from "./phone/phone.grid.component";
import { PhoneFormComponent } from "./phone/phone.form.component";

import { routing  } from "./app.routing";

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, routing, MdDialogModule, MdButtonModule, BrowserAnimationsModule],// ModalModule.forRoot(), BootstrapModalModule],
    declarations: [PhoneGridComponent, PhoneFormComponent],//AppComponent,
    entryComponents: [PhoneFormComponent],
    bootstrap: [PhoneGridComponent]
})
export class AppModule { }