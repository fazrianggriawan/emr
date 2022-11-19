import { Component, Input, OnInit } from '@angular/core';
import { RegistrasiService } from 'src/app/modules/registrasi/services/registrasi.service';
import { AppService } from 'src/app/services/app.service';
import { FormPulangPerawatanService } from './form-pulang-perawatan.service';

@Component({
    selector: 'app-form-pulang-perawatan',
    templateUrl: './form-pulang-perawatan.component.html',
    styleUrls: ['./form-pulang-perawatan.component.css']
})
export class FormPulangPerawatanComponent implements OnInit {

    @Input() showInfo : boolean = false;

    optionsKeteranganPulang: any[] = [];
    tanggal = new Date();
    keteranganPulang: any = '';
    catatan: any;
    registrasi: any;
    dialog: boolean = false;
    id: any = null;
    tanggalPulang: any;

    constructor(
        public formPulangPerawatanService: FormPulangPerawatanService,
        public appService: AppService,
        private registrasiService: RegistrasiService
    ) { }

    ngOnInit(): void {
        this.registrasiService.registrasi.subscribe(data => this.registrasi = data)
        this.formPulangPerawatanService.dialog.subscribe(data => this.dialog = data)
        this.formPulangPerawatanService.pulangPerawatan.subscribe(data => this.handlePulangPerawatan(data))
        this.optionsKeteranganPulang = [
            { id: 1, name: 'Sembuh' },
            { id: 2, name: 'Atas Persetujuan Dokter' },
            { id: 3, name: 'Pindah RS Lain' },
            { id: 4, name: 'Rujuk RS Lain' },
            { id: 5, name: 'Pulang Paksa' },
            { id: 6, name: 'Meninggal' },
        ];
    }

    handleDialog(data: boolean){
        this.dialog = data;
        if(data){
            this.formPulangPerawatanService.getPulangPerawatan(this.registrasi.noreg);
        }else{
            this.tanggal = new Date();
            this.keteranganPulang = '';
            this.catatan = '';
            this.registrasi = this.registrasi;
        }
    }

    handlePulangPerawatan(data: any){
        if(data){
            this.id = data.id;
            this.catatan = data.catatan;
            this.tanggal = new Date(data.tanggal);
            this.keteranganPulang = data.id_keterangan_pulang;
            this.tanggalPulang = data.tanggal;
        }else{
            this.id = null;
        }
    }

    save() {
        let data = {
            id: this.id,
            noreg: this.registrasi.noreg,
            tanggal: this.appService.reformatDate(this.tanggal),
            keteranganPulang: this.keteranganPulang,
            catatan: this.catatan
        }

        this.formPulangPerawatanService.save(data);
    }

}
