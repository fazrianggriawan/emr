import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';

@Injectable({
    providedIn: 'root'
})
export class TambahBillingOperasiService {

    dialog = new BehaviorSubject<boolean>(false);
    dataTarif = new BehaviorSubject<any[]>([]);

    constructor(
        private http: HttpClient
    ) { }

    getTarifOperasi() {
        this.http.get<any>(config.api_url('tarif/byGroup/op'))
            .subscribe(data => {
                this.dataTarif.next(data.data);
            })
    }

    openDialog(status: boolean) {
        this.dialog.next(status)
    }
}
