import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddressGridComponent } from './address-grid.component';
import { AddressFormComponent } from './address-form.component';

const routes: Routes = [
    {
        path: 'address',
        component: AddressGridComponent,
        children: [
            { path: 'add', component: AddressFormComponent },
            { path: 'edit/:id', component: AddressFormComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AddressRoutingModule {};