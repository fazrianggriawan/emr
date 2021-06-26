import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorHandlerService } from '../error-handler.service';
import { config } from "src/app/config";

@Injectable({
  providedIn: 'root'
})
export class ObatService {

  constructor(
    private http: HttpClient,
    private errorHandle: ErrorHandlerService,
  ) { }

  getAllObat(): Observable<any> {
      return this.http.get<any>(config.api_url('master_obat')).pipe(catchError(this.errorHandle.handleIt));
  }
}
