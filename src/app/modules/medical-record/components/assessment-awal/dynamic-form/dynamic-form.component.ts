import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AppService } from 'src/app/services/app.service';

import { QuestionBase } from './question-base';
import { QuestionControlService } from './question-control.service';

@Component({
    selector: 'app-dynamic-form',
    templateUrl: './dynamic-form.component.html',
    providers: [QuestionControlService]
})
export class DynamicFormComponent implements OnInit {

    @Input() questions: QuestionBase<any>[] | null = [];
    @Input() ruangan: any | null = [];
    @Input() registrasi: any | null = [];
    @Input() tarif: any | null = [];
    @Input() tanggal: any | null = [];

    form!: FormGroup;

    constructor(
        private qcs: QuestionControlService,
        private apps: AppService
    ) { }

    ngOnInit() {
        this.form = this.qcs.toFormGroup(this.questions as QuestionBase<string>[]);
    }

    onSubmit() {
        let data = {
            noreg: this.registrasi.noreg,
            ruangan: this.ruangan,
            tarif: this.tarif,
            jasa: this.form.getRawValue(),
            tanggal: this.apps.reformatDate(this.tanggal)
        }

    }
}
