import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { VclaimService } from 'src/app/modules/shared/vclaim/vclaim.service';
import { MasterService } from '../../services/master.service';
import { DataPasienService } from '../data-pasien/data-pasien.service';
import { FormRegistrasiService } from './form-registrasi.service';

@Component({
    selector: 'app-form-registrasi',
    templateUrl: './form-registrasi.component.html',
    styleUrls: ['./form-registrasi.component.css']
})
export class FormRegistrasiComponent implements OnInit {

    @ViewChild('noRm') input!: ElementRef;

    dataRegistrasi: any;
    dialogDataPasien: boolean = false;
    pasien: any;
    form: any;
    today: any;
    dataDokter: any;
    dataPoli: any;
    dataGroupPasien: any;
    dataGolPasien: any;
    dataJnsPerawatan: any;
    dataWaktuPelayanan: any;

    constructor(
        public vclaimService: VclaimService,
        public dataPasienService: DataPasienService,
        public formRegistrasiService: FormRegistrasiService,
        private fb: FormBuilder,
        private masterService: MasterService
    ) { }

    ngOnInit(): void {
        this.initForm();
        this.masterService.dokter.subscribe(data => this.dataDokter = data)
        this.masterService.poli.subscribe(data => this.dataPoli = data)
        this.masterService.groupPasien.subscribe(data => this.dataGroupPasien = data)
        this.masterService.golonganPasien.subscribe(data => this.dataGolPasien = data)
        this.masterService.jnsPerawatan.subscribe(data => this.dataJnsPerawatan = data)
        this.masterService.waktuPelayanan.subscribe(data => this.dataWaktuPelayanan = data)

        this.dataPasienService.dialog.subscribe(data => this.dialogDataPasien = data)
        this.dataPasienService.pasien.subscribe(data => this.handleDataPasien(data))

        this.dataRegistrasi = [
            { tanggal: '12-08-2022', nama: 'Fazri Anggriawan', norm: '808112', jnsPerawatan: 'RAWAT JALAN', ruanganPoli: 'POLIKLINIK ANAK', dokter: 'dr. Ahmad subagja, Sp.B', jnsTagihan: 'BPJS' },
            { tanggal: '12-08-2022', nama: 'Fazri Anggriawan', norm: '808112', jnsPerawatan: 'RAWAT JALAN', ruanganPoli: 'POLIKLINIK ANAK', dokter: 'dr. Ahmad subagja, Sp.B', jnsTagihan: 'BPJS' },
            { tanggal: '12-08-2022', nama: 'Fazri Anggriawan', norm: '808112', jnsPerawatan: 'RAWAT JALAN', ruanganPoli: 'POLIKLINIK ANAK', dokter: 'dr. Ahmad subagja, Sp.B', jnsTagihan: 'BPJS' },
            { tanggal: '12-08-2022', nama: 'Fazri Anggriawan', norm: '808112', jnsPerawatan: 'RAWAT JALAN', ruanganPoli: 'POLIKLINIK ANAK', dokter: 'dr. Ahmad subagja, Sp.B', jnsTagihan: 'BPJS' },
            { tanggal: '12-08-2022', nama: 'Fazri Anggriawan', norm: '808112', jnsPerawatan: 'RAWAT JALAN', ruanganPoli: 'POLIKLINIK ANAK', dokter: 'dr. Ahmad subagja, Sp.B', jnsTagihan: 'BPJS' },
        ]

        this.formRegistrasiService.dialog.subscribe(data => {
            if (data) {
                this.initForm();
                setTimeout(() => { this.input.nativeElement.focus() }, 0);
            }
        })
    }

    initForm() {
        this.today = new Date();
        this.form = this.fb.group({
            status: ['OPEN'],
            noreg: [''],
            tanggal: [this.today, [Validators.required]],
            noSep: [''],
            jnsPerawatan: ['', [Validators.required]],
            ruanganPoli: ['', [Validators.required]],
            dokter: ['', [Validators.required]],
            groupPasien: ['', [Validators.required]],
            golPasien: ['', [Validators.required]],
            jnsPembayaran: ['', [Validators.required]],
            waktuPelayanan: [''],
            catatan: ['']
        })
    }

    handleDataPasien(data: any) {
        this.pasien = data;
    }

    searchPasien(e: any) {
        if (e.code == 'Enter') {
            this.dataPasienService.pasien.next('');
            if (e.srcElement.value) {
                this.formRegistrasiService.searchPasien(e.srcElement.name, e.srcElement.value);
            }
        }else if(e.srcElement.value == ''){
            this.dataPasienService.pasien.next('');
        }
    }

    getDokterByPoli(value:string){
        this.masterService.getDokterByPoli(value);
    }

    getGolPasienByGroup(value: string){
        this.masterService.getGolPasienByGroup(value);
    }

    save(){
        let data = this.form.value;

        if( data.jnsPerawatan == 'RJ' ){
            // RAWAT JALAN

        }
    }

}
