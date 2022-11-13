import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';
import { AppService } from 'src/app/services/app.service';

@Injectable({
    providedIn: 'root'
})
export class DataRujukanService {

    dataRujukanFaskes = new BehaviorSubject<any[]>([]);
    dataRujukanRs = new BehaviorSubject<any[]>([]);
    dataRujukanKeluar = new BehaviorSubject<any[]>([]);
    rujukan = new BehaviorSubject<any>('');
    dialog = new BehaviorSubject<boolean>(false);

    constructor(
        private http: HttpClient,
        private appService: AppService
    ) { }

    getRujukan(nomorRujukan: string) {
        this.http.get<any>(config.api_vclaim('rujukan/nomorRujukan/' + nomorRujukan))
            .subscribe(data => {
                if (data.metaData.code == '200') {
                    this.openDialog(false);
                    this.rujukan.next(data.response);
                } else {
                    this.appService.setNotification('error', data.metaData.message);
                }
            })
    }

    getDataRujukanFaskes(nomorKartu: string) {
        this.http.get<any>(config.api_vclaim('rujukan/faskes/nomorKartu/' + nomorKartu))
            .subscribe(data => this.dataRujukanFaskes.next(data.response.rujukan))
    }

    getDataRujukanRs(nomorKartu: string) {
        this.http.get<any>(config.api_vclaim('rujukan/rs/nomorKartu/' + nomorKartu))
            .subscribe(data => this.dataRujukanRs.next(data.response.rujukan))
    }

    getDataRujukanKeluar() {
        this.http.get<any>(config.api_vclaim('keluarRs'))
            .subscribe(data => this.dataRujukanKeluar.next(data.response))
    }

    print(nomor: string) {
        let iframe = '<iframe src="' + config.api_vclaim('rujukan/print/' + nomor) + '" style="height:calc(100% - 4px);width:calc(100% - 4px)"></iframe>';
        let win: any = window.open("", "", "width=1024,height=510,toolbar=no,menubar=no,resizable=yes");
        win.document.write(iframe);
    }

    printRujukanKeluar(data: string) {
        let iframe = '<iframe src="' + config.api_vclaim('rujukan/print/keluar/' + data) + '" style="height:calc(100% - 4px);width:calc(100% - 4px)"></iframe>';
        let win: any = window.open("", "", "width=1024,height=510,toolbar=no,menubar=no,resizable=yes");
        win.document.write(iframe);
    }

    getExpiredRujukan(tanggalRujukan: string) {

        let tanggal: any = tanggalRujukan.split('-');
        let tglRujukan = new Date(tanggal[0], tanggal[1] - 1, tanggal[2]);
        let expiredDate = new Date(tglRujukan.setDate(tglRujukan.getDate() + 90));

        let start = new Date(this.appService.reformatDate(new Date()));
        let end = new Date(this.appService.reformatDate(expiredDate));

        let Time = end.getTime() - start.getTime();
        let Days = Time / (1000 * 3600 * 24); //Diference in Days

        let expiredAt = {
            expired: this.appService.reformatDate(expiredDate),
            hariExpired: Days
        }

        return expiredAt;
    }

    openDialog(status: boolean) {
        this.dialog.next(status);
    }


}
