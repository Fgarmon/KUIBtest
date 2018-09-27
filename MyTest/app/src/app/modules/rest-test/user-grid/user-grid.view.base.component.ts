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
import { RestDataServiceFactory } from '../../../core/data/rest-data-service-factory';
import { JsonplaceholderUser } from '../../../data/jsonplaceholder/user.model';
import { getUserConfig } from '../../../data/jsonplaceholder/user.config';

import { NotificationService } from './../../../core/notification/notification.service';
import { Notification } from './../../../core/notification/notification';

@Component({
    templateUrl: './user-grid.view.component.html',
    styleUrls: ['./user-grid.view.component.css'],
})
export class UserGridViewBaseComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('grid')
    public $grid: KbGridComponent;

    public $restDataServiceFactory: RestDataServiceFactory;
    public $dataServices: { [key: string]: DataService<any> };
    public $dataServicesData: { [key: string]: Observable<any> };
    public $dataServicesResult: { [key: string]: BehaviorSubject<ModelDataResult<any>> };
    public $notificationService: NotificationService;

    public $dataServicesState: { [key: string]: State } = {
        users: {
            skip: 0,
            take: 20,
        },
    };

    public $dataModels: any = {
        usersModel: {},
    };

    public $config: any = {
        title: '&lt;Title&gt;',
        titleKey: 'modules.RestTest.views.userGrid.title',
        components: {
            grid: {
                filterable: false,
                groupable: false,
                pageable: this.$dataServicesState['users'].take !== undefined,
                reorderable: false,
                resizable: false,
                sortable: false,
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
        this.$restDataServiceFactory = this.injector.get(RestDataServiceFactory);
        this.$notificationService = this.injector.get(NotificationService);

        const dsConfig = this.getDataServicesConfig();
        this.$dataServices = {
            users: this.$restDataServiceFactory.getService<JsonplaceholderUser>(dsConfig['users'], this.$dataServicesState['users']),
        };

        this.$dataServicesData = {
            users: this.getDataChanges('users'),
        };

        this.$dataServicesResult = {
            users: this.getDataResult('users'),
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
            users: getUserConfig(),
        };

        return config;
    }
}
