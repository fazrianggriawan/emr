import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { config } from 'src/app/config';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';

@Injectable({
    providedIn: 'root'
})
export class FarmasiService {

    masterObat = new BehaviorSubject<any>('');
    filterObat = new BehaviorSubject<string>('');
    selectedObat = new BehaviorSubject<any>('');
    orderObat = new BehaviorSubject<any>('');
    orderObatBiasa = new BehaviorSubject<any>('');
    orderObatRacikan = new BehaviorSubject<any>('');
    jenisResep = new BehaviorSubject<any>('biasa');

    constructor(
        private http: HttpClient,
        private errorHandle: ErrorHandlerService,
    ) { }

    public getMasterObat() {
        this.http.get<any>( config.api_public('vclaim/peserta/get/master_obat') ).subscribe(data => this.masterObat.next(data.data));
    }

    public reset() {
        this.selectedObat.next('');
    }

    saveTemplateSig(data: any) {
        return this.http.post<any>(config.api_url('save_sig_template'), data).pipe(catchError(this.errorHandle.handleIt));
    }

    getTemplateSig() {
        return this.http.get<any>(config.api_url('sig_template')).pipe(catchError(this.errorHandle.handleIt));
    }

    getDataFrekuensi() {
        return ['1x sehari', '2x sehari', '3x sehari', '4x sehari', '5x sehari', 'setiap 15 menit', 'setiap 1 jam', 'setiap 18 jam', 'setiap 36 jam', 'setiap 72 jam', '1x seminggu', '2x seminggu', '3x seminggu', '1x sebulan', '2x sebulan', '3x sebulan']
    }

    getDataArahan() {
        return ['A.M.', 'P.M.', 'ac', 'pc', 'mani', 'ap', 'BT', 'achs', 'qn', 'noct', 'PRN', 'QOD', 's.o.s', 'STAT']
    }

    getDataDurasi() {
        return ['1 hari', '2 hari', '3 hari', '7 hari', '10 hari', '1 minggu', '2 minggu', '3 minggu', '4 minggu', '6 minggu', '8 minggu', '12 minggu', '1 bulan', '2 bulan', '3 bulan', '6 bulan']
    }

    getDataDosis() {
        return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '1-2', '2-3', '2-4', '3-4', '5-10', '0.1', '0.25', '0.5']
    }

    getDataUnit() {
        return ['tab', 'sdk teh', 'sdk makan', 'drop', 'mg', 'ml', 'gr']
    }

    getDataRoute() {
        return ['Minum', 'Oles']
    }

    getDataHari() {
        var hari = [];
        for (let i = 1; i <= 200; i++) {
            var a = { id: i, name: i }
            hari.push(a);
        }
        return hari;
    }

    getDataSigna2() {
        var signa = [];
        for (let i = 3; i <= 100; i++) {
            var a = { id: i, name: i }
            signa.push(a);
        }
        return signa;
    }

}
