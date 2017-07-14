import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddressGridComponent } from './address-grid.component';

const routes: Routes = [
    {
        path: 'address', component: AddressGridComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AddressRoutingModule {};