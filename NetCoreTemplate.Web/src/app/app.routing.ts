import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PhoneGridComponent } from "./phone/phone.grid.component";
import { PhoneFormComponent } from "./phone/phone.form.component";

const appRoutes: Routes = [
    {
        path: "",
        component: PhoneGridComponent
    },
    {
        path: "viewphone",
        component: PhoneFormComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);