import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';
import { AppService } from 'src/app/services/app.service';
import { HistoryService } from '../history.service';

@Injectable({
    providedIn: 'root'
})
export class FormPasienPulangService {

    dialog = new BehaviorSubject<boolean>(false)
    dataStatusPulang = new BehaviorSubject<any>('');
    statusSave = new BehaviorSubject<boolean>(false);

    constructor(
        private http: HttpClient,
        private appService: AppService
    ) {
        this.getDataStatusPulang();
    }

    public save(data: any) {
        this.http.post<any>(config.api_vclaim('sep/updatePasienPulang'), data).subscribe(data => {
            if (data.metaData.code == '200') {
                this.appService.setNotification('success', data.metaData.message)
                this.statusSave.next(true)
                this.closeDialog()
            } else {
                this.statusSave.next(false)
                this.appService.setNotification('error', data.metaData.message)
            }
        })
    }

    public getDataStatusPulang() {
        let data = [
            { kode: '1', nama: 'ATAS PERSETUJUAN DOKTER' },
            { kode: '3', nama: 'ATAS PERMINTAAN SENDIRI' },
            { kode: '4', nama: 'MENINGGAL' },
            { kode: '5', nama: 'LAIN-LAIN' }
        ]
        this.dataStatusPulang.next(data)
    }

    public openDialog() {
        this.dialog.next(true)
    }

    public closeDialog() {
        this.dialog.next(false)
    }

}
