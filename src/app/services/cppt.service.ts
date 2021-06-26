import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorHandlerService } from '../error-handler.service';
import { config } from "src/app/config";

@Injectable({
  providedIn: 'root'
})
export class CpptService {

  constructor(
    private http: HttpClient,
    private errorHandle: ErrorHandlerService
  ) { }

  saveKeluhan(data:any): Observable<any> {
      return this.http.post<any>(config.api_url('cppt'), data).pipe(catchError(this.errorHandle.handleIt));
  }
}
