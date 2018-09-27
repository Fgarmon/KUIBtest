///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { ProgressServiceConfig } from '../../core/data/progress-service-config';
import { SportsWarehouse } from './warehouse.model';

export function getWarehouseConfig(): ProgressServiceConfig {
    return {
        dataProviderName: 'Sports',
        serverOperations: false,
        createModel: () => new SportsWarehouse(),
        jsdo: {
            name: 'Warehouse',
        },
        ds: {},
    };
}
