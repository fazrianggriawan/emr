import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { config } from 'src/app/config';
import { RegistrasiService } from 'src/app/modules/registrasi/services/registrasi.service';
import { AppService } from 'src/app/services/app.service';
import { BillingService } from '../../billing/billing.service';
import { TambahBillingService } from '../tambah-billing/tambah-billing.service';
import { DataBillingPenunjangService } from './data-billing-penunjang.service';

@Component({
    selector: 'app-data-billing-penunjang',
    templateUrl: './data-billing-penunjang.component.html',
    styleUrls: ['./data-billing-penunjang.component.css'],
    providers: [ConfirmationService]
})
export class DataBillingPenunjangComponent implements OnInit, OnDestroy {

    @Input() unit: string = '';

    dataBilling: any[] = [];
    registrasi: any;
    loading: boolean = false;
    optionsPrint: any[] = [];
    subs: Subscription[] = [];

    constructor(
        private billingService: BillingService,
        private registrasiService: RegistrasiService,
        private tambahBillingService: TambahBillingService,
        public appService: AppService,
        private dataBillingPenunjangService: DataBillingPenunjangService,
        private confirmationService: ConfirmationService,
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

    listenRubahQty(e: any, idBillingDetail: any){
        if( e.keyCode == 13 ) {
            let data = { id: idBillingDetail, noreg: this.registrasi.noreg, qty: e.target.value }
            this.billingService.updateJumlah(data);
        }
    }

    deleteBilling(event: any, id: any){
        this.confirmationService.confirm({
            target: event.target,
            message: 'Yakin ingin menghapus data ini?',
            icon: 'pi pi-exclamation-triangle',
            acceptLabel: 'Ya',
            rejectLabel: 'Tidak',
            accept: () => {
                //confirm action
                this.billingService.deleteBilling( { noreg: this.registrasi.noreg, id: id } )
            }
        });
    }

    printHasil(data: any){

        let login = this.appService.getSessionStorage('login');

        if( this.unit == 'rad' ){
            this.appService.print(config.api_url('print/hasilRadiologi/'+data.r_billing_head.noreg+'/'+data.id_billing_head+'/'+login.username))
        }

        if( this.unit == 'lab' ){
            this.appService.print(config.api_url('print/hasilLab/'+data.r_billing_head.noreg+'/'+data.id_billing_head+'/'+login.username))
        }

    }

    printBilling(data: any){
        let login = this.appService.getSessionStorage('login');
        this.appService.print(config.api_url('print/rincianBillingHead/'+data.noreg+'/'+login.username+'/'+data.id_billing_head))
    }

}
