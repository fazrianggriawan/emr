import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/services/app.service';
import { HistoryService } from '../history.service';
import { FormPasienPulangService } from './form-pasien-pulang.service';

@Component({
    selector: 'app-form-pasien-pulang',
    templateUrl: './form-pasien-pulang.component.html',
    styleUrls: ['./form-pasien-pulang.component.css']
})
export class FormPasienPulangComponent implements OnInit {

    form!: FormGroup
    dataStatusPulang: any;

    constructor(
        private fb: FormBuilder,
        private formPasienPulangService: FormPasienPulangService,
        private appService: AppService,
        private historyService: HistoryService
    ) { }

    ngOnInit(): void {
        this.initForm();
        this.formPasienPulangService.dialog.subscribe(data => { if (data) this.initForm() })
        this.formPasienPulangService.dataStatusPulang.subscribe(data => this.dataStatusPulang = data)
        this.historyService.sep.subscribe(data => {
            if( data ){
                this.form.get('noSep')?.patchValue(data.noSep)
            }
        })
    }

    public initForm() {
        this.form = this.fb.group({
            'tanggal': [new Date(), [Validators.required]],
            'tglMeninggal': [''],
            'noSep': [''],
            'statusPulang': ['', [Validators.required]],
            'noLp': [''],
            'noSuratMeninggal': ['']
        })
    }

    public save() {
        this.form.value.tanggal = this.appService.reformatDate(this.form.get('tanggal')?.value);
        if( this.form.get('tglMeninggal')?.value != '' ){
            this.form.value.tglMeninggal = this.appService.reformatDate(this.form.get('tglMeninggal')?.value)
        }

        this.formPasienPulangService.save(this.form.value)
    }

}
