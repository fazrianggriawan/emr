import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';
import { DataPasienService } from '../components/data-pasien/data-pasien.service';

@Injectable({
    providedIn: 'root'
})
export class RegistrasiService {

    registrasi = new BehaviorSubject<any>('')
    dataRegistrasi = new BehaviorSubject<any>('')

    constructor(
        private http: HttpClient,
        private dataPasienService: DataPasienService
    ) { }

    public getDataRegistrasi() {
        this.http.get<any>( config.api_url('registrasi/dataRegistrasi') )
            .subscribe(data => this.dataRegistrasi.next(data.data))
    }

    public savePasien(data: any){
        this.http.post<any>(config.api_url('pasien/save'), data)
            .subscribe(data => {
                if(data.code == 200){
                    this.dataPasienService.pasien.next(data.data)
                }else{
                    alert(data.message);
                }
            })
    }

    public updatePasien(data: any) {
        this.http.post<any>(config.api_url('pasien/update'), data).subscribe(data => console.log(data))
    }

}
