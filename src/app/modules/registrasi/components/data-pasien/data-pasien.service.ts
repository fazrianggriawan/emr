import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';
import { LoadingService } from 'src/app/services/loading.service';

@Injectable({
    providedIn: 'root'
})
export class DataPasienService {

    dataPasien = new BehaviorSubject<any>('');
    sendToForm = new BehaviorSubject<boolean>(false);
    pasien = new BehaviorSubject<any>('');
    showDialog = new BehaviorSubject<boolean>(false);

    constructor(
        private http: HttpClient,
        private loadingService: LoadingService
    ) { }

    public getDataPasien(data: any) {
        this.loadingService.status.next(true);
        this.http.post<any>( config.api_url('pasien/filtering'), data ).subscribe( data => this.dataPasien.next(data.data) )
    }
}
