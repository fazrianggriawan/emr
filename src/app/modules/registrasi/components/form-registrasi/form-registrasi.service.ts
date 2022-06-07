import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';
import { DataPasienService } from '../data-pasien/data-pasien.service';

@Injectable({
    providedIn: 'root'
})
export class FormRegistrasiService {
    dialog = new BehaviorSubject<boolean>(false)

    constructor(
        private http: HttpClient,
        private dataPasienService: DataPasienService
    ) { }

    searchPasien(searchBy: string, key: string){
        this.http.get<any>( config.api_url('pasien/searchBy/'+searchBy+'/key/'+key) )
            .subscribe(data => {
                if( data.data ) {
                    this.dataPasienService.pasien.next(data.data);
                }
            })
    }

    openDialog() {
        this.dialog.next(true);
    }

    closeDialog() {
        this.dialog.next(false);
    }
}
