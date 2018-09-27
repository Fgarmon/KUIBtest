/////////////////////////////////////////////////////
// Add your custom code here.
// This file and any changes you make to it are preserved every time the app is generated.
/////////////////////////////////////////////////////
import { NgModule } from '@angular/core';
import { ExcelExportModule } from '@progress/kendo-angular-excel-export';
import { config } from './cust-grid.view.config';
import { DataService } from '../../../core/data/data.service';
import { DataServiceFactory } from '../../../core/data/data-service-factory';

// You can modify or replace module config here
config.imports.push(ExcelExportModule);

@NgModule(config)
export class CustGridViewModule {}
