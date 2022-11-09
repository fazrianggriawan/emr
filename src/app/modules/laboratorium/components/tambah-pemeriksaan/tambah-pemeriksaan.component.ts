import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutoComplete } from 'primeng/autocomplete';
import { Observable, of } from 'rxjs';
import { BillingService } from 'src/app/modules/billing/billing/billing.service';
import { QuestionBase } from 'src/app/modules/billing/tarif/dynamic-form/question-base';
import { QuestionControlService } from 'src/app/modules/billing/tarif/dynamic-form/question-control.service';
import { DropdownQuestion } from 'src/app/modules/billing/tarif/dynamic-form/question-dropdown';
import { TarifService } from 'src/app/modules/billing/tarif/tarif.service';
import { MasterService } from 'src/app/modules/registrasi/services/master.service';
import { RegistrasiService } from 'src/app/modules/registrasi/services/registrasi.service';
import { AppService } from 'src/app/services/app.service';
import { TambahPemeriksaanService } from './tambah-pemeriksaan.service';

@Component({
    selector: 'app-tambah-pemeriksaan',
    templateUrl: './tambah-pemeriksaan.component.html',
    styleUrls: ['./tambah-pemeriksaan.component.css'],
    providers: [QuestionControlService]
})
export class TambahPemeriksaanComponent implements OnInit {

    questions$: Observable<QuestionBase<any>[]> | undefined;
    @ViewChild('ac') ac!: AutoComplete;

    tanggal = new Date();
    selectedTarif: any;
    selectedRuangan: any;
    dialog: boolean = false;
    dialogTarifJasa: boolean = false;
    registrasi: any;
    resultPemeriksaan: any[] = [];
    dataPemeriksaan: any[] = [];
    dataJnsPerawatan: any[] = [];
    dataRuangan: any[] = [];
    dataDokter: any[] = [];
    dataTarifJasa: any[] = [];
    form!: FormGroup;

    constructor(
        public tambahPemeriksaanService: TambahPemeriksaanService,
        private masterService: MasterService,
        private registrasiService: RegistrasiService,
        private fb: FormBuilder,
        private appService: AppService,
        private tarifService: TarifService,
        private qcs: QuestionControlService
    ) { }

    ngOnInit(): void {
        this.initForm();
        this.tambahPemeriksaanService.dataPemeriksaan.subscribe(data => this.resultPemeriksaan = data)
        this.tambahPemeriksaanService.dialog.subscribe(data => this.dialog = data)
        this.registrasiService.registrasi.subscribe(data => this.handleRegistrasi(data))
        this.masterService.jnsPerawatan.subscribe(data => this.dataJnsPerawatan = data)
        this.masterService.ruangan.subscribe(data => this.dataRuangan = data)
        this.masterService.dokter.subscribe(data => this.dataDokter = data)
        this.tarifService.tarifJasa.subscribe(data => this.handleTarifJasa(data))
        this.tarifService.jasaPelaksana.subscribe(data => this.handleJasaPelaksana(data))
    }

    handleJasaPelaksana(data: any){
        this.dialogTarifJasa = false;
        if(data){
            let item = {
                tarif: this.selectedTarif,
                jasaPelaksana: data
            }
            this.dataPemeriksaan.push(item);
            this.tarifService.jasaPelaksana.next('');
        }
    }

    handleTarifJasa(data: any) {

        if (data) {
            let questions: QuestionBase<string>[] = [];

            data.forEach((item: any) => {
                questions.push(new DropdownQuestion(item));
            });

            this.questions$ = of(questions.sort((a, b) => a.order - b.order))

            this.tarifService.focusSave.next(true);

        } else {
            // this.clearTarifJasa();
        }
    }

    onHideJasaPelaksana(){
        this.tarifService.focusSave.next(false);
        this.focusOnAc();
    }

    initForm(){
        this.form = this.fb.group({
            tanggal: [new Date(), [Validators.required]],
            jnsPerawatan: [null, [Validators.required]],
            ruangan: [null, [Validators.required]],
            dokter: [null, [Validators.required]],
            unit: ['LAB', [Validators.required]],
            status: ['process', [Validators.required]],
            noreg: [null, [Validators.required]],
        })
    }

    getMasterData(){
        this.masterService.getJnsPerawatan();
        this.masterService.getRuangan(this.registrasi.id_jns_perawatan);
        this.masterService.getDokter();
    }

    patchValueForm(data: any){
        this.form.get('jnsPerawatan')?.patchValue(data.id_jns_perawatan)
        this.form.get('ruangan')?.patchValue(data.ruangan)
        this.form.get('dokter')?.patchValue(data.dpjp_pelaksana)
        this.form.get('noreg')?.patchValue(this.registrasi.noreg)
    }

    handleRegistrasi(data: any){
        this.registrasi = data;
        if(data){
            this.getMasterData();
            this.patchValueForm(this.registrasi);
        }
    }

    openDialog(){
        this.tambahPemeriksaanService.openDialog(true);
        this.focusOnAc();
    }

    focusOnAc(){
        setTimeout(() => {
            this.ac.focusInput();
        }, 0);
    }

    selectPemeriksaan(e: any, ac: AutoComplete){
        ac.clear();
        this.selectedTarif = e;
        this.selectedRuangan = 32;
        // this.dataPemeriksaan.push(e);
        this.dialogTarifJasa = true;
        this.tarifService.getTarifJasa(e.id, this.registrasi.noreg, 32);
    }

    save(){
        let data = {
            form: this.form.value,
            data: this.dataPemeriksaan,
            tanggal: this.appService.reformatDate(this.form.value.tanggal)
        }

        this.tambahPemeriksaanService.save(data);
    }

}
