import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { config } from '../config';
import { ErrorHandlerService } from '../error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class PoliklinikService {

  getDataMaster(){
    return this.http.get<any>(config.api_url('master_poli')).pipe(catchError(this.errorHandle.handleIt));
  }

  constructor(
    private http: HttpClient,
    private errorHandle: ErrorHandlerService
  ) { }
}
