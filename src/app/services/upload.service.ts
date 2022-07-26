import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { config } from '../config';
import { ErrorHandlerService } from '../error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(
    private http: HttpClient,
    private errorHandle: ErrorHandlerService
  ) { }

  doUpload(data:any): Observable<any> {
      return this.http.post<any>(config.api_url('upload'), data).pipe(catchError(this.errorHandle.handleIt));
  }
}
