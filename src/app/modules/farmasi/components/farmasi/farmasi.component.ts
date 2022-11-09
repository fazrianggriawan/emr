import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MenuItem } from 'primeng/api';
import { AutoComplete } from 'primeng/autocomplete';
import { config } from 'src/app/config';
import { WidgetRegistrasiService } from 'src/app/modules/registrasi/components/widget-registrasi/widget-registrasi.service';
import { MasterService } from 'src/app/modules/registrasi/services/master.service';
import { RegistrasiService } from 'src/app/modules/registrasi/services/registrasi.service';
import { AppService } from 'src/app/services/app.service';
import { FarmasiService } from './farmasi.service';

@Component({
    selector: 'app-farmasi',
    templateUrl: './farmasi.component.html',
    styleUrls: ['./farmasi.component.css'],
    providers: [ConfirmationService],
})
export class FarmasiComponent implements OnInit {

    @ViewChild('qty') qtyElement!: ElementRef;

    menuItems!: MenuItem[];
    namaObat: any;
    results: any;
    dataObat: any[] = [];
    dataBilling: any[] = [];
    dialogTambahObat: boolean = false;
    selectedObat: any;
    tagihan: any = 0;
    dataJnsPembayaran: any[] = [];
    selectedJnsBayar: any;
    dataPembayaran: any[] = [];
    isPenjualanLangsung: boolean = false;
    statusBilling: any[] = [];
    selectedStatusBilling: string = 'open';
    dataDepo: any[] = [];
    selectedDepo: any = null;
    registrasi: any;

    constructor(
        public appService: AppService,
        public farmasiService: FarmasiService,
        private confirmationService: ConfirmationService,
        private masterService: MasterService,
        private widgetRegistrasiService: WidgetRegistrasiService,
        private registrasiService: RegistrasiService
    ) { }

    ngOnInit(): void {
        // this.widgetRegistrasiService.showWidget(false)
        this.farmasiService.getDataDepo();
        this.masterService.getJnsPembayaran();
        this.masterService.jnsPembayaran.subscribe(data => this.dataJnsPembayaran = data);
        this.farmasiService.dataObat.subscribe(data => this.dataObat = data)
        this.farmasiService.dataDepo.subscribe(data => this.dataDepo = data)
        this.farmasiService.dataBilling.subscribe(data => this.handleDataBilling(data))
        this.farmasiService.dataPembayaran.subscribe(data => this.dataPembayaran = data);
        this.registrasiService.registrasi.subscribe(data =>  this.handleRegistrasi(data))

        this.menuItems = [
            { label: 'Home' },
            { label: 'Transaksi', routerLink: 'transaksi' }
        ]

        this.statusBilling = [
            {id: 'all', name: 'ALL'},
            {id: 'open', name: 'OPEN'},
            {id: 'closed', name: 'CLOSED'},
        ]

    }

    handleRegistrasi(data: any){
        this.registrasi = data;
        if( data ){
            this.farmasiService.getDataBilling(this.registrasi.noreg, this.selectedStatusBilling);
            this.farmasiService.getDataPembayaran(this.registrasi.noreg);
        }
    }

    selectObat(obat: any, ac: AutoComplete){
        if( obat ){
            let qty = 1;
            let data = {
                id: obat.id,
                obat: obat,
                qty: '',
                harga: obat.harga
            }
            this.selectedObat = data;
            this.dialogTambahObat = true;

            setTimeout(() => {
                this.qtyElement.nativeElement.focus();
            }, 200);
        }
        ac.clear();
    }

    listenEnter(e: KeyboardEvent, ac: AutoComplete){
        if( e.keyCode == 13 ){
            if( this.selectedObat.qty && this.selectedObat.qty != '0' ){
                this.save(ac);
            }
        }
    }

    confirmAddPembayaran(event: any){
        this.confirmationService.confirm({
            target: event.target,
            message: 'Pastikan data pembayaran sudah benar. Yakin ingin proses?',
            icon: 'pi pi-exclamation-triangle',
            acceptLabel: 'Ya',
            rejectLabel: 'Tidak',
            accept: () => {
                //confirm action
                let data = {
                    noreg: this.registrasi.noreg,
                    jumlah: this.tagihan,
                    cara_bayar: this.selectedJnsBayar
                }
                this.farmasiService.savePembayaran(data);
            },
            reject: () => {
                //reject action
            }
        });
    }

    hitungTotalTagihan(){
        let total : any = 0;
        this.dataBilling.forEach(element => {
            total = (element.harga * element.qty) + parseInt(total);
        });
        this.tagihan = total;
    }

    handleDataBilling(data: any){
        this.dialogTambahObat = false;
        this.dataBilling = data;
        this.hitungTotalTagihan();
    }

    save(ac: AutoComplete){
        if( this.selectedObat.qty && this.selectedObat.qty != '0' ){
            this.selectedObat.noreg = this.registrasi.noreg;
            let data = {
                obat: this.selectedObat,
                noreg: this.registrasi.noreg
            }

            this.farmasiService.saveBilling(this.selectedObat);

            // let data : any = this.selectObat;
            // data.noreg = this.registrasi.noreg;
            // this.dataBilling.push(data);
            // this.selectedObat = '';
            // this.dialogTambahObat = false;
            // console.log(this.dataBilling);
            // this.hitungTotalTagihan();
            // ac.focusInput();
        }
    }

    deleteObat(event: any, index: any){
        this.confirmationService.confirm({
            target: event.target,
            message: 'Yakin ingin menghapus data ini?',
            icon: 'pi pi-exclamation-triangle',
            acceptLabel: 'Ya',
            rejectLabel: 'Tidak',
            accept: () => {
                //confirm action
                this.dataBilling.splice(index, 1);
            },
            reject: () => {
                //reject action
            }
        });
    }

    printBilling(){
        this.appService.print( config.api_url('print/billingFarmasi/'+this.registrasi.noreg));
    }

}