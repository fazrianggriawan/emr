import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';

@Injectable({
    providedIn: 'root'
})
export class RadiologiService {

    dataRadiologi = new BehaviorSubject<any>('');
    dataOrder = new BehaviorSubject<any>('');

    constructor(
        private http: HttpClient
    ) {
        this.getDataRadiologi();
    }

    getDataRadiologi() {
        this.http.get<any>(config.api_url('master_rad'))
            .subscribe(data => this.dataRadiologi.next(data.data));
    }

    getDataOrder(noreg: string){
        this.http.get<any>(config.api_url('emr/dataOrder/'+noreg+'/rad'))
            .subscribe(data => {
                this.dataOrder.next(data.data)
            }
        );
    }

    saveOrder(data: any) {
        this.http.post<any>(config.api_url('emr/saveOrder'), data)
            .subscribe(data => {
                this.dataOrder.next(data.data);
            })
    }

    deleteOrder(data: any) {
        this.http.post<any>(config.api_url('emr/deleteOrder'), data)
            .subscribe(data => {
                this.dataOrder.next(data.data);
            })
    }

}
