import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { config } from '../config';
import { ErrorHandlerService } from '../error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class RadiologiService {

  constructor(
    private http: HttpClient,
    private errorHandle: ErrorHandlerService
  ) { }

  getMasterData(): Observable<any> {
      return this.http.get<any>(config.api_url('master_rad')).pipe(catchError(this.errorHandle.handleIt));
  }

}
