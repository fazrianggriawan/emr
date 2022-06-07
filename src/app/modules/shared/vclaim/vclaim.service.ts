import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';
import { DataPasienService } from '../../registrasi/components/data-pasien/data-pasien.service';

@Injectable({
    providedIn: 'root'
})
export class VclaimService {

    peserta = new BehaviorSubject<any>('');
    dialog = new BehaviorSubject<boolean>(false);
    dataPasien: any;

    constructor(
        private http: HttpClient,
        private dataPasienService: DataPasienService
    ) {
        this.dataPasienService.pasien.subscribe(data => this.dataPasien = data)
    }

    public getPesertaByNomorKartu() {
        if( this.dataPasien.no_asuransi ){
            this.http.get<any>( config.api_vclaim('peserta/nomorKartu/' + this.dataPasien.no_asuransi) ).subscribe( data => this.peserta.next(data.response) )
        }
    }

    public getPesertaByNik() {
        if( this.dataPasien.nik ){
            this.http.get<any>( config.api_vclaim('peserta/nik/' + this.dataPasien.nik) ).subscribe( data => this.peserta.next(data.response) )
        }
    }

    public openDialog() {
        this.dialog.next(true)
    }

    public closeDialog() {
        this.dialog.next(false)
    }

}
