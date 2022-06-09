import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';
import { AppService } from 'src/app/services/app.service';

@Injectable({
    providedIn: 'root'
})
export class SuratKontrolService {

    suratKontrol = new BehaviorSubject<any>('');
    dataSuratKontrol = new BehaviorSubject<any>('');
    dialog = new BehaviorSubject<boolean>(false);
    actionStatus = new BehaviorSubject<boolean>(false);

    constructor(
        private http: HttpClient,
        private appService: AppService
    ) {}

    public getSuratKontrol(noSuratKontrol: string) {
        this.http.get<any>( config.api_vclaim('suratKontrol/get/'+noSuratKontrol) )
            .subscribe( data => {
                if( data.metaData.code == '200' ){
                    this.suratKontrol.next(data.response);
                }else{
                    this.suratKontrol.next('');
                    this.appService.setNotification('error', data.metaData.message);
                }
            })
    }

    public getDataSuratKontrol(nomorKartu: string, bulan: Date, filter: string) {
        let filterBulan = this.appService.reformatDate(bulan);
        this.http.get<any>( config.api_vclaim('suratKontrol/byPeserta/nomorKartu/'+nomorKartu+'/bulan/'+filterBulan+'/filter/'+filter) )
            .subscribe( data => this.dataSuratKontrol.next(data.response) )
    }

    public delete(noSuratKontrol:string){
        this.http.get<any>( config.api_vclaim('suratKontrol/delete/noSuratKontrol/'+noSuratKontrol) )
            .subscribe(data => {
                if( data.metaData.code == '200' ){
                    this.appService.setNotification('success', data.metaData.message);
                    this.actionStatus.next(true)
                }else{
                    this.appService.setNotification('error', data.metaData.message);
                    this.actionStatus.next(false)
                }
            })
    }

    public openDialog(){
        this.dialog.next(true)
    }

    public closeDialog(){
        this.dialog.next(false)
    }

}
