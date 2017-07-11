import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PhoneGridComponent } from "./phone/phone.grid.component";
import { PhoneFormComponent } from "./phone/phone.form.component";

const routes: Routes = [
    { path: 'phone', component: PhoneGridComponent },
    { path: 'phone/add', component: PhoneFormComponent },
    { path: 'phone/edit/:id', component: PhoneFormComponent },
    { path: 'address', redirectTo: '/phone', pathMatch: 'full' },
    { path: '', redirectTo: '/phone', pathMatch: 'full' },
    { path: '**', redirectTo: '/phone', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: true } )],
    exports: [RouterModule]
})

export class AppRoutingModule {};