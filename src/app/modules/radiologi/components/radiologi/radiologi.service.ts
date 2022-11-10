import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { config } from 'src/app/config';

@Injectable({
    providedIn: 'root'
})
export class RadiologiService {

    dataOrder = new BehaviorSubject<any>('');
    optionsDokter = new BehaviorSubject<any[]>([]);

    constructor(
        private http: HttpClient
    ) { }

    getDataOrder(tanggal: string, status: string){
        this.http.get<any>(config.api_url('radiologi/dataOrder/'+tanggal+'/'+status))
            .subscribe(data => {
                this.dataOrder.next(data.data)
            })
    }

}
