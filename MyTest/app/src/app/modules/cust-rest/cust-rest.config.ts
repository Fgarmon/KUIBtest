///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { CustRESTModuleComponent } from './cust-rest.module.component';
import { CustRESTRoutingModule } from './cust-rest-routing.module';
import { AppLayoutViewModule } from './../application/app-layout/app-layout.view.module';
import { CustGridViewModule } from './cust-grid/cust-grid.view.module';

export const config: NgModule = {
    declarations: [CustRESTModuleComponent],
    entryComponents: [],
    imports: [CommonModule, SharedModule, LayoutModule, AppLayoutViewModule, CustGridViewModule, CustRESTRoutingModule],
    exports: [],
    providers: [],
};
