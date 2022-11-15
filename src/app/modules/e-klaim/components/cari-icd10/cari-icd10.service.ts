import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';

@Injectable({
    providedIn: 'root'
})
export class CariIcd10Service {

    icd10 = new BehaviorSubject<any[]>([]);
    selectedIcd10 = new BehaviorSubject<any>('');

    constructor(
        private http: HttpClient
    ) { }

    cari(keyword: string){
        let data = { keyword: keyword }
        this.http.post<any>( config.api_vclaim('referensi/diagnosa'), data )
            .subscribe(data => {
                if( data.metaData.code == '200' ){
                    this.icd10.next(data.response.diagnosa);
                }
            })
    }

}
