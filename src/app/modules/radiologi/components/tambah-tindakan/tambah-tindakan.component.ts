import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutoComplete } from 'primeng/autocomplete';
import { Observable, of } from 'rxjs';
import { QuestionBase } from 'src/app/modules/billing/tarif/dynamic-form/question-base';
import { DropdownQuestion } from 'src/app/modules/billing/tarif/dynamic-form/question-dropdown';
import { TarifService } from 'src/app/modules/billing/tarif/tarif.service';
import { MasterService } from 'src/app/modules/registrasi/services/master.service';
import { RegistrasiService } from 'src/app/modules/registrasi/services/registrasi.service';
import { TambahTindakanService } from './tambah-tindakan.service';

@Component({
    selector: 'app-tambah-tindakan',
    templateUrl: './tambah-tindakan.component.html',
    styleUrls: ['./tambah-tindakan.component.css']
})
export class TambahTindakanComponent implements OnInit {

    questions$: Observable<QuestionBase<any>[]> | undefined;
    @ViewChild('ac') ac!: AutoComplete;

    registrasi: any;
    dialog: boolean = false;
    form!: FormGroup;
    ruanganOptions: any[] = [];
    jnsPerawatanOptions: any[] = [];
    dokterOptions: any[] = [];
    tindakanOptions: any[] = [];
    dataPemeriksaan: any[] = [];
    dialogJasaPelaksana: boolean = false;
    selectedTarif: any;
    tanggal = new Date();
    selectedRuangan: any;

    constructor(
        private fb: FormBuilder,
        private registrasiService: RegistrasiService,
        private masterService: MasterService,
        public tambahTindakanService: TambahTindakanService,
        private tarifService: TarifService
    ) { }

    ngOnInit(): void {
        this.registrasiService.registrasi.subscribe(data => this.onSelectRegistrasi(data))
        this.masterService.ruangan.subscribe(data => this.ruanganOptions = data)
        this.masterService.jnsPerawatan.subscribe(data => this.jnsPerawatanOptions = data)
        this.masterService.dokter.subscribe(data => this.dokterOptions = data)
        this.tarifService.tarifJasa.subscribe(data => this.handleTarifJasa(data))
        this.tarifService.jasaPelaksana.subscribe(data => this.handleJasaPelaksana(data))
        this.tambahTindakanService.dialog.subscribe(data => this.handleDialog(data))
        this.tambahTindakanService.tindakanOptions.subscribe(data => this.tindakanOptions = data)
    }

    handleDialog(data: boolean){
        this.dialog = data;
        if( data ){
            this.initForm();
            this.patchValueForm(this.registrasi);
        }else{

        }
    }

    handleJasaPelaksana(data: any){
        this.dialogJasaPelaksana = false;
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

    onSelectRegistrasi(data: any){
        this.registrasi = data;
        if( data ){
            this.initForm();
            this.getMasterData();
        }
    }

    patchValueForm(data: any){
        this.form.get('jnsPerawatan')?.patchValue(data.id_jns_perawatan)
        this.form.get('ruangan')?.patchValue(data.ruangan)
        this.form.get('dokter')?.patchValue(data.dpjp_pelaksana)
        this.form.get('noreg')?.patchValue(this.registrasi.noreg)
    }

    onSelectPemeriksaan(e: any, ac: AutoComplete){
        ac.clear();
        this.selectedTarif = e;
        this.selectedRuangan = 33;
        this.dialogJasaPelaksana = true;
        this.tarifService.getTarifJasa(e.id, this.registrasi.noreg, this.selectedRuangan);
    }

    focusOnAc(){
        setTimeout(() => {
            this.ac.focusInput();
        }, 0);
    }

    onHideDialogJasaPelaksana(){

    }

    save(){

    }

    initForm(){
        this.form = this.fb.group({
            tanggal: [new Date(), [Validators.required]],
            jnsPerawatan: [null, [Validators.required]],
            ruangan: [null, [Validators.required]],
            dokter: [null, [Validators.required]],
            unit: ['RAD', [Validators.required]],
            status: ['process', [Validators.required]],
            noreg: [null, [Validators.required]],
        })
    }

    getMasterData(){
        this.masterService.getJnsPerawatan();
        this.masterService.getRuangan(this.registrasi.id_jns_perawatan);
        this.masterService.getDokter();
    }

    openDialog(status: boolean){
        this.tambahTindakanService.openDialog(status);
        this.focusOnAc();
    }

}
