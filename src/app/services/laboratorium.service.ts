import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { catchError } from "rxjs/operators";
import { ErrorHandlerService } from "../error-handler.service";
import { config } from "src/app/config";

@Injectable({
  providedIn: 'root'
})
export class LaboratoriumService {

  saveStatus: boolean = false;

  constructor(
    private http: HttpClient,
    private errorHandle: ErrorHandlerService
  ) { }

  getMasterLab(): Observable<any> {
      return this.http.get<any>(config.api_url('master_lab')).pipe(catchError(this.errorHandle.handleIt));
  }

  getMasterLabCito(): Observable<any> {
    return this.http.get<any>(config.api_url('master_lab_cito')).pipe(catchError(this.errorHandle.handleIt));
}

}
