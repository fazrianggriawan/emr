import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { RegistrasiService } from 'src/app/modules/registrasi/services/registrasi.service';
import { AppService } from 'src/app/services/app.service';
import { BillingService } from '../../billing/billing.service';
import { TambahBillingService } from '../tambah-billing/tambah-billing.service';

@Component({
    selector: 'app-data-billing',
    templateUrl: './data-billing.component.html',
    styleUrls: ['./data-billing.component.css'],
    providers: [ConfirmationService]
})
export class DataBillingComponent implements OnInit, OnDestroy {

    dataBilling: any[] = [];
    registrasi: any;
    loading: boolean = false;
    subs: Subscription[] = [];

    constructor(
        private billingService: BillingService,
        private registrasiService: RegistrasiService,
        public appService: AppService,
        private tambahBillingService: TambahBillingService,
        private confirmationService: ConfirmationService,
    ) { }

    ngOnInit(): void {
        this.subs.push(this.registrasiService.registrasi.subscribe(data => this.handleRegistrasi(data)))
        this.subs.push(this.billingService.dataBilling.subscribe(data => this.handleDataBilling(data)))
        this.subs.push(this.tambahBillingService.dialog.subscribe(data => this.handleDialogTambahBilling(data)))
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.subs.forEach(element => {
            element.unsubscribe();
        });
    }

    handleDialogTambahBilling(data: boolean){
        if( !data ){
            if( !this.loading ){
                this.getBilling();
            }
        }
    }

    getBilling(){
        if( this.registrasi ){
            this.loading = true;
            this.billingService.getBillingByNoreg(this.registrasi.noreg, 'open');
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
            },
            reject: () => {
                //reject action
            }
        });

    }

}