import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';
import { AppService } from 'src/app/services/app.service';

@Injectable({
    providedIn: 'root'
})
export class DataSuratKontrolService {

    dataSuratKontrol = new BehaviorSubject<any[]>([]);
    suratKontrol = new BehaviorSubject<any>('');

    constructor(
        private http: HttpClient,
        private appService: AppService
    ) { }

    public getSuratKontrol(noSuratKontrol: string) {
        this.http.get<any>( config.api_vclaim('suratKontrol/get/'+noSuratKontrol) )
            .subscribe( data => {
                if( data.metaData.code == '200' ){
                    this.suratKontrol.next(data.response);
                }else{
                    this.appService.setNotification('error', data.metaData.message);
                }
            })
    }

    public getDataSuratKontrol(nomorKartu: string, bulan: Date, filter: string) {
        this.http.get<any>( config.api_vclaim('suratKontrol/byPeserta/nomorKartu/'+nomorKartu+'/bulan/'+bulan+'/filter/'+filter) )
            .subscribe( data => {
                if( data.metaData.code == '200' ){
                    this.dataSuratKontrol.next(data.response.list)
                }else{
                    this.appService.setNotification('error', data.metaData.message);
                }
            })
    }

    public delete(noSuratKontrol:string){
        this.http.get<any>( config.api_vclaim('suratKontrol/delete/noSuratKontrol/'+noSuratKontrol) )
            .subscribe(data => {
                if( data.metaData.code == '200' ){
                    this.appService.setNotification('success', data.metaData.message);
                }else{
                    this.appService.setNotification('error', data.metaData.message);
                }
            })
    }

}
