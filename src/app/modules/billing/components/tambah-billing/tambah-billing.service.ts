import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';
import { AppService } from 'src/app/services/app.service';
import { BillingService } from '../../billing/billing.service';
import { TarifService } from '../../tarif/tarif.service';
import { JasaPelaksanaService } from '../jasa-pelaksana/jasa-pelaksana.service';

@Injectable({
    providedIn: 'root'
})
export class TambahBillingService {

    dialog = new BehaviorSubject<boolean>(false);

    constructor(
        private http: HttpClient,
        private billingService: BillingService,
        private appService: AppService,
        private jasaPelaksanaService: JasaPelaksanaService,
        private tarifService: TarifService
    ) { }

    openDialog(status: boolean){
        this.dialog.next(status);
    }

    saveBilling(data: any){
        this.http.post<any>( config.api_url('billing/save'), data )
            .subscribe(data => {
                if(data.code == 200){
                    this.appService.setNotification('success', data.message);
                    this.billingService.getBillingByHead(data.data.idBillingHead);
                    this.jasaPelaksanaService.openDialog(false);
                    this.tarifService.tarifJasa.next('');
                    this.jasaPelaksanaService.jasaPelaksana.next('');
                }else{
                    this.appService.setNotification('error', data.message);
                }

            })
    }

}
