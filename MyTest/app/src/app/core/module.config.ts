///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from '@progress/kendo-angular-l10n';

import { DataProviderService } from './data/data-provider.service';
import { ODataServiceFactory } from './data/odata-service-factory';
import { ProgressServiceFactory } from './data/progress-service-factory';
import { ProgressSessionService } from './data/progress-session.service';
import { RestDataServiceFactory } from './data/rest-data-service-factory';

import { LocalStorageService } from './local-storage.service';
import { SessionStorageService } from './session-storage.service';
import { TranslationsProvider } from './translations.provider';
import { RoleService } from './auth/role.service';
import { AuthenticationService } from './auth/authentication.service';
import { AuthenticationGuardService } from './auth/authentication-guard.service';
import { AuthorizationService } from './auth/authorization.service';
import { AuthorizationGuardService } from './auth/authorization-guard.service';
import { httpInterceptorProviders } from './http-interceptors.config';
import { NotificationService } from './notification/notification.service';
import { environment } from '../../environments/environment';

export function authenticationFactory() {
    return environment.getAuthentication();
}

export function windowFactory(): any {
    return window;
}

export const config: NgModule = {
    imports: [
        HttpClientModule
    ],
    providers: [
        { provide: 'Window',  useFactory: windowFactory },
        DataProviderService,
        ODataServiceFactory,
        ProgressServiceFactory,
        ProgressSessionService,
        RestDataServiceFactory,
        LocalStorageService,
        SessionStorageService,
        RoleService,
        TranslationsProvider,
        {
            provide: MessageService,
            useClass: TranslationsProvider
        },
        {
            provide: 'AuthenticationConfig',
            useFactory: authenticationFactory
        },
        AuthenticationService,
        AuthenticationGuardService,
        AuthorizationService,
        AuthorizationGuardService,
        NotificationService,
        httpInterceptorProviders
    ]
};
