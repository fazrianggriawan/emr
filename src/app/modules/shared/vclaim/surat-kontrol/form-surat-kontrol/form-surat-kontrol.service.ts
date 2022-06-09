import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';
import { AppService } from 'src/app/services/app.service';
import { SuratKontrolService } from '../surat-kontrol.service';

@Injectable({
  providedIn: 'root'
})
export class FormSuratKontrolService {

    dialog = new BehaviorSubject<boolean>(false);
    saveStatus = new BehaviorSubject<boolean>(false);
    errorMessage = new BehaviorSubject<string>('');

    constructor(
        private http: HttpClient,
        private appService: AppService,
        private suratKontrolService: SuratKontrolService
    ) {}

    public save(data: any) {
        this.http.post<any>( config.api_vclaim('suratKontrol/save'), data )
            .subscribe(data => {
                if( data.metaData.code == '200' ){
                    this.suratKontrolService.getSuratKontrol(data.response.noSuratKontrol);
                    this.appService.setNotification('success', data.metaData.message);
                    this.saveStatus.next(true);
                }else{
                    this.appService.setNotification('error', data.metaData.message);
                    this.saveStatus.next(false);
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
