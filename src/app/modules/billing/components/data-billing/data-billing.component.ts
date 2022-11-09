import { Component, OnInit } from '@angular/core';
import { RegistrasiService } from 'src/app/modules/registrasi/services/registrasi.service';
import { AppService } from 'src/app/services/app.service';
import { BillingService } from '../../billing/billing.service';

@Component({
    selector: 'app-data-billing',
    templateUrl: './data-billing.component.html',
    styleUrls: ['./data-billing.component.css']
})
export class DataBillingComponent implements OnInit {

    dataBilling: any[] = [];
    registrasi: any;
    loading: boolean = false;

    constructor(
        private billingService: BillingService,
        private registrasiService: RegistrasiService,
        public appService: AppService
    ) { }

    ngOnInit(): void {
        this.registrasiService.registrasi.subscribe(data => this.handleRegistrasi(data))
        this.billingService.dataBilling.subscribe(data => this.handleDataBilling(data))
    }

    handleDataBilling(data: any){
        this.loading = false;
        this.dataBilling = data;
    }

    handleRegistrasi(data: any){
        this.registrasi = data;
        if(data){
            this.loading = true;
            this.billingService.getBillingByNoreg(this.registrasi.noreg, 'open');
        }
    }

}
