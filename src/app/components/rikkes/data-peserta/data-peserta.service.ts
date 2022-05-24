import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';

@Injectable({
    providedIn: 'root'
})
export class DataPesertaService {

    dataPeserta = new BehaviorSubject<any>('')
    peserta = new BehaviorSubject<any>('')
    dialog = new BehaviorSubject<boolean>(false)

    constructor(
        private http: HttpClient
    ) { }

    public getDataPeserta() {
        this.http.get<any>(config.api_url('rikkes/dataPeserta'))
            .subscribe(data => this.dataPeserta.next(data.data))
    }

    public getPesertaByNoUrut(noUrut: string) {
        this.http.get<any>(config.api_url('rikkes/peserta/noUrut/' + noUrut))
            .subscribe(data => this.peserta.next(data.data))
    }

    public openDialog() {
        this.dialog.next(true);
    }

    public closeDialog() {
        this.dialog.next(false);
    }

}
