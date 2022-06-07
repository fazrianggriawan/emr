import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormRujukanKeluarService } from './form-rujukan-keluar.service';

@Component({
    selector: 'app-form-rujukan-keluar',
    templateUrl: './form-rujukan-keluar.component.html',
    styleUrls: ['./form-rujukan-keluar.component.css']
})
export class FormRujukanKeluarComponent implements OnInit {

    form!: FormGroup;

    constructor(
        private fb: FormBuilder,
        private formRujukanKeluarService: FormRujukanKeluarService
    ) { }

    ngOnInit(): void {
        this.initForm();
        this.formRujukanKeluarService.dialog.subscribe(data => {
            if(data){
                this.form.get('tanggal')?.patchValue(new Date());
            }
        })
    }

    initForm() {
        this.form = this.fb.group({
            'tanggal': [new Date()]
        })
    }

}
