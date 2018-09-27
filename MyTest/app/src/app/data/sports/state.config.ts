///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { ProgressServiceConfig } from '../../core/data/progress-service-config';
import { SportsState } from './state.model';

export function getStateConfig(): ProgressServiceConfig {
    return {
        dataProviderName: 'Sports',
        serverOperations: false,
        createModel: () => new SportsState(),
        jsdo: {
            name: 'State',
        },
        ds: {},
    };
}
