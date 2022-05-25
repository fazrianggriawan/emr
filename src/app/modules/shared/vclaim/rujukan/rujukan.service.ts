import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';

@Injectable({
    providedIn: 'root'
})
export class RujukanService {

    dataRujukanFaskes = new BehaviorSubject<any>('');
    dataRujukanRs = new BehaviorSubject<any>('');
    dataRujukanKeluar = new BehaviorSubject<any>('');

    constructor(
        private http: HttpClient
    ) { }

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
