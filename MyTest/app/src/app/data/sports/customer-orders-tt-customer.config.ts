///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { ProgressServiceConfig } from '../../core/data/progress-service-config';
import { SportsCustomerOrdersTtCustomer } from './customer-orders-tt-customer.model';

export function getCustomerOrdersTtCustomerConfig(): ProgressServiceConfig {
    return {
        dataProviderName: 'Sports',
        serverOperations: false,
        createModel: () => new SportsCustomerOrdersTtCustomer(),
        jsdo: {
            name: 'CustomerOrders',
        },
        ds: {
            tableRef: 'ttCustomer',
        },
    };
}
