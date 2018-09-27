///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { CustomerModuleComponent } from './customer.module.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { AppLayoutViewModule } from './../application/app-layout/app-layout.view.module';
import { CustGridViewModule } from './cust-grid/cust-grid.view.module';

export const config: NgModule = {
    declarations: [CustomerModuleComponent],
    entryComponents: [],
    imports: [CommonModule, SharedModule, LayoutModule, AppLayoutViewModule, CustGridViewModule, CustomerRoutingModule],
    exports: [],
    providers: [],
};
