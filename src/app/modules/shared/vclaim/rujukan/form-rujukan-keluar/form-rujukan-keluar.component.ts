import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/services/app.service';
import { HistoryService } from '../../history/history.service';
import { VclaimService } from '../../vclaim.service';
import { FormRujukanKeluarService } from './form-rujukan-keluar.service';

@Component({
    selector: 'app-form-rujukan-keluar',
    templateUrl: './form-rujukan-keluar.component.html',
    styleUrls: ['./form-rujukan-keluar.component.css']
})
export class FormRujukanKeluarComponent implements OnInit {

    form!: FormGroup;
    dataJnsRujukan: any;
    dataFaskes: any;
    dataDiagnosa: any;
    dataPoli: any;
    dataSep: any;
    dataJnsPelayanan: any;

    constructor(
        private fb: FormBuilder,
        public formRujukanKeluarService: FormRujukanKeluarService,
        public vclaimService: VclaimService,
        private historyService: HistoryService,
        private appService: AppService
    ) { }

    ngOnInit(): void {
        this.initForm();
        this.vclaimService.diagnosa.subscribe(data => this.dataDiagnosa = data)
        this.vclaimService.poliklinik.subscribe(data => this.dataPoli = data)
        this.historyService.dataHistory.subscribe(data => this.dataSep = data.histori)
        this.formRujukanKeluarService.jnsRujukan.subscribe(data => this.dataJnsRujukan = data)
        this.formRujukanKeluarService.jnsPelayanan.subscribe(data => this.dataJnsPelayanan = data)
        this.formRujukanKeluarService.faskes.subscribe(data => this.dataFaskes = data)
        this.formRujukanKeluarService.dialog.subscribe(data => { if(data){
            this.initForm();
            this.form.get('tanggal')?.patchValue(new Date());
            this.form.get('tglRencana')?.patchValue(new Date());
        }})
    }

    initForm() {
        this.form = this.fb.group({
            'tanggal': [new Date(), [Validators.required]],
            'tglRencana': [new Date(), [Validators.required]],
            'jnsPelayanan': ['', [Validators.required]],
            'noSep': ['', [Validators.required]],
            'tipeRujukan': ['', [Validators.required]],
            'poli': ['', [Validators.required]],
            'ppk': ['', [Validators.required]],
            'diagnosa': ['', [Validators.required]],
            'catatan': ['', [Validators.required, Validators.minLength(5)]],
        })
    }

    save() {
        this.form.value.tanggal = this.appService.reformatDate(this.form.get('tanggal')?.value)
        this.form.value.tglRencana = this.appService.reformatDate(this.form.get('tglRencana')?.value)
        this.formRujukanKeluarService.save(this.form.value);
    }

}
