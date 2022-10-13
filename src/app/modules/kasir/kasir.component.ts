import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/services/app.service';
import { RegistrasiService } from '../registrasi/services/registrasi.service';
import { BillingService } from './components/billing/billing.service';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-kasir',
    templateUrl: './kasir.component.html',
    styleUrls: ['./kasir.component.css'],
    providers: [ConfirmationService, MessageService]
})
export class KasirComponent implements OnInit, OnDestroy {

    dataBilling: any[] = [];
    totalBilling: number = 0;
    tagihan: number = 0;
    totalBayar: any = 0;
    dataPembayaran: any = [];
    selectedJnsBayar: any;
    jnsBayar: any;
    registrasi: any;

    subs: Subscription[] = [];

    form!: FormGroup;


    constructor(
        private billingService: BillingService,
        private confirmationService: ConfirmationService,
        private registrasiService: RegistrasiService,
        public appService: AppService,
    ) { }

    ngOnInit(): void {
        this.subs.push(this.registrasiService.registrasi.subscribe(data => this.handleDataRegistrasi(data)))
        this.subs.push(this.billingService.dataPembayaran.subscribe(data => this.handleDataPembayaran(data)))
        this.subs.push(this.billingService.dataBilling.subscribe(data => this.handleDataBilling(data)))
        this.subs.push(this.billingService.addPembayaranStatus.subscribe(data => this.handleSavePembayaran(data)))
        this.subs.push(this.billingService.deletePembayaranStatus.subscribe(data => {if(data){ this.billingService.getDataPembayaran(this.registrasi.noreg) }}))

        this.jnsBayar = [
            { id: 'cash', name: 'TUNAI' },
            { id: 'dc', name: 'KARTU DEBIT' },
            { id: 'cc', name: 'KARTU KREDIT' },
            { id: 'tr', name: 'TRANSFER BANK' },
            { id: 'asu', name: 'ASURANSI' },
            { id: 'bpjs', name: 'BPJS' },
        ]
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.subs.forEach(element => {
            element.unsubscribe();
        });
    }

    handleDataPembayaran(data: any[]){
        if( data ){
            this.dataPembayaran = data;
            let totalBayar : any = 0;
            data.forEach(element => {
                totalBayar = parseInt(totalBayar) + parseInt(element.jumlah);
            });

            setTimeout(() => {
                let tagihan = this.totalBayar;
                let total = tagihan - totalBayar;
                this.totalBayar = total
                // if( total > 0 ){
                //     // this.totalBayar = this.formatNumber(total)
                //     this.totalBayar = total
                // }else{
                //     this.totalBayar = total;
                // }
            }, 500);
        }else{
            this.dataPembayaran = [];
        }

    }

    handleSavePembayaran(data: any){
        if( data ){
            this.billingService.getDataPembayaran(this.registrasi.noreg);
        }
    }

    handleDataBilling(data: any) {
        this.dataBilling = [];
        if (data.length > 0) {
            this.dataBilling = data;

            this.totalBilling = 0;
            this.dataBilling.forEach((item: any) => {
                this.totalBilling = this.totalBilling + this.billingService.hitungTotalBilling(item)
            });

            let totalBayar = this.tagihan = Math.ceil(this.totalBilling);
            this.formatNumber(totalBayar.toString());
        }
    }

    hitungTotalBilling(item: any) {
        let total = 0;
        total = (parseInt(item.harga) * parseInt(item.qty));
        if (parseInt(item.discount) > 0) {
            total = total - (total * (parseInt(item.discount) / 100))
        }
        return total;
    }

    handleDataRegistrasi(data: any) {
        this.registrasi = '';
        if (data) {
            this.registrasi = data;
            this.billingService.getBillingByNoreg(this.registrasi.noreg)
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
                    jumlah: this.tagihan,
                    noreg: this.registrasi.noreg
                }
                this.billingService.addPembayaran(data);
            },
            reject: () => {
                //reject action
            }
        });
    }

    formatNumber(value: any, separator: string = ',') {
        if (value) {
            setTimeout(() => {
                var number_string = value.replace(/[^0-9]/g, '').toString(),
                split   		= number_string.split(','),
                sisa     		= split[0].length % 3,
                rupiah     		= split[0].substr(0, sisa),
                ribuan     		= split[0].substr(sisa).match(/\d{3}/gi);

                // tambahkan titik jika yang di input sudah menjadi angka ribuan
                if(ribuan){
                    separator = sisa ? ',' : '';
                    rupiah += separator + ribuan.join(',');
                }

                rupiah = split[1] != undefined ? rupiah + '.' + split[1] : rupiah;
                this.totalBayar = undefined ? rupiah : (rupiah ? rupiah : '');
            }, 100);
        }
    }

    save() {
        if(this.tagihan > 0){
            let data = {
                noreg: this.registrasi.noreg,
                jnsPembayaran: this.selectedJnsBayar,
                jumlahBayar: this.totalBayar
            }
            console.log(data);
        }
    }

}
