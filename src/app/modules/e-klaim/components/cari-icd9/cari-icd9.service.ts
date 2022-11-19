import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';

@Injectable({
    providedIn: 'root'
})
export class CariIcd9Service {

    icd9 = new BehaviorSubject<any[]>([]);
    selectedIcd9 = new BehaviorSubject<any>('');

    constructor(
        private http: HttpClient
    ) { }

    cari(keyword: string){
        let data = { keyword: keyword }
        this.http.post<any>( config.api_url('eklaim/cari/icd9'), data )
            .subscribe(data => {
                if(data.code == 200){
                    this.icd9.next(data.data);
                }
            })
    }

}
