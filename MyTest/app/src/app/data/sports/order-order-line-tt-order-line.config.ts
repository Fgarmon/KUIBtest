///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { ProgressServiceConfig } from '../../core/data/progress-service-config';
import { SportsOrderOrderLineTtOrderLine } from './order-order-line-tt-order-line.model';

export function getOrderOrderLineTtOrderLineConfig(): ProgressServiceConfig {
    return {
        dataProviderName: 'Sports',
        serverOperations: false,
        createModel: () => new SportsOrderOrderLineTtOrderLine(),
        jsdo: {
            name: 'OrderOrderLine',
        },
        ds: {
            tableRef: 'ttOrderLine',
        },
    };
}
