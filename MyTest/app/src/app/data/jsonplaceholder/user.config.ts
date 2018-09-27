///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { RestServiceConfig } from '../../core/data/rest-service-config';
import { JsonplaceholderUser } from './user.model';

export function getUserConfig(): RestServiceConfig {
    return {
        dataProviderName: 'jsonplaceholder',
        serverOperations: false,
        createModel: () => new JsonplaceholderUser(),
        idField: '',
        dataProperty: '',
        totalProperty: '',
        actions: {
            read: {
                method: 'GET',
                url: 'users',
            },
        },
    };
}
