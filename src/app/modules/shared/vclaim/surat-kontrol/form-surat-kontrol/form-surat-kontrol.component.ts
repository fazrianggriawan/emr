import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormSuratKontrolService } from './form-surat-kontrol.service';

@Component({
    selector: 'app-form-surat-kontrol',
    templateUrl: './form-surat-kontrol.component.html',
    styleUrls: ['./form-surat-kontrol.component.css']
})
export class FormSuratKontrolComponent implements OnInit {

    form!: FormGroup;

    constructor(
        private fb: FormBuilder,
        private formSuratKontrolService: FormSuratKontrolService
    ) { }

    ngOnInit(): void {
        this.initForm();
        this.formSuratKontrolService.dialog.subscribe(data => {
            if( data ){
                this.form.get('tanggal')?.patchValue(new Date())
                console.log('hallo');
            }
        })
    }

    initForm() {
        this.form = this.fb.group({
            'tanggal': [new Date()]
        })
    }

}
