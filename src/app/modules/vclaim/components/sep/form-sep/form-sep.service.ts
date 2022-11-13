import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';
import { AppService } from 'src/app/services/app.service';

@Injectable({
    providedIn: 'root'
})
export class FormSepService {

    diagnosa = new BehaviorSubject<any>('');
    dokter = new BehaviorSubject<any>('');

    constructor(
        private http: HttpClient,
        private appsService: AppService
    ) {}

    getDiagnosa(keywordIcd10: string){
        this.http.get<any>(config.api_vclaim('referensi/diagnosa/' + keywordIcd10))
            .subscribe(data => {
                if (data.metaData.code == '200') {
                    this.diagnosa.next(data.response.diagnosa)
                }else{
                    this.appsService.setNotification('error', data.metaData.message);
                }
            })
    }

    getDpjp(kodePerawatan: string, kodePoli: string) {
        this.http.get<any>(config.api_vclaim('referensi/dokter/jnsPerawatan/' + kodePerawatan + '/poliklinik/' + kodePoli))
            .subscribe(data => {
                if (data.metaData.code == '200') {
                    this.dokter.next(data.response.list)
                }
            })
    }

}
