import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';

@Injectable({
    providedIn: 'root'
})
export class StokOpnameService {

    dataPeriode = new BehaviorSubject<any[]>([]);
    periode = new BehaviorSubject<any>('');

    constructor(
        private http: HttpClient
    ) { }

    getDataPeriode() {
        this.http.get<any>(config.api_url('farmasi/opname/periode'))
            .subscribe(data => {
                this.dataPeriode.next(data.data);
            })
    }
}
