import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';
import { AppService } from 'src/app/services/app.service';
import { RujukanService } from '../rujukan.service';

@Injectable({
    providedIn: 'root'
})
export class FormRujukanKeluarService {

    dialog = new BehaviorSubject<boolean>(false)
    jnsRujukan = new BehaviorSubject<any>('')
    faskes = new BehaviorSubject<any>('')
    jnsPelayanan = new BehaviorSubject<any>('')

    constructor(
        private http: HttpClient,
        private appService: AppService,
        private rujukanService: RujukanService
    ) {
        this.getJnsRujukan();
        this.getJnsPelayanan();
    }

    public getJnsRujukan() {
        let data = [
            { kode: '0', nama: 'PENUH' },
            { kode: '1', nama: 'PARSIAL' },
            { kode: '2', nama: 'BALIK PRB' },
        ]
        this.jnsRujukan.next(data);
    }

    public getJnsPelayanan() {
        let data = [
            { kode: '1', nama: 'RAWAT INAP' },
            { kode: '2', nama: 'RAWAT JALAN' }
        ]
        this.jnsPelayanan.next(data);
    }

    public getPPKTujuan(key: string) {
        this.http.get<any>(config.api_vclaim('referensi/faskes/' + key))
            .subscribe(data => {
                if (data.metaData.code == '200') {
                    this.faskes.next(data.response.faskes)
                } else {
                    this.faskes.next('');
                }
            })
    }

    public save(data: any) {
        this.http.post<any>(config.api_vclaim('rujukan/save/rujukanKeluar'), data).subscribe(data => {
            if (data.metaData.code == '200') {
                this.appService.setNotification('success', data.metaData.message);
                let sendData = window.btoa(JSON.stringify(data.response));
                this.rujukanService.printRujukanKeluar(sendData)
                this.dialog.next(false);
            } else {
                this.appService.setNotification('error', data.metaData.message);
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
