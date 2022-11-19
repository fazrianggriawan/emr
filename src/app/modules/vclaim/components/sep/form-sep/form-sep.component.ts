import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/services/app.service';
import { FormSepService } from './form-sep.service';

@Component({
    selector: 'app-form-sep',
    templateUrl: './form-sep.component.html',
    styleUrls: ['./form-sep.component.css']
})
export class formSepComponent implements OnInit {

    form!: FormGroup;
    rujukan: any;

    optionsJnsKunjungan: any[] = [];
    optionsRuangan: any[] = [];
    optionsDokter: any[] = [];
    optionsDiagnosa: any[] = [];
    optionsAssessmentPelayanan: any[] = [];
    optionsKelas: any[] = [];
    optionsPembiayaanNaikKelas: any[] = [];
    optionsStatusLaka: any[] = [];
    optionsSuplesi: any[] = [];
    optionsProvinsi: any[] = [];
    optionsKabupaten: any[] = [];
    optionsKecamatan: any[] = [];

    constructor(
        public formSepService: FormSepService,
        private fb: FormBuilder,
        public appService: AppService
    ) { }

    ngOnInit(): void {
        this.initForm();
    }

    initForm() {
        this.form = this.fb.group({
            tglSep: [new Date(), Validators.required],
            noKartu: ['', Validators.required],
            jnsPelayanan: ['', Validators.required],
            jnsKunjungan: ['', Validators.required],
            suratKontrol: [''],
            noRujukan: [''],
            diagnosa: ['', Validators.required],
            poliklinik: [null, Validators.required],
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

    changeRuangan() {
        this.optionsDokter = [];
        if( this.form.get('poliklinik')?.value ){
            if (this.form.value.jnsKunjungan.kode == 'rawatInap' || this.form.value.jnsKunjungan.kode == 'igd') {
                setTimeout(() => {
                    this.formSepService.getDpjp('1', this.form.value.poliklinik);
                }, 100);
            } else {
                setTimeout(() => {
                    this.formSepService.getDpjp('2', this.form.value.poliklinik);
                }, 100);
            }
        }
    }

    public onSelectJnsKunjungan() {
        this.form.get('assessmentPel')?.patchValue('');
        this.form.get('jnsPelayanan')?.patchValue(this.form.value.jnsKunjungan.jnsPelayanan);
        this.form.get('tujuanKunj')?.patchValue(this.form.value.jnsKunjungan.tujuanKunjungan);
        if (this.form.value.jnsKunjungan.kode == 'antarPoli') {
            this.form.get('assessmentPel')?.addValidators([Validators.required]);
            this.form.get('assessmentPel')?.updateValueAndValidity();
        } else {
            this.form.get('assessmentPel')?.clearValidators();
            this.form.get('assessmentPel')?.updateValueAndValidity();
        }
    }

}
