import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { config } from '../config';
import { ErrorHandlerService } from '../error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class TestOrderService {

  save(data:any): Observable<any> {
    return this.http.post<any>(config.api_url('save_test_order'), data).pipe(catchError(this.errorHandle.handleIt));
  }

  getData(noreg:string, unit:string): Observable<any> {
    return this.http.get<any>(config.api_url('get_test_order?noreg='+noreg+'&unit='+unit)).pipe(catchError(this.errorHandle.handleIt));
  }

  constructor(
    private http: HttpClient,
    private errorHandle: ErrorHandlerService
  ) { }
}
