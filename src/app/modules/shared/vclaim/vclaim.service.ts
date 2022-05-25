import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';

@Injectable({
    providedIn: 'root'
})
export class VclaimService {

    peserta = new BehaviorSubject<any>('');
    dialog = new BehaviorSubject<boolean>(false);

    constructor(
        private http: HttpClient
    ) { }

    public getPesertaByNomorKartu(value: string) {
        this.http.get<any>( config.api_vclaim('peserta/nomorKartu/' + value) ).subscribe( data => this.peserta.next(data.response) )
    }

    public getPesertaByNik(value: string) {
        this.http.get<any>( config.api_vclaim('peserta/nik/' + value) ).subscribe( data => this.peserta.next(data.response) )
    }

    public openDialog() {
        this.dialog.next(true)
    }

    public closeDialog() {
        this.dialog.next(true)
    }

}
