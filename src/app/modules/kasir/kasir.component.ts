import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/services/app.service';
import { RegistrasiService } from '../registrasi/services/registrasi.service';
// import { BillingService } from './components/billing/billing.service';
import { FormGroup } from '@angular/forms';
import { BillingService } from '../billing/billing/billing.service';
import { config } from 'src/app/config';
import { FormPulangPerawatanService } from './components/form-pulang-perawatan/form-pulang-perawatan.service';

@Component({
    selector: 'app-kasir',
    templateUrl: './kasir.component.html',
    styleUrls: ['./kasir.component.css'],
    providers: [ConfirmationService, MessageService]
})
export class KasirComponent implements OnInit, OnDestroy {

    dataBilling: any[] = [];
    selectedBilling: any[] = [];
    totalBilling: number = 0;
    tagihan: number = 0;
    totalBayar: any = 0;
    dataPembayaran: any = [];
    selectedJnsBayar: any;
    jnsBayar: any;
    registrasi: any;
    administrasi: number = 0;
    layananFaskes: number = 0;
    minAdministrasi: number = 40000;
    percentAdministrasi: number = 4;
    dialogFormPulang : boolean = false;
    statusBilling: string = '';

    subs: Subscription[] = [];

    form!: FormGroup;

    constructor(
        private billingService: BillingService,
        private confirmationService: ConfirmationService,
        private registrasiService: RegistrasiService,
        public appService: AppService,
        private formPulangPerawatan: FormPulangPerawatanService
    ) { }

    ngOnInit(): void {
        this.subs.push(this.registrasiService.registrasi.subscribe(data => this.handleDataRegistrasi(data)))
        this.subs.push(this.billingService.dataPembayaran.subscribe(data => this.handleDataPembayaran(data)))
        this.subs.push(this.billingService.addPembayaranStatus.subscribe(data => this.handleSavePembayaran(data)))
        this.subs.push(this.billingService.deletePembayaranStatus.subscribe(data => { if (data) { this.billingService.getDataPembayaran(this.registrasi.noreg) } }))
        this.subs.push(this.billingService.selectedBilling.subscribe(data => this.handleSelectedBilling(data)))
        this.formPulangPerawatan.dialog.subscribe(data => this.dialogFormPulang = data)
        this.billingService.statusBilling.subscribe(data => this.statusBilling = data)

        this.billingService.billingForKasir.next(true);

        this.jnsBayar = [
            { id: 'cash', name: 'TUNAI' },
            { id: 'dc', name: 'KARTU DEBIT' },
            { id: 'cc', name: 'KARTU KREDIT' },
            { id: 'tr', name: 'TRANSFER BANK' },
            { id: 'asu', name: 'ASURANSI' },
            { id: 'bpjs', name: 'BPJS' }
        ]
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.subs.forEach(element => {
            element.unsubscribe();
        });
    }

    handleSelectedBilling(data: any) {
        if (data) {
            this.handleDataBilling(data);
            // this.selectedBilling = data;
        }
    }

    handleDataPembayaran(data: any[]) {
        this.dataPembayaran = data;
        if (data) {
            let totalBayar: any = 0;
            data.forEach(element => {
                totalBayar = parseInt(totalBayar) + parseInt(element.jumlah);
            });

            setTimeout(() => {
                let tagihan = this.totalBayar;
                let total = tagihan - totalBayar;
                this.totalBayar = total
            }, 500);
        } else {
            this.dataPembayaran = [];
        }

    }

    handleSavePembayaran(data: any) {
        if (data) {
            this.billingService.getDataPembayaran(this.registrasi.noreg);
        }
    }

    handleDataBilling(data: any) {
        if (data) {
            this.dataBilling = data;

            this.totalBilling = 0;
            this.administrasi = 0;
            this.layananFaskes = 0;

            this.dataBilling.forEach((item: any) => {
                this.totalBilling = this.totalBilling + this.billingService.hitungTotalBilling(item)
            });

            this.tagihan = this.totalBilling;

            if( this.totalBilling > 0 ){
                this.hitungAdministrasi(this.totalBilling);
            }
        }
    }

    handleDataRegistrasi(data: any) {
        this.registrasi = data;
        if (data) {
            this.billingService.getBillingByNoreg(this.registrasi.noreg, 'open')
            this.billingService.getDataPembayaran(this.registrasi.noreg)
        }
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
                let rincian = [
                    { id: 'adm', name: 'Administrasi', jumlah: this.administrasi },
                    { id: 'faskes', name: 'Layanan Faskes', jumlah: this.layananFaskes },
                    { id: 'total', name: 'Total Billing', jumlah: this.totalBilling },
                ]
                let data = {
                    jnsPembayaran: this.selectedJnsBayar,
                    jumlah: this.tagihan,
                    noreg: this.registrasi.noreg,
                    billing: this.dataBilling,
                    rincian: rincian
                }
                this.billingService.addPembayaran(data);
            }
        });
    }

    formatNumber(value: any, separator: string = ',') {
        if (value) {
            setTimeout(() => {
                var number_string = value.replace(/[^0-9]/g, '').toString(),
                    split = number_string.split(','),
                    sisa = split[0].length % 3,
                    rupiah = split[0].substr(0, sisa),
                    ribuan = split[0].substr(sisa).match(/\d{3}/gi);

                // tambahkan titik jika yang di input sudah menjadi angka ribuan
                if (ribuan) {
                    separator = sisa ? ',' : '';
                    rupiah += separator + ribuan.join(',');
                }

                rupiah = split[1] != undefined ? rupiah + '.' + split[1] : rupiah;
                this.totalBayar = undefined ? rupiah : (rupiah ? rupiah : '');
            }, 100);
        }
    }

    hitungAdministrasi(totalTagihan: number) {
        this.administrasi = 0;

        if (this.registrasi.id_jns_perawatan == 'ri') {
            let adm = totalTagihan * (this.percentAdministrasi / 100);
            if (adm <= this.minAdministrasi) {
                adm = this.minAdministrasi;
            }
            this.administrasi = adm;
        }

        this.tagihan = this.tagihan + this.administrasi;

    }

    hitungFaskes(e: any) {
        this.layananFaskes = e.target.value;
        if (e.target.value > 0) {
            this.tagihan = parseInt(e.target.value) + this.tagihan;
        }
    }

    printBilling(item: any) {
        let login = this.appService.getSessionStorage('login');
        this.appService.print(config.api_url('print/rincianBillingPembayaran/' + item.noreg + '/' + login.username + '/' + item.id))
    }

    printKwitansi() {
        let login = this.appService.getSessionStorage('login');
        this.appService.print(config.api_url('print/kwitansiWithRincian/' + this.registrasi.noreg + '/' + login.username));
    }

}
