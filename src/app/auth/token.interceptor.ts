import { Inject, Injectable, InjectionToken } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from "@angular/common/http";

import { AuthService } from "./auth.service";
import { Observable } from "rxjs";
import { catchError, finalize, timeout } from "rxjs/operators";
import { ErrorHandlerService } from "../error-handler.service";
import { LoadingService } from "../services/loading.service";

export const DEFAULT_TIMEOUT = new InjectionToken<number>('defaultTimeout');

@Injectable()

export class TokenInterceptor implements HttpInterceptor {
    constructor(
        @Inject(DEFAULT_TIMEOUT) protected defaultTimeout: number,
        public auth: AuthService,
        private ErrorHandlerService: ErrorHandlerService,
        private loadingService: LoadingService

    ){};

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // req = req.clone({
        //     setHeaders: {
        //         Authorization: `Bearer ${this.auth.getToken()}`,
        //         User: `Dokter`
        //     }
        // })
        const timeoutValue = req.headers.get('timeout') || this.defaultTimeout;
        const timeoutValueNumeric = Number(timeoutValue);

        return next.handle(req).pipe(
            timeout(timeoutValueNumeric),
            finalize(() => {
                this.loadingService.status.next(false);
            }),
            catchError(this.ErrorHandlerService.handleIt));
    }

}