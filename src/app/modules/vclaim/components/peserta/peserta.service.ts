import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';
import { AppService } from 'src/app/services/app.service';

@Injectable({
    providedIn: 'root'
})
export class PesertaService {

    peserta = new BehaviorSubject<any>('');

    constructor(
        private http: HttpClient,
        private appService: AppService
    ) { }

    getPesertaByNomorKartu(key: string = '') {
        if (key != '') {
            this.http.get<any>(config.api_vclaim('peserta/nomorKartu/' + key))
                .subscribe(data => {
                    if (data.metaData.code == '200') {
                        this.peserta.next(data.response.peserta)
                    } else {
                        this.peserta.next('');
                        this.appService.setNotification('error', data.metaData.message);
                    }
                })
        }
    }

    getPesertaByNik(key: string = '') {
        if (key != '') {
            this.http.get<any>(config.api_vclaim('peserta/nik/' + key))
                .subscribe(data => {
                    if (data.metaData.code == '200') {
                        this.peserta.next(data.response.peserta)
                    } else {
                        this.peserta.next('');
                        this.appService.setNotification('error', data.metaData.message);
                    }
                })
        }
    }

}
