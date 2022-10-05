import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { OverlayPanel } from 'primeng/overlaypanel';
import { Subscription } from 'rxjs';
import { config } from 'src/app/config';
import { RegistrasiService } from 'src/app/modules/registrasi/services/registrasi.service';
import { AppService } from 'src/app/services/app.service';
import { BillingService } from './billing.service';

@Component({
    selector: 'app-billing',
    templateUrl: './billing.component.html',
    styleUrls: ['./billing.component.css'],
    providers: [ConfirmationService, MessageService],
})
export class BillingComponent implements OnInit, OnDestroy {

    @ViewChild('opDisc') opDisc!: OverlayPanel;
    @ViewChild('opJumlah') opJumlah!: OverlayPanel;

    catTarif: any;
    selectedCatTarif: string = '';
    dataBilling: any = '';
    selectedBilling: any;
    dataPembayaran: any;
    registrasi: any;
    totalBilling: any;

    subs: Subscription[] = [];

    constructor(
        public billingService: BillingService,
        private confirmationService: ConfirmationService,
        private registrasiService: RegistrasiService,
        public appService: AppService,
    ) { }

    ngOnInit(): void {
        this.subs.push(this.registrasiService.registrasi.subscribe(data => this.handleRegistrasi(data)))
        this.subs.push(this.billingService.saveStatus.subscribe(data => this.handleSaveBilling(data)))
        this.subs.push(this.billingService.deleteStatus.subscribe(data => this.handleSaveBilling(data)))
        this.billingService.dataBilling.subscribe(data => this.handleDataBilling(data))
        this.subs.push(this.billingService.updateStatus.subscribe(data => this.handleUpdate(data)))
        this.subs.push(this.billingService.addDiscountStatus.subscribe(data => this.handleAddDiscount(data)))
        this.selectedCatTarif = 'all';

        this.catTarif = [
            { id: 'all', name: 'All' },
            { id: 'perawatan', name: 'Perawatan' },
            { id: 'lab', name: 'Laboratorium' },
            { id: 'rad', name: 'Radiologi' },
            { id: 'farmasi', name: 'Farmasi' },
            { id: 'operasi', name: 'Operasi' },
            { id: 'kamar', name: 'Kamar Rawat' },
        ];

    }

    ngOnDestroy(): void {
        this.subs.forEach(element => {
            element.unsubscribe();
        });
    }

    handleRegistrasi(data: any) {
        this.registrasi = '';
        this.dataBilling = [];
        if (data) {
            this.registrasi = data;
            this.billingService.getBillingByNoreg(this.registrasi.noreg);
        }
    }

    handleDataBilling(data: any) {
        this.dataBilling = '';
        if (data.length > 0) {
            this.dataBilling = data;

            this.totalBilling = 0;
            this.dataBilling.forEach((item: any) => {
                this.totalBilling = this.totalBilling + this.billingService.hitungTotalBilling(item)
            });
        }
    }

    handleSaveBilling(data: boolean) {
        if (data) {
            this.billingService.getBillingByNoreg(this.registrasi.noreg);
        }
    }

    handleUpdate(data: boolean) {
        if (data) {
            this.billingService.getBillingByNoreg(this.registrasi.noreg);
            this.opJumlah.hide();
        }
    }

    handleAddDiscount(data: boolean) {
        if (data) {
            this.billingService.getBillingByNoreg(this.registrasi.noreg);
            this.opDisc.hide();
        }
    }

    openOpDisc(e: any, item: any) {
        this.selectedBilling = item;
        this.opDisc.toggle(e);
    }

    openOpJumlah(e: any, item: any) {
        this.selectedBilling = item;
        this.opJumlah.toggle(e);
    }

    updateJumlah() {
        this.billingService.updateJumlah(this.selectedBilling);
    }

    addDiscount() {
        this.billingService.addDiscount(this.selectedBilling);
    }

    confirmDeleteBilling(event: any, item: any) {
        this.confirmationService.confirm({
            target: event.target,
            message: 'Yakin ingin menghapus data ini?',
            icon: 'pi pi-exclamation-triangle',
            acceptLabel: 'Ya',
            rejectLabel: 'Tidak',
            accept: () => {
                //confirm action
                let data = { id: item.id };
                this.billingService.deleteBilling(data);
            },
            reject: () => {
                //reject action
            }
        });
    }

    refresh(){
        if( this.registrasi.noreg ){
            this.billingService.getBillingByNoreg(this.registrasi.noreg);
        }
    }

    printBilling() {
        this.appService.print( config.api_url('print/rincianBilling/'+this.registrasi.noreg) );
    }

}
