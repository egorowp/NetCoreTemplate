import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertTestComponent } from './alert-test.component';

const routes: Routes = [
    {
        path: 'alert-test',
        component: AlertTestComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AlertTestRoutingModule { };