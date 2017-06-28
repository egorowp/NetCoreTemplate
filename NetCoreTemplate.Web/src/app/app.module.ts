import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

// components
//import { AppComponent } from "./app.component";
import { PhonesComponent } from "./components/phones.component";

import { routing  } from "./app.routing";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, routing],
  declarations: [ PhonesComponent],//AppComponent,
  bootstrap: [PhonesComponent]
})
export class AppModule { }