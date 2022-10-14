import { Component, OnInit } from '@angular/core';
import { AddFormEmrService } from './add-form-emr.service';
import { Subscription } from "rxjs";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-add-form-emr',
    templateUrl: './add-form-emr.component.html',
    styleUrls: ['./add-form-emr.component.css']
})
export class AddFormEmrComponent implements OnInit {

    parent: any[] = [];
    controlType: any[] = [];
    isRequired: any[] = [];
    required: boolean = false;
    form!: FormGroup;

    inputTextbox: string = '';
    inputDropdown: string = '';
    inputCheckbox: boolean = false;
    hideLabel: boolean = false;
    inputPilihan: string = '';
    pilihanJawaban: any[] = [];

    subs: Subscription[] = [];


    constructor(
        private addFormEmrService: AddFormEmrService,
        private fb: FormBuilder
    ) { }

    ngOnInit(): void {
        this.addFormEmrService.getDataParent(1);
        this.addFormEmrService.getDataControlType();

        this.addFormEmrService.dataParent.subscribe(data => this.parent = data)
        this.addFormEmrService.dataControlType.subscribe(data => this.controlType = data)

        this.initForm();
    }

    initForm() {
        this.form = this.fb.group({
            parent: [null],
            key: [null, [Validators.required]],
            pertanyaan: [null, [Validators.required]],
            controlType: ['textbox', [Validators.required]],
            prefix: [null],
            postfix: [null],
            required: [false, [Validators.required]],
        });
    }

    save() {
        let data : any = {
            form : this.form.value,
            id_form : 1,
            id_ruangan : 18,
            options: this.pilihanJawaban,
            value: '',
            hideLabel: this.hideLabel
        }
        if( this.form.get('controlType')?.value == 'checkbox' ) data.value = this.inputCheckbox;
        if( this.form.get('controlType')?.value == 'dropdown' ) data.value = this.inputDropdown;
        if( this.form.get('controlType')?.value == 'textbox' ) data.value = this.inputTextbox;

        this.addFormEmrService.saveFormRuangan(data);

    }

    generateKey(e: any) {
        setTimeout(() => {
            if (!this.form.get('key')?.value) {
                this.toKey(this.form.get('pertanyaan')?.value);
            } else if (this.form.get('key')?.value.length < 50) {
                this.toKey(this.form.get('pertanyaan')?.value);
            }
        }, 500);
    }

    toKey(text: string) {
        this.form.get('key')?.patchValue(text.replace(/ /g, '_'));
    }

    listenAddJawaban(e: any) {
        if (e.keyCode == 13) {
            this.pilihanJawaban.push( { name: this.inputPilihan } );
            this.inputPilihan = '';
        }
    }

    removeJawaban(index: number){
        this.pilihanJawaban.splice(index, 1);
    }

}
