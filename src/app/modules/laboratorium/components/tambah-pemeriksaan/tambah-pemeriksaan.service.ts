import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';
import { BillingService } from 'src/app/modules/billing/billing/billing.service';

@Injectable({
    providedIn: 'root'
})
export class TambahPemeriksaanService {

    dataPemeriksaan = new BehaviorSubject<any[]>([]);
    dialog = new BehaviorSubject<boolean>(false);

    constructor(
        private http: HttpClient,
        private billingService: BillingService
    ) { }

    cariPemeriksaan(keyword: string) {
        this.http.get<any>( config.api_url('lab/cariPemeriksaan/'+keyword) )
            .subscribe(data => {
                this.dataPemeriksaan.next(data.data)
            })
    }

    save(data: any){
        this.http.post<any>( config.api_url('lab/savePemeriksaan'), data )
            .subscribe(data => {
                if( data.code == 200 ){
                    this.billingService.getBillingDetailByUnit(data.data.noreg, data.data.unit);
                    this.openDialog(false)
                }
            })
    }

    openDialog(status: boolean){
        this.dialog.next(status);
    }
}
