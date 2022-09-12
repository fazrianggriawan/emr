import { Component, OnInit, ViewChild } from '@angular/core';
import { OverlayPanel } from 'primeng/overlaypanel';
import { BillingService } from './billing.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AppService } from 'src/app/services/app.service';
import { RegistrasiService } from 'src/app/modules/registrasi/services/registrasi.service';

@Component({
    selector: 'app-billing',
    templateUrl: './billing.component.html',
    styleUrls: ['./billing.component.css'],
    providers: [ConfirmationService, MessageService]
})
export class BillingComponent implements OnInit {

    @ViewChild('opDisc') opDisc!: OverlayPanel;
    @ViewChild('opJumlah') opJumlah!: OverlayPanel;

    dataBilling: any;
    jnsBayar: any;
    selectedJnsBayar: any;
    disc: number = 0;
    jumlah: number = 0;
    selectedBilling: any;
    totalBilling: number = 0;
    tagihan: number = 0;
    totalBayar: number = 0;
    dataPembayaran: any;
    registrasi: any;

    constructor(
        private billingService: BillingService,
        private confirmationService: ConfirmationService,
        private registrasiService: RegistrasiService,
        public appService: AppService,
    ) { }

    ngOnInit(): void {

        this.registrasiService.registrasi.subscribe(data => this.handleRegistrasi(data));
        this.billingService.saveStatus.subscribe(data => this.handleSaveBilling(data))
        this.billingService.deleteStatus.subscribe(data => this.handleSaveBilling(data))
        this.billingService.dataBilling.subscribe(data => this.handleDataBilling(data))
        this.billingService.updateStatus.subscribe(data => this.handleUpdate(data))
        this.billingService.addDiscountStatus.subscribe(data => this.handleAddDiscount(data))
        this.billingService.dataPembayaran.subscribe(data => this.handleDataPembayaran(data));
        this.billingService.addPembayaranStatus.subscribe(data => this.handleAddPembayaran(data))
        this.billingService.deletePembayaranStatus.subscribe(data => this.handleAddPembayaran(data))


        this.jnsBayar = [
            { id: 'CASH', name: 'TUNAI' },
            { id: 'DC', name: 'KARTU DEBIT' },
            { id: 'CC', name: 'KARTU KREDIT' },
            { id: 'TR', name: 'TRANSFER BANK' },
            { id: 'ASU', name: 'ASURANSI' }
        ]

        // setTimeout(() => {
        //     this.billingService.getDataPembayaran('MC22090100002');
        // }, 300);

    }

    handleRegistrasi(data: any) {
        if (data) {
            this.registrasi = data;
            this.billingService.getBillingByNoreg(this.registrasi.noreg);
            this.billingService.getDataPembayaran(this.registrasi.noreg);
        }
    }

    handleAddPembayaran(data: boolean) {
        if (data) {
            this.billingService.getDataPembayaran(this.registrasi.noreg);
        }
    }

    handleDataPembayaran(data: any) {
        if (data.length > 0) {
            this.dataPembayaran = data;
            this.totalBayar = 0;
            this.dataPembayaran.forEach((item: any) => {
                this.totalBayar = this.totalBayar + parseInt(item.jumlah);
            });
            this.tagihan = this.totalBayar - this.tagihan;

        }
    }

    handleDataBilling(data: any) {
        if (data.length > 0) {
            this.dataBilling = data;

            this.totalBilling = 0;
            this.dataBilling.forEach((item: any) => {
                this.totalBilling = this.totalBilling + this.hitungTotalBilling(item)
            });

            this.totalBayar = this.tagihan = this.totalBilling;
            this.billingService.getDataPembayaran(this.registrasi.noreg);
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

    confirmDeletePembayaran(event: any, item: any) {
        this.confirmationService.confirm({
            target: event.target,
            message: 'Yakin ingin menghapus data ini?',
            icon: 'pi pi-exclamation-triangle',
            acceptLabel: 'Ya',
            rejectLabel: 'Tidak',
            accept: () => {
                //confirm action
                this.billingService.deletePembayaran(item);
            },
            reject: () => {
                //reject action
            }
        });
    }

    confirmAddPembayaran(event: any) {
        this.confirmationService.confirm({
            target: event.target,
            message: 'Pastikan data pembayaran sudah benar. Yakin ingin proses?',
            icon: 'pi pi-exclamation-triangle',
            acceptLabel: 'Ya',
            rejectLabel: 'Tidak',
            accept: () => {
                //confirm action
                let data = {
                    jnsPembayaran: this.selectedJnsBayar,
                    jumlah: this.totalBayar,
                    noreg: 'MC22090100002'
                }
                this.billingService.addPembayaran(data);
            },
            reject: () => {
                //reject action
            }
        });
    }

    hitungTotalBilling(item: any) {
        let total = 0;
        total = (parseInt(item.harga) * parseInt(item.qty));
        if (parseInt(item.discount) > 0) {
            total = total - (total * (parseInt(item.discount) / 100))
        }
        return total;
    }

}
