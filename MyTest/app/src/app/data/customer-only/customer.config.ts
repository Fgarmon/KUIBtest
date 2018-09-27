///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { RestServiceConfig } from '../../core/data/rest-service-config';
import { CustomerOnlyCustomer } from './customer.model';

export function getCustomerConfig(): RestServiceConfig {
    return {
        dataProviderName: 'CustomerOnly',
        serverOperations: false,
        createModel: () => new CustomerOnlyCustomer(),
        idField: '',
        dataProperty: '',
        totalProperty: '',
        actions: {
            read: {
                method: 'GET',
                url: 'Customer',
            },
        },
    };
}
