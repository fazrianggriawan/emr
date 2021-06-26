import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { catchError } from "rxjs/operators";
import { ErrorHandlerService } from "../error-handler.service";
import { config } from "src/app/config";

@Injectable({
  providedIn: 'root'
})
export class Icd10Service {

  saveStatus: boolean = false;

  constructor(
    private http: HttpClient,
    private errorHandle: ErrorHandlerService
  ) { }

  getIcd10(): Observable<any> {
      return this.http.get<any>(config.api_url('icd10')).pipe(catchError(this.errorHandle.handleIt));
  }

}
