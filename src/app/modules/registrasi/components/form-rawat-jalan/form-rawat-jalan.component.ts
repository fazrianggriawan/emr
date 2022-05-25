import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VclaimService } from 'src/app/modules/shared/vclaim/vclaim.service';
import { MasterService } from '../../services/master.service';
import { DataPasienService } from '../data-pasien/data-pasien.service';

@Component({
    selector: 'app-form-rawat-jalan',
    templateUrl: './form-rawat-jalan.component.html',
    styleUrls: ['./form-rawat-jalan.component.css']
})
export class FormRawatJalanComponent implements OnInit {

    formRawatJalan!: FormGroup;
    rs: any  = [];
    results: any  = [];
    dialogVclaim: boolean = false;

    pasien: any = {};


    constructor(
        private fb: FormBuilder,
        private masterService: MasterService,
        private dataPasienService: DataPasienService,
        public vclaimService: VclaimService
    ) { }

    ngOnInit(): void {
        this.initForm()

        this.masterService.rs.subscribe( data => this.rs = data )
        this.dataPasienService.pasien.subscribe(data => this.setToForm(data))
    }

    public setToForm(pasien: any) {
        if( pasien ){
            let tanggal = new Date();
            this.formRawatJalan.get('tanggal')?.patchValue(tanggal);
            this.formRawatJalan.get('nama')?.patchValue(pasien.nama);
            this.formRawatJalan.get('norm')?.patchValue(pasien.norm);
            this.formRawatJalan.get('rs')?.patchValue(pasien.rs);
            this.formRawatJalan.get('noAsuransi')?.patchValue(pasien.no_asuransi);
            this.formRawatJalan.get('nik')?.patchValue(pasien.nik);
            this.formRawatJalan.get('tglLahir')?.patchValue(pasien.tgl_lahir);
        }
    }

    public initForm() {
        this.formRawatJalan = this.fb.group({
            tanggal: ['', Validators.required],
            rs: ['', Validators.required],
            norm: ['', Validators.required],
            id_pasien: ['', Validators.required],
            noAsuransi: ['', Validators.required],
            nik: [''],
            nama: ['', Validators.required],
            tglLahir: ['', Validators.required],
            noSep: ['', Validators.required],
            poliklinik: ['', Validators.required],
            dokter: ['', Validators.required],
            jnsPembayaran: ['', Validators.required],
            catatan: [''],
            noreg: [''],
            status: [''],
        })
    }

}
