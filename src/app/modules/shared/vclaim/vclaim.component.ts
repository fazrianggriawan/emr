import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AppService } from 'src/app/services/app.service';
import { DataPasienService } from '../../registrasi/components/data-pasien/data-pasien.service';
import { FormSuratKontrolService } from './surat-kontrol/form-surat-kontrol/form-surat-kontrol.service';
import { SuratKontrolService } from './surat-kontrol/surat-kontrol.service';
import { VclaimService } from './vclaim.service';
import { RujukanService } from "./rujukan/rujukan.service";

@Component({
    selector: 'app-vclaim',
    templateUrl: './vclaim.component.html',
    styleUrls: ['./vclaim.component.css']
})
export class VclaimComponent implements OnInit {

    peserta: any;
    formSep!: FormGroup;
    tabIndex: number = 0;
    results: any;
    keyNomorKartu: string = '';
    keyNik: string = '';
    dialogFormPrb: boolean = false;
    dialogFormRujukKeluar: boolean = false;
    dataDiagnosa: any;
    dataPoliklinik: any;
    dataDokter: any;
    dataAssessmentPelayanan: any;
    dataKelas: any;
    dataStatusLaka: any;
    dataPembiayaanNaikKelas: any;
    dataJnsKunjungan: any;
    suratKontrol: any;

    constructor(
        private fb: FormBuilder,
        public vclaimService: VclaimService,
        public formSuratKontrolService: FormSuratKontrolService,
        private suratKontrolService: SuratKontrolService,
        private appService: AppService,
        private rujukanService: RujukanService
    ) { }

    ngOnInit(): void {
        this.initFormSep();
        this.vclaimService.peserta.subscribe(data => this.onSelectPeserta(data));
        this.vclaimService.dialog.subscribe(data => this.initFormSep() )
        this.vclaimService.diagnosa.subscribe(data => this.dataDiagnosa = data)
        this.vclaimService.poliklinik.subscribe(data => this.dataPoliklinik = data)
        this.vclaimService.dokter.subscribe(data => this.dataDokter = data)
        this.vclaimService.assessmentPelayanan.subscribe(data => this.dataAssessmentPelayanan = data)
        this.vclaimService.kelas.subscribe(data => this.dataKelas = data)
        this.vclaimService.statusLaka.subscribe(data => this.dataStatusLaka = data)
        this.vclaimService.pembiayaanNaikKelas.subscribe(data => this.dataPembiayaanNaikKelas = data)
        this.vclaimService.jnsKunjungan.subscribe(data => this.dataJnsKunjungan = data)
        this.rujukanService.rujukan.subscribe(data => { if (data) this.onSelectRujukan(data) })
        this.suratKontrolService.suratKontrol.subscribe(data => { if (data) this.onSelectSuratKontrol(data) })
        this.vclaimService.saveStatus.subscribe(data => { if (data) { this.initFormSep() } })
        this.vclaimService.dialog.subscribe(data => {
            if (data) this.vclaimService.getPesertaByNomorKartu();
        })

    }

    public onSelectPeserta(data: any) {
        if (data) {
            this.initFormSep();
            this.peserta = data.peserta;
            this.formSep.get('hakKelas')?.patchValue(this.peserta.hakKelas);
            this.formSep.get('noKartu')?.patchValue(this.peserta.noKartu);
        } else {
            this.peserta = { statusPeserta: {}, jenisPeserta: {}, hakKelas: {}, provUmum: {}, cob: {}, mr: {}, informasi: {}, umur: {} }
        }
    }

    public initFormSep() {
        this.formSep = this.fb.group({
            tglSep: [new Date(), Validators.required],
            noKartu: ['', Validators.required],
            jnsPelayanan: ['', Validators.required],
            jnsKunjungan: ['', Validators.required],
            suratKontrol: [''],
            noRujukan: [''],
            diagnosa: ['', Validators.required],
            poliklinik: ['', Validators.required],
            dokter: ['', Validators.required],
            assessmentPel: [''],
            norm: ['', Validators.required],
            tlp: ['', Validators.required],
            catatan: ['-', Validators.required],
            rujukan: [''],
            skdp: [''],
            hakKelas: [''],
            naikKelas: [''],
            naikKelasPembiayaan: [''],
            naikKelasPenanggungJawab: [''],
            isLakaLantas: ['0'],
            cob: ['0'],
            poliklinikEks: ['0'],
            kdPenunjang: [''],
            katarak: ['0'],
            tujuanKunj: [''],
            flagProcedure: [''],
            lakaNoLp: [''],
            lakaTglKejadian: [''],
            lakaKeterangan: [''],
            lakaSuplesi: [''],
            lakaNoSuplesi: [''],
            lakaPropinsi: [''],
            lakaKabupaten: [''],
            lakaKecamatan: [''],
        })
    }

    public getDpjp() {
        this.dataDokter = [];
        if (this.formSep.value.jnsKunjungan.kode == 'rawatInap' || this.formSep.value.jnsKunjungan.kode == 'igd') {
            setTimeout(() => {
                this.vclaimService.getDpjp('1', this.formSep.value.poliklinik.kode);
            }, 100);
        } else {
            setTimeout(() => {
                this.vclaimService.getDpjp('2', this.formSep.value.poliklinik.kode);
            }, 100);
        }
    }

    public listenCariPeserta(e: any) {
        if (e.code == 'Enter') {
            if (e.srcElement.name == 'noPeserta')
                this.vclaimService.getPesertaByNomorKartu(this.keyNomorKartu);

            if (e.srcElement.name == 'nik')
                this.vclaimService.getPesertaByNik(this.keyNik);
        }
    }

    public onSelectSuratKontrol(data: any) {
        this.rujukanService.getRujukan(data.sep.provPerujuk.noRujukan);
        let diagnosa = data.sep.diagnosa.split(' - ')
        this.formSep.get('diagnosa')?.patchValue({ kode: diagnosa[0], nama: data.sep.diagnosa })
        this.formSep.get('poliklinik')?.patchValue({ kode: data.poliTujuan, nama: data.namaPoliTujuan })
        this.formSep.get('dokter')?.patchValue({ kode: data.kodeDokter, nama: data.namaDokter })
        this.formSep.get('suratKontrol')?.patchValue(data.noSuratKontrol)
        this.formSep.get('assessmentPel')?.patchValue('5')
        this.formSep.get('noRujukan')?.patchValue(data.sep.provPerujuk.noRujukan);
        this.formSep.get('skdp')?.patchValue(data);
        this.tabIndex = 0;
    }

    public onSelectRujukan(data: any) {
        this.formSep.get('noRujukan')?.patchValue(data.rujukan.noKunjungan);
        this.formSep.get('diagnosa')?.patchValue({ kode: data.rujukan.diagnosa.kode, nama: data.rujukan.diagnosa.kode + ' - ' + data.rujukan.diagnosa.nama })
        this.formSep.get('rujukan')?.patchValue(data);
        if (this.formSep.value.jnsKunjungan.kode != 'antarPoli') {
            this.formSep.get('poliklinik')?.patchValue({ kode: data.rujukan.poliRujukan.kode, nama: data.rujukan.poliRujukan.nama })
        }
        this.tabIndex = 0;
    }

    public onSelectJnsKunjungan() {
        this.formSep.get('assessmentPel')?.patchValue('');
        this.formSep.get('jnsPelayanan')?.patchValue(this.formSep.value.jnsKunjungan.jnsPelayanan);
        this.formSep.get('tujuanKunj')?.patchValue(this.formSep.value.jnsKunjungan.tujuanKunjungan);
        if( this.formSep.value.jnsKunjungan.kode == 'antarPoli' ){
            this.formSep.get('assessmentPel')?.addValidators([Validators.required]);
            this.formSep.get('assessmentPel')?.updateValueAndValidity();
        }else{
            this.formSep.get('assessmentPel')?.clearValidators();
            this.formSep.get('assessmentPel')?.updateValueAndValidity();
        }
    }

    public save() {
        this.formSep.get('noKartu')?.patchValue(this.peserta.noKartu);
        this.formSep.value.tglSep = this.appService.reformatDate(this.formSep.value.tglSep);
        this.vclaimService.save(this.formSep.value);
    }

}
