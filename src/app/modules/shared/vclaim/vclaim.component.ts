import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataPasienService } from '../../registrasi/components/data-pasien/data-pasien.service';
import { FormSuratKontrolService } from './surat-kontrol/form-surat-kontrol/form-surat-kontrol.service';
import { VclaimService } from './vclaim.service';

@Component({
    selector: 'app-vclaim',
    templateUrl: './vclaim.component.html',
    styleUrls: ['./vclaim.component.css']
})
export class VclaimComponent implements OnInit {

    public formSep!: FormGroup;
    formPeserta!: FormGroup;
    results: any;
    keyNomorKartu: string = '';
    keyNik: string = '';
    dialogFormPrb: boolean = false;
    dialogFormRujukKeluar: boolean = false;

    constructor(
        private fb: FormBuilder,
        public vclaimService: VclaimService,
        public formSuratKontrolService: FormSuratKontrolService,
        private dataPasienService: DataPasienService
    ) { }

    ngOnInit(): void {
        this.initFormSep();
        this.initFormPeserta();

        this.vclaimService.peserta.subscribe(data => this.setFormPeserta(data));
        this.vclaimService.dialog.subscribe(data => {
            this.formSep.get('tanggal')?.patchValue(new Date());
        })
        // this.dataPasienService.pasien.subscribe(data => this.vclaimService.getPesertaByNomorKartu())

        this.vclaimService.dialog.subscribe(data => {
            if( data ){
                this.vclaimService.getPesertaByNomorKartu();
            }
        })

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

    public setFormPeserta(data: any) {
        if (data) {
            let peserta = data.peserta;
            this.formPeserta.get('nama')?.patchValue( peserta.nama )
            this.formPeserta.get('noKartu')?.patchValue( peserta.noKartu )
            this.formPeserta.get('nik')?.patchValue( peserta.nik )
            this.formPeserta.get('kelamin')?.patchValue( peserta.sex )
            this.formPeserta.get('tglLahir')?.patchValue( peserta.tglLahir )
            this.formPeserta.get('usia')?.patchValue( peserta.umur.umurSekarang )
            this.formPeserta.get('status')?.patchValue( peserta.statusPeserta.keterangan )
            this.formPeserta.get('jnsPeserta')?.patchValue( peserta.jenisPeserta.keterangan )
            this.formPeserta.get('hakKelas')?.patchValue( peserta.hakKelas.keterangan )
            this.formPeserta.get('provider')?.patchValue( peserta.provUmum.nmProvider )
            this.formPeserta.get('cobAsuransi')?.patchValue( peserta.cob.nmAsuransi )
            this.formPeserta.get('cobNoAsuransi')?.patchValue( peserta.cob.noAsuransi )
            this.formPeserta.get('cobTglTat')?.patchValue( peserta.cob.tglTAT )
            this.formPeserta.get('cobTglTmt')?.patchValue( peserta.cob.tglTMT )
            this.formPeserta.get('norm')?.patchValue( peserta.mr.noMR )
            this.formPeserta.get('tlp')?.patchValue( peserta.mr.noTelepon )
            this.formPeserta.get('dinsos')?.patchValue( peserta.informasi.dinsos )
            this.formPeserta.get('noSktm')?.patchValue( peserta.informasi.noSKTM )
            this.formPeserta.get('prb')?.patchValue( peserta.informasi.prolanisPRB )
        }
    }

    public getPesertaByNomorKartu(e: KeyboardEvent) {
        if (e.code === 'Enter') {
            this.vclaimService.getPesertaByNomorKartu();
        }
    }

    public getPesertaByNik(e: KeyboardEvent) {
        if (e.code === 'Enter') {
            this.vclaimService.getPesertaByNik();
        }
    }

    public search(e: any) {

    }

}
