///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { ProgressServiceConfig } from '../../core/data/progress-service-config';
import { SportsSalesRep } from './sales-rep.model';

export function getSalesRepConfig(): ProgressServiceConfig {
    return {
        dataProviderName: 'Sports',
        serverOperations: false,
        createModel: () => new SportsSalesRep(),
        jsdo: {
            name: 'SalesRep',
        },
        ds: {},
    };
}
