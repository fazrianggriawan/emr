import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RegistrasiService } from 'src/app/modules/registrasi/services/registrasi.service';
import { AppService } from 'src/app/services/app.service';
import { BillingService } from '../../billing/billing.service';
import { TambahBillingService } from '../tambah-billing/tambah-billing.service';
import { DataBillingPenunjangService } from './data-billing-penunjang.service';

@Component({
    selector: 'app-data-billing-penunjang',
    templateUrl: './data-billing-penunjang.component.html',
    styleUrls: ['./data-billing-penunjang.component.css']
})
export class DataBillingPenunjangComponent implements OnInit, OnDestroy {

    @Input() unit: string = '';

    dataBilling: any[] = [];
    registrasi: any;
    loading: boolean = false;
    subs: Subscription[] = [];

    constructor(
        private billingService: BillingService,
        private registrasiService: RegistrasiService,
        private tambahBillingService: TambahBillingService,
        public appService: AppService,
        private dataBillingPenunjangService: DataBillingPenunjangService
    ) { }

    ngOnInit(): void {
        this.subs.push(this.registrasiService.registrasi.subscribe(data => this.handleRegistrasi(data)))
        this.subs.push(this.tambahBillingService.dialog.subscribe(data => this.handleDialogTambahBilling(data)))
        this.subs.push(this.billingService.dataBilling.subscribe(data => this.handleDataBilling(data)))
    }

    ngOnDestroy(): void {
        this.subs.forEach(element => {
            element.unsubscribe();
        });
    }

    handleDialogTambahBilling(data: boolean){
        if(!data){
            setTimeout(() => {
                if( !this.loading ){
                    this.getBilling();
                }
            }, 200);
        }
    }

    handleDataBilling(data: any){
        this.loading = false;
        this.dataBilling = data;
    }

    handleRegistrasi(data: any){
        this.registrasi = data;
        if(data){
            this.getBilling();
        }
    }

    getBilling(){
        if( this.registrasi && this.unit ){
            this.loading = true;
            this.billingService.getBillingDetailByUnit(this.registrasi.noreg, this.unit);
        }
    }

    inputHasil(billingHead: any){
        this.dataBillingPenunjangService.inputHasil.next(true);
        this.dataBillingPenunjangService.billingHead.next(billingHead);
    }

    printHasil(data: any){
        this.dataBillingPenunjangService.printHasil.next({noreg: data.r_billing_head.noreg, idBillingHead: data.r_billing_head.id})
    }

}
