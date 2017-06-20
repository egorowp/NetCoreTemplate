import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PhonesComponent } from "./components/phones.component";

const appRoutes: Routes = [
  {
    path: "",
    component: PhonesComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);