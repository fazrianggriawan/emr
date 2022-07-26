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

  getAllObatSalak(): Observable<any> {
    return this.http.get<any>(config.api_url_salak('get.php?req=master_obat')).pipe(catchError(this.errorHandle.handleIt));
  }

  getObatFavoritSalak(): Observable<any> {
    return this.http.get<any>(config.api_url_salak('get.php?req=obat_favorit')).pipe(catchError(this.errorHandle.handleIt));
  }

  saveObatFavoritSalak(data:any): Observable<any> {
    return this.http.post<any>(config.api_url_salak_online('post.php?req=obat_favorit'), data).pipe(catchError(this.errorHandle.handleIt));
  }

}
