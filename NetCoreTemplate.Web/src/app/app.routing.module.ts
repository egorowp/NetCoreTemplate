import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PageNotFoundComponent } from './not-found.component';

const routes: Routes = [
    //{ path: '', redirectTo: '/phone', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: true } )],
    exports: [RouterModule]
})

export class AppRoutingModule {};