/////////////////////////////////////////////////////
// Add your custom code here.
// This file and any changes you make to it are preserved every time the app is generated.
/////////////////////////////////////////////////////
import { Component, Optional, OnInit } from '@angular/core';
import { CustGridViewComponent } from './cust-grid.view.component';

 
@Component({
    selector: 'kb-top-section',
    templateUrl: './topSection.html',
})
export class TopSectionComponent implements OnInit {
    constructor(@Optional() public parent: CustGridViewComponent) {}

    
    ngOnInit() {
       // this.parent.$dataServicesData.Customer.subscribe(res => this.Customers = res);
       
    } 
    
}


