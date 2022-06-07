import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { VclaimService } from 'src/app/modules/shared/vclaim/vclaim.service';
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

    constructor(
        public vclaimService: VclaimService,
        public dataPasienService: DataPasienService,
        public formRegistrasiService: FormRegistrasiService,
        private fb: FormBuilder
    ) { }

    ngOnInit(): void {
        this.initForm();
        this.dataRegistrasi = [
            { tanggal: '12-08-2022', nama: 'Fazri Anggriawan', norm: '808112', jnsPerawatan: 'RAWAT JALAN', ruanganPoli: 'POLIKLINIK ANAK', dokter: 'dr. Ahmad subagja, Sp.B', jnsTagihan: 'BPJS' },
            { tanggal: '12-08-2022', nama: 'Fazri Anggriawan', norm: '808112', jnsPerawatan: 'RAWAT JALAN', ruanganPoli: 'POLIKLINIK ANAK', dokter: 'dr. Ahmad subagja, Sp.B', jnsTagihan: 'BPJS' },
            { tanggal: '12-08-2022', nama: 'Fazri Anggriawan', norm: '808112', jnsPerawatan: 'RAWAT JALAN', ruanganPoli: 'POLIKLINIK ANAK', dokter: 'dr. Ahmad subagja, Sp.B', jnsTagihan: 'BPJS' },
            { tanggal: '12-08-2022', nama: 'Fazri Anggriawan', norm: '808112', jnsPerawatan: 'RAWAT JALAN', ruanganPoli: 'POLIKLINIK ANAK', dokter: 'dr. Ahmad subagja, Sp.B', jnsTagihan: 'BPJS' },
            { tanggal: '12-08-2022', nama: 'Fazri Anggriawan', norm: '808112', jnsPerawatan: 'RAWAT JALAN', ruanganPoli: 'POLIKLINIK ANAK', dokter: 'dr. Ahmad subagja, Sp.B', jnsTagihan: 'BPJS' },
        ]

        this.dataPasienService.dialog.subscribe(data => this.dialogDataPasien = data)
        this.dataPasienService.pasien.subscribe(data => this.handleDataPasien(data))

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
            status: [''],
            noreg: [''],
            tanggal: [this.today],
            noSep: [''],
            jnsKunjungan: [''],
            ruangan: [''],
            dokterDpjp: [''],
            jnsPembayaran: [''],
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

}
