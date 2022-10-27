import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';

@Injectable({
    providedIn: 'root'
})
export class DataStokService {

    dialog = new BehaviorSubject<boolean>(false);
    dataStokObat = new BehaviorSubject<any[]>([]);

    constructor(
        private http: HttpClient
    ) { }

    showDialog(status: boolean){
        this.dialog.next(status)
    }

    getDataStokObat(idPeriode: number){
        this.http.get<any>(config.api_url('farmasi/opname/stok-obat/'+idPeriode))
            .subscribe(data => {
                this.dataStokObat.next(data.data);
            })
    }
}
