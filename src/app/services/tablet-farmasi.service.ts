import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { config } from '../config';
import { ErrorHandlerService } from '../error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class TabletFarmasiService {

  panelJumlah = new BehaviorSubject<boolean>(false);
  panelSig = new BehaviorSubject<boolean>(false);
  panelPasien = new BehaviorSubject<boolean>(false);
  panelSendOrder = new BehaviorSubject<boolean>(false);
  panelRacikan = new BehaviorSubject<boolean>(false);
  editMode = new BehaviorSubject<boolean>(false);
  firstNumber = new BehaviorSubject<boolean>(true);
  editIndex = new BehaviorSubject<number>(0);
  sigData = new BehaviorSubject<Object>({dosis: '1', unit: 'Tab', route: 'Minum', frekuensi: '3x Sehari', arahan: 'Sesudah makan'});
  obatSelected = new BehaviorSubject<Object>({});
  dataResep = new BehaviorSubject<any>([]);
  dataPasien = new BehaviorSubject<any>({});

  updateResep(){
    let idx = this.editIndex.value;
    let data = {obat: this.obatSelected.value, signa: this.sigData.value};
    this.dataResep.value[idx] = data
  }

  addResep(){
    let data = {obat: this.obatSelected.value, signa: this.sigData.value};
    this.dataResep.value.push(data);
    this.dataResep.next(this.dataResep.value);
  }

  deleteResep(){
    let a =this.dataResep.value;
    a.splice(this.editIndex.value, 1);
    this.closeAllPanel();
  }

  resetSigData(){
    let sig = {dosis: '1', unit: 'Tab', route: 'Minum', frekuensi: '3x Sehari', arahan: 'Sesudah makan'};
    this.sigData.next(sig);
  }

  closeAllPanel(){
    this.obatSelected.next({});
    this.panelSig.next(false);
    this.panelJumlah.next(false);
  }

  findPasien(data:any): Observable<any> {
    return this.http.post<any>(config.api_url_salak('get.php?req=cari_pasien'), data).pipe(catchError(this.errorHandle.handleIt));
  }

  getMasterObat(): Observable<any> {
    return this.http.get<any>(config.api_url_salak('get.php?req=master_obat')).pipe(catchError(this.errorHandle.handleIt));
  }

  saveObatFavorit(data:any): Observable<any> {
    return this.http.post<any>(config.api_url_salak('post.php?req=obat_favorit'), data).pipe(catchError(this.errorHandle.handleIt));
  }

  constructor(
    private http: HttpClient,
    private errorHandle: ErrorHandlerService,
  ) { }
}
