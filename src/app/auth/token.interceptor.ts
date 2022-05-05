import { Inject, Injectable, InjectionToken } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from "@angular/common/http";

import { AuthService } from "./auth.service";
import { Observable } from "rxjs";
import { catchError, timeout } from "rxjs/operators";
import { ErrorHandlerService } from "../error-handler.service";

export const DEFAULT_TIMEOUT = new InjectionToken<number>('defaultTimeout');

@Injectable()

export class TokenInterceptor implements HttpInterceptor {
    constructor(
        public auth: AuthService,
        @Inject(DEFAULT_TIMEOUT) protected defaultTimeout: number,
        private ErrorHandlerService: ErrorHandlerService
    ){};

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${this.auth.getToken()}`,
                User: `Dokter`
            }
        })
        const timeoutValue = req.headers.get('timeout') || this.defaultTimeout;
        const timeoutValueNumeric = Number(timeoutValue);
        console.log('a');
        return next.handle(req).pipe(timeout(timeoutValueNumeric), catchError(this.ErrorHandlerService.handleIt));
    }

}