import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorHandlerService } from '../error-handler.service';
import { config } from "src/app/config";

@Injectable({
  providedIn: 'root'
})
export class DokterService {

  constructor(
    private http: HttpClient,
    private errorHandle: ErrorHandlerService
  ) { }

  getAllDokter(): Observable<any> {
      return this.http.get<any>(config.api_url('master_dokter')).pipe(catchError(this.errorHandle.handleIt));
  }

  getDokterByPoli(id_poli:any): Observable<any> {
    return this.http.get<any>(config.api_url('master_dokter_by_poli?id_poli='+id_poli)).pipe(catchError(this.errorHandle.handleIt));
}

}
