import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';

@Injectable({
    providedIn: 'root'
})
export class RikkesService {

    dataRikkes = new BehaviorSubject<any>('');
    saveStatus = new BehaviorSubject<boolean>(false);
    dataPsikometri = new BehaviorSubject<any>('');
    dataEkg = new BehaviorSubject<any>('');

    constructor(
        private http: HttpClient,
    ) { }

    public save(data: any) {
        this.http.post<any>(config.api_url('rikkes/save'), data)
            .subscribe(res => {
                if( res.code == 200 ) {
                    this.saveStatus.next(true);
                    this.getDataRikkes(data.peserta.id);
                }
            })
    }

    public getDataRikkes(idPeserta: any) {
        this.http.get<any>(config.api_url('rikkes/getData/idPeserta/'+idPeserta))
            .subscribe(data => this.dataRikkes.next(data.data))
    }

    public getDataHasilPsikometri(noUrut: string){
        this.http.get<any>(config.api_url('rikkes/getHasilPsikometri/noUrut/'+noUrut))
            .subscribe(data => this.dataPsikometri.next(data.data))
    }

    public getDataHasilEkg(noUrut: string){
        this.http.get<any>(config.api_url('rikkes/getHasilEkg/noUrut/'+noUrut))
            .subscribe(data => this.dataEkg.next(data.data))
    }

}
