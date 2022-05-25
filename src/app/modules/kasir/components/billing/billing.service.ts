import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';

@Injectable({
    providedIn: 'root'
})
export class BillingService {

    tarif = new BehaviorSubject<any>([]);
    categoryTarif = new BehaviorSubject<any>([]);

    constructor(
        private http: HttpClient
    ) {
        this.getCategory();
    }

    public getTarifByCategory(categoryId: string) {
        this.http.get<any>(config.api_url('tarif/byCategory/' + categoryId))
            .subscribe(data => this.tarif.next(data.data))
    }

    public getCategory() {
        this.http.get<any>(config.api_url('tarif/category'))
            .subscribe(data => this.categoryTarif.next(data.data))
    }
}
