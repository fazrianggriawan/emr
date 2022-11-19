import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';

@Injectable({
    providedIn: 'root'
})
export class RuangRekamMedisService {

    dataRequestRm = new BehaviorSubject<any>('');

    constructor(
        private http: HttpClient,
    ) { }

    getDataRequestRm(data: any){
        this.http.post<any>( config.api_url('registrasi/request_rm'), data)
            .subscribe(data => {
                this.dataRequestRm.next(data);
            })
    }

}
