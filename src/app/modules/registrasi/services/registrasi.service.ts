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

    constructor(
        private http: HttpClient,
        private appService: AppService
    ) { }

    updatePasien(data: any) {
        this.http.post<any>(config.api_url('pasien/update'), data)
            .subscribe(data => console.log(data))
    }

    getDataRegistrasi() {
        this.http.get<any>(config.api_url('registrasi/dataRegistrasi'))
            .subscribe(data => {
                if (data.code == 200) {
                    this.dataRegistrasi.next(data.data)
                }
            })
    }

}
