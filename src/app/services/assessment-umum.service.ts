import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { config } from '../config';
import { ErrorHandlerService } from '../error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class AssessmentUmumService {

  save(data:any): Observable<any> {
    return this.http.post<any>(config.api_url('save_assessment_umum'), data).pipe(catchError(this.errorHandle.handleIt));
  }

  getData(noreg:string): Observable<any> {
    return this.http.get<any>(config.api_url('get_assessment_umum?noreg='+noreg)).pipe(catchError(this.errorHandle.handleIt));
  }

  constructor(
    private http: HttpClient,
    private errorHandle: ErrorHandlerService
  ) { }
}
