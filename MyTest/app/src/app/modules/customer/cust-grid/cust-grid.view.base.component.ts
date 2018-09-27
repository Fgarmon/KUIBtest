///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, Injector, ViewChild, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

import { State } from '@progress/kendo-data-query';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

import { KbGridComponent } from '../../../shared/components/grid/grid.component';
import { ModelDataResult } from '../../../core/data/model-data-result';

import { DataService } from '../../../core/data/data.service';
import { DataServiceFactory } from '../../../core/data/data-service-factory';
import { ProgressServiceFactory } from '../../../core/data/progress-service-factory';
import { SportsCustomer } from '../../../data/sports/customer.model';
import { getCustomerConfig } from '../../../data/sports/customer.config';

import { NotificationService } from './../../../core/notification/notification.service';
import { Notification } from './../../../core/notification/notification';

@Component({
    templateUrl: './cust-grid.view.component.html',
    styleUrls: ['./cust-grid.view.component.css'],
})
export class CustGridViewBaseComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('grid')
    public $grid: KbGridComponent;

    public $progressServiceFactory: ProgressServiceFactory;
    public $dataServices: { [key: string]: DataService<any> };
    public $dataServicesData: { [key: string]: Observable<any> };
    public $dataServicesResult: { [key: string]: BehaviorSubject<ModelDataResult<any>> };
    public $notificationService: NotificationService;

    public $dataServicesState: { [key: string]: State } = {
        Customer: {
            skip: 0,
            take: 20,
        },
    };

    public $dataModels: any = {
        CustomerModel: {},
    };

    public $config: any = {
        title: 'Customer',
        titleKey: 'modules.customer.views.custGrid.title',
        components: {
            grid: {
                filterable: true,
                groupable: false,
                pageable: this.$dataServicesState['Customer'].take !== undefined,
                reorderable: false,
                resizable: false,
                sortable: true,
                commandColumnWidth: 220,
                editing: {
                    mode: 'ReadOnly',
                },
                confirmDelete: true,
                events: {
                    onRowSelect: e => {
                        this['onRowSelect'](e);
                    },
                },
            },
        },
    };

    constructor(public injector: Injector) {
        this.$progressServiceFactory = this.injector.get(ProgressServiceFactory);
        this.$notificationService = this.injector.get(NotificationService);

        const dsConfig = this.getDataServicesConfig();
        this.$dataServices = {
            Customer: this.$progressServiceFactory.getService<SportsCustomer>(dsConfig['Customer'], this.$dataServicesState['Customer']),
        };

        this.$dataServicesData = {
            Customer: this.getDataChanges('Customer'),
        };

        this.$dataServicesResult = {
            Customer: this.getDataResult('Customer'),
        };
    }

    public ngOnInit(): void {
        this['onInit']();

        for (const dataSourceName of Object.keys(this.$dataServices)) {
            this.read(dataSourceName);
            this.dataServiceErrors(dataSourceName);
        }
    }

    public ngAfterViewInit(): void {
        this['onShow']();
    }

    public ngOnDestroy(): void {
        this['onHide']();
    }

    public read(dataSourceName): void {
        this.$dataServices[dataSourceName].read();
    }

    public getDataChanges(dataSourceName): Observable<any[]> {
        const dataService = this.$dataServices[dataSourceName];
        return dataService.dataChanges().pipe(map(response => (response ? response.data : [])));
    }

    public getDataResult(dataSourceName): BehaviorSubject<ModelDataResult<any>> {
        return this.$dataServices[dataSourceName].dataChanges();
    }

    public dataServiceErrors(dataSourceName): void {
        this.$dataServices[dataSourceName].errors.subscribe((err: any) => {
            if (err) {
                const message = (err.error && err.error.message) || err.message;
                this.$notificationService.notify(new Notification(`<ul><li>${message}<li></ul>`, 'error', 10000));
            }
        });
    }

    protected getDataServicesConfig() {
        const config = {
            Customer: getCustomerConfig(),
        };

        return config;
    }
}
