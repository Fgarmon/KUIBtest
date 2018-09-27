///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators/map';
import { tap } from 'rxjs/operators/tap';

import { progress } from '@progress/jsdo-core';

import { AuthenticationProviderInterface } from '../authentication-provider.interface';
import { ProgressSessionService } from '../../data/progress-session.service';

class User {
    userName: string;
}

export class JsdoProvider implements AuthenticationProviderInterface {
    private router: Router;
    private sessionService: ProgressSessionService;
    private user: User = null;

    constructor(private settings: any, private injector: Injector) {
        this.router = injector.get(Router);
        this.sessionService = injector.get(ProgressSessionService);
    }

    public isAuthenticated(): Observable<boolean> {
        const jsdoSession = this.sessionService.createdSessions[this.settings.sessionKey];

        if (jsdoSession) {
            return fromPromise(jsdoSession.isAuthorized()).pipe(
                map((auth: any) => !!auth.result)
            );
        }
        return of(false);
    }

    public authenticate(): void {
        this.router.navigate(['application', 'login']);
    }

    public completeAuthentication(): Observable<any> {
        return of(this.user);
    }

    public authenticateRequest(request: HttpRequest<any>): Observable<HttpRequest<any>> {
        return of(request);
    }

    public signIn(credentials: any): Observable<any> {
        const { userName, password } = credentials;

        return this.sessionService.signIn(this.settings.sessionKey, userName, password).pipe(
            map((jsdoSession: progress.data.JSDOSession) => {
                this.user = {
                    userName: jsdoSession.userName
                };
            })
        );
    }

    public signOut(): Observable<void> {
        return this.sessionService.signOut(this.settings.sessionKey).pipe(
            tap(() => {
                this.user = null;
            })
        );
    }

    public supportsRefresh(): boolean {
        return false;
    }

    public silentRefresh(): Observable<any> {
        return of(null);
    }
}
