import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TambahBillingOperasiService } from './tambah-billing-operasi.service';

@Component({
    selector: 'app-tambah-billing-operasi',
    templateUrl: './tambah-billing-operasi.component.html',
    styleUrls: ['./tambah-billing-operasi.component.css']
})
export class TambahBillingOperasiComponent implements OnInit {

    dialog: boolean = false;
    form!: FormGroup;
    dataTarif: any[] = [];
    optionsPelaksana: any[] = [];
    pelaksana: any;
    tarif: any;
    totalHarga: number = 0;

    harga: any = 0;

    percent: any[] = [];

    constructor(
        public tambahBillingOperasiService: TambahBillingOperasiService,
        private fb: FormBuilder
    ) { }

    ngOnInit(): void {
        this.initForm()
        this.tambahBillingOperasiService.dialog.subscribe(data => this.handleDialog(data))
        this.tambahBillingOperasiService.dataTarif.subscribe(data => this.dataTarif = data)
        this.optionsPelaksana = [
            { id: 1, name: 'Dokter' }
        ];
    }

    initHitungTarif(){
        this.percent = [
            { id: 'opr', name: 'Dokter Operator', percent: 100, jasa: this.harga, pelaksana: null, hadir: true, percentTidakHadir: 100, tambahanJasa: 0, tambahanFor: 'opr' },
            { id: 'ass_opr', name: 'Asst. Operator', percent: 15, jasa: 0, pelaksana: null, hadir: true, percentTidakHadir: 15, tambahanJasa: 0, tambahanFor: 'ass_opr' },
            { id: 'anas', name: 'Dokter Anastesi', percent: 40, jasa: 0, pelaksana: null, hadir: true, percentTidakHadir: 22, tambahanJasa: 0, tambahanFor: 'penata_anas' },
            { id: 'penata_anas', name: 'Penata Anastesi', percent: 15, jasa: 0, pelaksana: null, hadir: true, percentTidakHadir: 15, tambahanJasa: 0, tambahanFor: 'penata_anas' },
            { id: 'perawat_rr', name: 'Perawat RR', percent: 1.5, jasa: 0, pelaksana: null, hadir: true, percentTidakHadir: 1.5, tambahanJasa: 0, tambahanFor: 'perawat_rr' },
        ];
        this.hitungTarif(this.percent);
    }

    getDefaultHarga(tarif: any) {
        console.log(tarif);
        tarif.r_tarif_harga.forEach((element: any) => {
            element.r_tarif_harga_jasa.forEach((item: any) => {
                if (item.id_group_jasa == 'dokter') {
                    this.harga = item.jasa;
                }
            });
        });
    }

    onSelectPelaksana(value: any, item: any) {
        setTimeout(() => {
            let normal = this.harga * item.percent / 100;
            let tidakHadir = this.harga * item.percentTidakHadir / 100;
            let selisih = normal - tidakHadir;

            if( !value ){
                if( item.percent != item.percentTidakHadir ){
                    item.jasa = tidakHadir;
                    this.tambahanJasa(item.tambahanFor, selisih);
                }
            }else{
                item.jasa = normal;
                this.tambahanJasa(item.tambahanFor, 0);
            }
        }, 0);
    }

    hitungTarif(dataTarif: any[]) {
        this.totalHarga = 0;
        dataTarif.forEach(element => {
            element.jasa = this.harga * element.percent / 100;
            this.totalHarga += parseInt(element.jasa);
        });
    }

    tambahanJasa(forItem: any, jumlah: number){
        let arr = this.percent;
        let obj = arr.find(o => o.id === forItem);
        obj.tambahanJasa = jumlah;
    }

    handleDialog(data: boolean) {
        this.dialog = data;
        if (data) {
            this.tambahBillingOperasiService.getTarifOperasi();
        }
    }

    getHarga(dataTarif: any[]){
        let harga = 0;
        dataTarif.forEach(element => {
            harga = element.harga
        });
        return harga;
    }

    onSelectTarif(item: any){
        this.tarif = item;
        this.getDefaultHarga(this.tarif);
        this.initHitungTarif();
    }

    initForm() {
        this.form = this.fb.group({
            tanggal: [new Date(), [Validators.required]],
            name: [null, [Validators.required]],
        })
    }

}
