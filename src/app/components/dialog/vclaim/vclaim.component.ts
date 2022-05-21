import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-vclaim',
    templateUrl: './vclaim.component.html',
    styleUrls: ['./vclaim.component.css']
})
export class VclaimComponent implements OnInit {

    public formSep!: FormGroup;
    formPeserta!: FormGroup;
    results: any;

    constructor(
        private fb: FormBuilder
    ) { }

    ngOnInit(): void {
        this.initFormSep();
        this.initFormPeserta();
    }

    public initFormSep() {
        this.formSep = this.fb.group({
            tanggal: ['', Validators.required],
            noKartu: ['', Validators.required],
            jnsKunjungan: ['', Validators.required],
            suratKontrol: ['', Validators.required],
            noRujukan: ['', Validators.required],
            diagnosa: ['', Validators.required],
            poliklinik: ['', Validators.required],
            dokter: ['', Validators.required],
            assessmentPel: ['', Validators.required],
            hakKelas: ['', Validators.required],
            naikKelas: ['', Validators.required],
            norm: ['', Validators.required],
            tlp: ['', Validators.required],
            catatan: ['', Validators.required],
            naikKelasPembiayaan: [''],
            naikKelasPenanggungJawab: [''],
            statusKecelakaan: [''],
            tglKejadian: [''],
            noLapPolisi: [''],
            keterangan: [''],
            suplesi: [''],
            noSuplesi: [''],
            provinsi: [''],
            kabupaten: [''],
            kecamatan: [''],
        })
    }

    public initFormPeserta() {
        this.formPeserta = this.fb.group({
            nama: [''],
            noKartu: ['', Validators.required],
            nik: [''],
            kelamin: [''],
            tglLahir: [''],
            usia: [''],
            status: [''],
            jnsPeserta: [''],
            hakKelas: [''],
            provider: [''],
            cobAsuransi: [''],
            cobNoAsuransi: [''],
            cobTglTat: [''],
            cobTglTmt: [''],
            norm: [''],
            tlp: [''],
            dinsos: [''],
            noSktm: [''],
            prb: ['']
        })
    }

    public search(e: any) {

    }

}
