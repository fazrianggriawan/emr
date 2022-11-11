import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';
import { RegistrasiService } from '../../services/registrasi.service';
import { DataPasienService } from '../data-pasien/data-pasien.service';

@Injectable({
    providedIn: 'root'
})
export class FormRegistrasiService {

    dialog = new BehaviorSubject<boolean>(false)
    saveStatus = new BehaviorSubject<boolean>(false)
    jnsPelayanan = new BehaviorSubject<string>('')

    constructor(
        private http: HttpClient,
        private dataPasienService: DataPasienService,
        private registrasiService: RegistrasiService
    ) { }

    save(data: any) {
        this.http.post<any>( config.api_url('registrasi/save'), data )
            .subscribe(data => {
                if( data.code == 200 ){
                    this.saveStatus.next(true)
                    this.registrasiService.registrasi.next(data.data);
                }else{
                    this.saveStatus.next(false)
                }
            })
    }

    searchPasien(searchBy: string, key: string){
        if( searchBy && key ){
            this.http.get<any>( config.api_url('pasien/searchBy/'+searchBy+'/key/'+key) )
                .subscribe(data => {
                    if( data.data ) {
                        this.dataPasienService.pasien.next(data.data);
                    }
                })
        }
    }

    openDialog() {
        this.dialog.next(true);
    }

    closeDialog() {
        this.dialog.next(false);
    }
}
