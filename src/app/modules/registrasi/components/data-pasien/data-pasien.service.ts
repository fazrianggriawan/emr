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
    // showDialog = new BehaviorSubject<boolean>(false);
    dialog = new BehaviorSubject<boolean>(false);
    saveStatusPasien = new BehaviorSubject<boolean>(false);

    constructor(
        private http: HttpClient,
        private loadingService: LoadingService
    ) { }

    public savePasien(data: any){
        this.http.post<any>(config.api_url('pasien/save'), data)
            .subscribe(data => {
                if(data.code == 200){
                    this.pasien.next(data.data)
                    this.saveStatusPasien.next(true);
                }else{
                    this.saveStatusPasien.next(false);
                    alert(data.message);
                }
            })
    }

    public getDataPasien(data: any) {
        this.loadingService.status.next(true);
        this.http.post<any>( config.api_url('pasien/filtering'), data ).subscribe( data => this.dataPasien.next(data.data) )
    }

    public getAllDataPasien(){
        this.http.get<any>( config.api_url('pasien/allData') ).subscribe(data => this.dataPasien.next(data.data))
    }

    public openDialog(){
        this.dialog.next(true);
    }

    public closeDialog(){
        this.dialog.next(false);
    }
}
