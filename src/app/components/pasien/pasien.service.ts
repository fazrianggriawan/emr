import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { catchError } from "rxjs/operators";
import { ErrorHandlerService } from "../../error-handler.service";
import { config } from "src/app/config";

@Injectable({
  providedIn: 'root'
})
export class PasienService {

  constructor(
    private http: HttpClient,
    private errorHandle: ErrorHandlerService
  ) { }

  getRegistrasiByPoli(): Observable<any> {
      return this.http.get<any>(config.api_url('registrasi_by_poli')).pipe(catchError(this.errorHandle.handleIt));
  }

  getTplKeluhan(): Observable<any> {
    return this.http.get<any>(config.api_url('master_keluhan')).pipe(catchError(this.errorHandle.handleIt));
  }

}
