import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/services/app.service';
import { BillingService } from '../../billing/billing.service';
import { JasaPelaksanaService } from '../../components/jasa-pelaksana/jasa-pelaksana.service';
import { TarifService } from '../tarif.service';

import { QuestionBase } from './question-base';
import { QuestionControlService } from './question-control.service';

@Component({
    selector: 'app-dynamic-form',
    templateUrl: './dynamic-form.component.html',
    providers: [QuestionControlService]
})
export class DynamicFormComponent implements OnInit {

    @ViewChild('saveButton') saveButton!: ElementRef;

    @Input() questions: QuestionBase<any>[] | null = [];
    @Input() ruangan: any | null = [];
    @Input() registrasi: any | null = [];
    @Input() tarif: any | null = [];
    @Input() tanggal: any | null = [];

    form!: FormGroup;
    subs: Subscription[] = [];

    constructor(
        private qcs: QuestionControlService,
        private billingService: BillingService,
        private apps: AppService,
        private tarifService: TarifService,
        private jasaPelaksanaService: JasaPelaksanaService
    ) { }

    ngOnInit() {
        this.form = this.qcs.toFormGroup(this.questions as QuestionBase<string>[]);
        this.subs.push(this.tarifService.autoSave.subscribe(data => {
            if(data){
                if(!this.form.invalid){
                    this.onSubmit();
                }
            }
        }))
        this.subs.push(this.tarifService.focusSave.subscribe(data => {
            if( data ){
                setTimeout(() => {
                    if(!this.form.invalid){
                        this.saveButton.nativeElement.focus();
                    }
                }, 100);
            }else{
                this.destorySubs();
            }
        }))
    }

    destorySubs(){
        this.subs.forEach(element => {
            element.unsubscribe();
        });
    }

    onSubmit() {
        let data = {
            noreg: this.registrasi.noreg,
            ruangan: this.ruangan,
            tarif: this.tarif,
            jasa: this.form.getRawValue(),
            tanggal: this.apps.reformatDate(this.tanggal)
        }

        this.tarifService.jasaPelaksana.next(data)
        this.jasaPelaksanaService.jasaPelaksana.next(this.form.getRawValue())

        // this.billingService.save(data);

    }
}
