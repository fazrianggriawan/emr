import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';

@Injectable({
    providedIn: 'root'
})
export class TarifService {

    tarif = new BehaviorSubject<any>('');
    tarifJasa = new BehaviorSubject<any>('');
    categoryTarif = new BehaviorSubject<any>('');
    defaultPelaksana = new BehaviorSubject<any>('');
    loading = new BehaviorSubject<boolean>(false);

    constructor(
        private http: HttpClient
    ) { }

    public getTarifByCategory(categoryId: string) {
        if (categoryId) {
            this.http.get<any>(config.api_url('tarif/byCategory/' + categoryId))
                .subscribe(data => this.tarif.next(data.data))
        }
    }

    public getCategory() {
        this.http.get<any>(config.api_url('tarif/category'))
            .subscribe(data => this.categoryTarif.next(data.data))
    }

    public getTarifJasa(idTarifHarga: any, noreg: string, ruangan: any) {
        if (idTarifHarga) {
            this.loading.next(true);
            this.http.get<any>(config.api_url('tarif/jasa/' + idTarifHarga + '/' + noreg + '/' + ruangan))
                .subscribe(data => {
                    this.tarifJasa.next(data.data)
                    this.loading.next(false);
                })
        }
    }

    public getDefaultPelaksana(data: any) {
        if (data) {
            this.http.post<any>(config.api_url('tarif/defaultPelaksana'), data)
                .subscribe(data => {
                    this.defaultPelaksana.next(data.data)
                })
        }
    }

}
