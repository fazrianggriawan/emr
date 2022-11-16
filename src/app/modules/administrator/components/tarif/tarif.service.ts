import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';
import { AppService } from 'src/app/services/app.service';

@Injectable({
    providedIn: 'root'
})
export class TarifService {

    dataTarif = new BehaviorSubject<any[]>([]);
    dataHarga = new BehaviorSubject<any[]>([]);
    dataGroupTarif = new BehaviorSubject<any[]>([]);
    dataCategory = new BehaviorSubject<any[]>([]);
    tarif = new BehaviorSubject<any>('');
    jasa = new BehaviorSubject<any[]>([]);

    constructor(
        private http: HttpClient,
        private appService: AppService
    ) { }

    getDataTarif(){
        this.http.get<any>(config.api_url('master/tarif'))
            .subscribe(data => {
                this.dataTarif.next(data.data)
            })
    }

    getTarifHarga(idTarif: any){
        this.http.get<any>(config.api_url('master/tarifHarga/'+idTarif))
            .subscribe(data => {
                this.dataHarga.next(data.data)
            })
    }

    getGroupTarif(){
        this.http.get<any>(config.api_url('master/groupTarif'))
            .subscribe(data => {
                this.dataGroupTarif.next(data.data)
            })
    }

    getCategoryByGroup(idGroup: any){
        this.http.get<any>(config.api_url('master/categoryByGroup/'+idGroup))
            .subscribe(data => {
                this.dataCategory.next(data.data);
            })
    }

    getGroupJasa(){
        this.http.get<any>(config.api_url('master/tarifGroupJasa'))
            .subscribe(data => {
                this.jasa.next(data.data);
            })
    }

}
