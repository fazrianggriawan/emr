import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { config } from '../config';
import { ErrorHandlerService } from '../error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class TindakanService {

  save(data:any){
    return this.http.post<any>(config.api_url('save_tindakan'), data).pipe(catchError(this.errorHandle.handleIt));
  }

  constructor(
    private http: HttpClient,
    private errorHandle: ErrorHandlerService
  ) { }
}
