///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestTestModuleComponent } from './rest-test.module.component';
import { UserGridViewComponent } from './user-grid/user-grid.view.component';
import { AuthenticationGuardService } from './../../core/auth/authentication-guard.service';
import { AuthorizationGuardService } from './../../core/auth/authorization-guard.service';

const routes: Routes = [
    {
        path: '',
        component: RestTestModuleComponent,
        canActivate: [AuthenticationGuardService],
        children: [
            {
                path: '',
                redirectTo: 'user-grid',
                pathMatch: 'full',
            },
            {
                path: 'user-grid',
                component: UserGridViewComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [],
})
export class RestTestRoutingModule {}
