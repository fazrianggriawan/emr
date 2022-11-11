import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';
import { AppService } from 'src/app/services/app.service';
import { LoadingService } from 'src/app/services/loading.service';

@Injectable({
    providedIn: 'root'
})
export class DataPasienService {

    dataPasien = new BehaviorSubject<any[]>([]);
    sendToForm = new BehaviorSubject<boolean>(false);
    pasien = new BehaviorSubject<any>('');
    dialog = new BehaviorSubject<boolean>(false);
    saveStatusPasien = new BehaviorSubject<boolean>(false);

    constructor(
        private http: HttpClient,
        private loadingService: LoadingService,
        private appService: AppService
    ) { }

    public savePasien(data: any) {
        this.http.post<any>(config.api_url('pasien/save'), data)
            .subscribe(data => {
                if (data.code == 200) {
                    this.pasien.next(data.data)
                    this.saveStatusPasien.next(true);
                    this.appService.setNotification('success', data.message);
                } else {
                    this.saveStatusPasien.next(false);
                    this.appService.setNotification('error', data.message);
                }
            })
    }

    public searchBy(key: string, value: string){
        this.http.get<any>(config.api_url('pasien/searchBy/'+key+'/key/'+value))
            .subscribe(data => {
                if(data.data.length > 0){
                    this.dataPasien.next(data.data)
                }else{
                    this.appService.setNotification('error', 'Data Pasien Tidak Ditemukan.');
                }
            })
    }

    public getDataPasien(data: any) {
        this.loadingService.status.next(true);
        this.http.post<any>(config.api_url('pasien/filtering'), data).subscribe(data => this.dataPasien.next(data.data))
    }

    public getAllDataPasien() {
        this.http.get<any>(config.api_url('pasien/allData')).subscribe(data => this.dataPasien.next(data.data))
    }

    public openDialog(status: boolean) {
        this.dialog.next(status);
    }

    public closeDialog() {
        this.dialog.next(false);
    }
}
