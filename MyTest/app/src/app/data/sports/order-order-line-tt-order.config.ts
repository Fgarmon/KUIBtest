///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { ProgressServiceConfig } from '../../core/data/progress-service-config';
import { SportsOrderOrderLineTtOrder } from './order-order-line-tt-order.model';

export function getOrderOrderLineTtOrderConfig(): ProgressServiceConfig {
    return {
        dataProviderName: 'Sports',
        serverOperations: false,
        createModel: () => new SportsOrderOrderLineTtOrder(),
        mapData: dataItem => {
            dataItem.OrderDate = new Date(dataItem.OrderDate);
            dataItem.PromiseDate = new Date(dataItem.PromiseDate);
            dataItem.ShipDate = new Date(dataItem.ShipDate);

            return dataItem;
        },
        jsdo: {
            name: 'OrderOrderLine',
        },
        ds: {
            tableRef: 'ttOrder',
        },
    };
}
