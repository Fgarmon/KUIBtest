///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustRESTModuleComponent } from './cust-rest.module.component';
import { CustGridViewComponent } from './cust-grid/cust-grid.view.component';
import { AuthenticationGuardService } from './../../core/auth/authentication-guard.service';
import { AuthorizationGuardService } from './../../core/auth/authorization-guard.service';

const routes: Routes = [
    {
        path: '',
        component: CustRESTModuleComponent,
        canActivate: [AuthenticationGuardService],
        children: [
            {
                path: '',
                redirectTo: 'cust-grid',
                pathMatch: 'full',
            },
            {
                path: 'cust-grid',
                component: CustGridViewComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [],
})
export class CustRESTRoutingModule {}
