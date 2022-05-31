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

    constructor(
        private http: HttpClient,
    ) { }

    public save(data: any) {
        this.http.post<any>(config.api_url('rikkes/save'), data)
            .subscribe(data => {
                if( data.code == 200 ) {
                    this.saveStatus.next(true)
                }
            })
    }

    public getDataRikkes(idPeserta: any) {
        this.http.get<any>(config.api_url('rikkes/getData/idPeserta/'+idPeserta))
            .subscribe(data => this.dataRikkes.next(data.data))
    }

}
