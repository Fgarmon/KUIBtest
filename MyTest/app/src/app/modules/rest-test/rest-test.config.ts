///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { RestTestModuleComponent } from './rest-test.module.component';
import { RestTestRoutingModule } from './rest-test-routing.module';
import { AppLayoutViewModule } from './../application/app-layout/app-layout.view.module';
import { UserGridViewModule } from './user-grid/user-grid.view.module';

export const config: NgModule = {
    declarations: [RestTestModuleComponent],
    entryComponents: [],
    imports: [CommonModule, SharedModule, LayoutModule, AppLayoutViewModule, UserGridViewModule, RestTestRoutingModule],
    exports: [],
    providers: [],
};
