import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';

@Injectable({
    providedIn: 'root'
})
export class RadiologiService {

    dialog = new BehaviorSubject<boolean>(false)
    saveStatus = new BehaviorSubject<boolean>(false)
    hasil = new BehaviorSubject<any>('')

    constructor(
        private http: HttpClient
    ) { }

    public save(data: any) {
        this.http.post<any>(config.api_url('rikkes/save/hasilRadiologi'), data)
            .subscribe(data => {
                if (data.code == 200) {
                    this.saveStatus.next(true)
                } else {
                    this.saveStatus.next(false)
                }
            })
    }

    public getDataHasil(idPeserta: number) {
        this.http.get<any>( config.api_url('rikkes/getHasilRadiologi/idPeserta/'+idPeserta) )
            .subscribe(data => {
                if( data.data ){
                    this.hasil.next(data.data);
                }
            })
    }

    public openDialog() {
        this.dialog.next(true)
    }

    public closeDialog() {
        this.dialog.next(false)
    }
}
