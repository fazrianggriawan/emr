import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AppService } from 'src/app/services/app.service';
import { HistoryService } from '../../history/history.service';
import { RujukanService } from '../../rujukan/rujukan.service';
import { VclaimService } from '../../vclaim.service';
import { SuratKontrolService } from '../surat-kontrol.service';
import { FormSuratKontrolService } from './form-surat-kontrol.service';

@Component({
    selector: 'app-form-surat-kontrol',
    templateUrl: './form-surat-kontrol.component.html',
    styleUrls: ['./form-surat-kontrol.component.css']
})
export class FormSuratKontrolComponent implements OnInit {

    form!: FormGroup;
    dataSep: any;
    dataPoli: any;
    dataDokter: any;
    tanggal : any = new Date();

    constructor(
        private fb: FormBuilder,
        private formSuratKontrolService: FormSuratKontrolService,
        private historyService: HistoryService,
        private rujukanService: RujukanService,
        private vclaimService: VclaimService,
        private appService: AppService
    ) { }

    ngOnInit(): void {
        this.initForm();
        this.formSuratKontrolService.dialog.subscribe(data => {
            if (data) {
                this.form.get('tanggal')?.patchValue(new Date())
            }
        })

        this.historyService.dataHistory.subscribe(data => this.dataSep = data.histori)
        this.vclaimService.poliklinik.subscribe(data => this.dataPoli = data)
        this.vclaimService.dokter.subscribe(data => this.dataDokter = data)
        this.rujukanService.rujukan.subscribe( data => {
            if( data ){
                this.form.get('poli')?.patchValue(data.rujukan.poliRujukan.kode)
                this.vclaimService.getPoliklinik(data.rujukan.poliRujukan.nama)
                this.vclaimService.getDpjp(this.form.value.sep.jnsPelayanan, data.rujukan.poliRujukan.kode)
            }
        })
        this.formSuratKontrolService.saveStatus.subscribe(data => {if(data) this.formSuratKontrolService.closeDialog()})
    }

    initForm() {
        this.form = this.fb.group({
            'tgl': [new Date()],
            'sep': [''],
            'poli': [''],
            'dokter': ['']
        })
    }

    onSelectSep() {
        this.rujukanService.getRujukan(this.form.value.sep.noRujukan)
    }

    save() {
        this.form.value.tgl = this.appService.reformatDate(this.form.get('tgl')?.value)
        this.form.value.noSep = this.form.value.sep.noSep;
        this.formSuratKontrolService.save(this.form.value);
    }

}
