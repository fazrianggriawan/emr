import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { config } from '../config';
import { ErrorHandlerService } from '../error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private errorHandle: ErrorHandlerService
  ) { }

  doLogin(data:any): Observable<any> {
      return this.http.post<any>(config.api_url('do_login'), data).pipe(catchError(this.errorHandle.handleIt));
  }

}
