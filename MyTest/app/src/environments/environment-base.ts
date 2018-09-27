///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { AppConfigService } from '../app/core/app-config.service';

export const environmentBase = {
    appId: '6a40a7ee-a3e0-4fd8-950a-3b68ae77403a',
    appName: 'MyTest',
    getDataProviders() {
        return AppConfigService.settings.dataProviders;
    },
    getAuthentication() {
        return AppConfigService.settings.authentication;
    },
};
