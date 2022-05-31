import { Inject, Injectable, InjectionToken } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { EMPTY, Observable, throwError } from 'rxjs';
import { timeout, catchError, retry, finalize } from 'rxjs/operators';
import { ErrorHandlerService } from '../error-handler.service';
import { LoadingService } from '../services/loading.service';

export const DEFAULT_TIMEOUT = new InjectionToken<number>('defaultTimeout');

@Injectable()
export class HttpProvider implements HttpInterceptor {

    constructor(
        @Inject(DEFAULT_TIMEOUT) protected defaultTimeout: number,
        private errorHandleService: ErrorHandlerService,
        private loadingService: LoadingService
    ){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const timeoutValue = req.headers.get('timeout') || this.defaultTimeout;
        const timeoutValueNumeric = Number(timeoutValue);

        return next.handle(req).pipe(
            timeout(timeoutValueNumeric),
            retry(3),
            finalize(() => {
                this.loadingService.status.next(false);
            }),
            catchError((error: HttpErrorResponse) => {
                return EMPTY;
            })
          ) as Observable<HttpEvent<any>>;
    }
}