import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorHandlerService } from '../error-handler.service';
import { config } from "src/app/config";

@Injectable({
  providedIn: 'root'
})
export class RegistrasiService {

  constructor(
    private http: HttpClient,
    private errorHandle: ErrorHandlerService,
    private datepipe: DatePipe
  ) { }

  dataRegistrasi = new BehaviorSubject(undefined);

  getLocalStorageReg(){
    var ls:any = localStorage.getItem('registrasi');
    return JSON.parse(ls);
  }

  getDataRegistrasi(){
    var aa = this.getLocalStorageReg();
    this.dataRegistrasi.next(aa);
    return this.dataRegistrasi.asObservable();
  }

  setDataRegistrasi(data:any){
    var a = JSON.stringify(data);
    localStorage.setItem('registrasi', a);
    this.dataRegistrasi.next(data);
  }

  getAllRegistrasi(date: Date = new Date): Observable<any> {
    let a = this.datepipe.transform(date, 'yyyy-MM-dd');
    return this.http.post<any>(config.api_url('registrasi'), {tanggal: a}).pipe(catchError(this.errorHandle.handleIt));
  }

  getHistoryRegistrasi(date: Date = new Date): Observable<any> {
    var data = this.getLocalStorageReg();
    return this.http.post<any>(config.api_url('registrasi'), {id_pasien: data.id_pasien}).pipe(catchError(this.errorHandle.handleIt));
  }

  updateRegistrasiDPJP(data:any){
    return this.http.put<any>(config.api_url('registrasi'), data).pipe(catchError(this.errorHandle.handleIt));
  }

}
