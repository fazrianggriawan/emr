import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from 'src/app/config';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataRegistrasiService {

    dataRegistrasi = new BehaviorSubject<any>('');

    constructor(
        private http: HttpClient
    ) { }

    getData(data: any) {
        this.http.post<any>(config.api_url('registrasi/filtering'), data)
            .subscribe(data => this.dataRegistrasi.next(data.data))
    }
}
