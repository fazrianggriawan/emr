import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';
import { AppService } from 'src/app/services/app.service';

@Injectable({
    providedIn: 'root'
})
export class RujukanService {

    dataRujukanFaskes = new BehaviorSubject<any>('');
    dataRujukanRs = new BehaviorSubject<any>('');
    dataRujukanKeluar = new BehaviorSubject<any>('');
    rujukan = new BehaviorSubject<any>('');

    constructor(
        private http: HttpClient,
        private appService: AppService
    ) { }

    public getRujukan(nomorRujukan: string) {
        this.http.get<any>( config.api_vclaim('rujukan/nomorRujukan/'+nomorRujukan) )
            .subscribe(data => {
                if( data.metaData.code == '200' ){
                    this.rujukan.next(data.response);
                }else{
                    this.appService.setNotification('error', data.metaData.message);
                }
            })
    }

    public getDataRujukanFaskes(nomorKartu: string) {
        this.http.get<any>( config.api_vclaim('rujukan/faskes/nomorKartu/'+nomorKartu) )
            .subscribe(data => this.dataRujukanFaskes.next(data.response))
    }

    public getDataRujukanRs(nomorKartu: string) {
        this.http.get<any>( config.api_vclaim('rujukan/rs/nomorKartu/'+nomorKartu) )
            .subscribe(data => this.dataRujukanFaskes.next(data.response))
    }

    public getDataRujukanKeluar(nomorKartu: string) {
        this.http.get<any>( config.api_vclaim('rujukan/rs/nomorKartu/'+nomorKartu) )
            .subscribe(data => this.dataRujukanKeluar.next(data.response))
    }


}
