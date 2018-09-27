///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { ProgressServiceConfig } from '../../core/data/progress-service-config';
import { SportsCustomer } from './customer.model';

export function getCustomerConfig(): ProgressServiceConfig {
    return {
        dataProviderName: 'Sports',
        serverOperations: false,
        createModel: () => new SportsCustomer(),
        jsdo: {
            name: 'Customer',
        },
        ds: {},
    };
}
