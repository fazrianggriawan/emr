import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { config } from '../config';
import { ErrorHandlerService } from '../error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class PatAnatomiService {

  getMasterdData(): Observable<any> {
    return this.http.get<any>(config.api_url('master_pat_anatomi')).pipe(catchError(this.errorHandle.handleIt));
  }

  constructor(
    private http: HttpClient,
    private errorHandle: ErrorHandlerService
  ) { }

}
