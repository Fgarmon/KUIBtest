///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { ProgressServiceConfig } from '../../core/data/progress-service-config';
import { SportsCustomerOrdersTtOrder } from './customer-orders-tt-order.model';

export function getCustomerOrdersTtOrderConfig(): ProgressServiceConfig {
    return {
        dataProviderName: 'Sports',
        serverOperations: false,
        createModel: () => new SportsCustomerOrdersTtOrder(),
        mapData: dataItem => {
            dataItem.OrderDate = new Date(dataItem.OrderDate);

            return dataItem;
        },
        jsdo: {
            name: 'CustomerOrders',
        },
        ds: {
            tableRef: 'ttOrder',
        },
    };
}
