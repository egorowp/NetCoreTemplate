import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhoneGridComponent } from './phone-grid.component';
import { PhoneFormComponent } from './phone-form.component';

const routes: Routes = [
    {
        path: 'phone',
        component: PhoneGridComponent,
        children: [
            { path: 'add', component: PhoneFormComponent },
            { path: 'edit/:id', component: PhoneFormComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PhoneRoutingModule { };