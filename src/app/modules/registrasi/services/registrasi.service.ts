import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';

@Injectable({
    providedIn: 'root'
})
export class RegistrasiService {

    registrasi = new BehaviorSubject<any>('')

    constructor(
        private http: HttpClient
    ) { }

    public updatePasien(data: any) {
        this.http.post<any>(config.api_url('pasien/update'), data).subscribe(data => console.log(data))
    }

}
