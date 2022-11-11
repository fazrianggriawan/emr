import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';
import { AppService } from 'src/app/services/app.service';

@Injectable({
    providedIn: 'root'
})
export class RegistrasiService {

    registrasi = new BehaviorSubject<any>('')
    dataRegistrasi = new BehaviorSubject<any>('')
    dialog = new BehaviorSubject<boolean>(false);

    constructor(
        private http: HttpClient,
        private appService: AppService
    ) { }

    updatePasien(data: any) {
        this.http.post<any>(config.api_url('pasien/update'), data)
            .subscribe(data => {
                if( data.code == 200 ){
                    this.appService.setNotification('success', data.message)
                }else{
                    this.appService.setNotification('error', data.message)
                }
            })
    }

    getDataRegistrasi() {
        this.http.get<any>(config.api_url('registrasi/dataRegistrasi'))
            .subscribe(data => {
                if (data.code == 200) {
                    this.dataRegistrasi.next(data.data)
                }
            })
    }

    getRegistrasiByNoreg(noreg: any) {
        this.http.get<any>(config.api_url('registrasi/registrasiByNoreg/' + noreg))
            .subscribe(data => {
                if (data.code == 200) {
                    this.registrasi.next(data.data);
                }else{
                    this.registrasi.next('');
                }
            })
    }

    filterDataRegistrasi(filter: any){
        this.http.post<any>(config.api_url('registrasi/filtering'), filter)
            .subscribe(data => {
                this.dataRegistrasi.next(data.data);
            })
    }

    formFilter(){
        return {
            tanggal: [[new Date()]],
            nama: [null],
            norm: [null],
            jnsPerawatan: [null],
            ruangan: [null],
            dokter: [null],
            jnsPembayaran: [null],
            noreg: [null],
        }
    }

    showDialog(val: boolean){
        this.dialog.next(val)
    }

}
