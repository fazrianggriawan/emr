import { Component, OnInit, ViewChild } from '@angular/core';
import { RegistrasiService } from 'src/app/modules/registrasi/services/registrasi.service';

import { QuestionService } from './dynamic-form/question.service';
import { TarifService } from './tarif.service';
import { Observable, of, Subscription } from 'rxjs';
import { QuestionBase } from './dynamic-form/question-base';
import { DropdownQuestion } from './dynamic-form/question-dropdown';
import { OverlayPanel } from 'primeng/overlaypanel';
import { FormGroup } from '@angular/forms';
import { MasterService } from 'src/app/modules/registrasi/services/master.service';

@Component({
    selector: 'app-tarif',
    templateUrl: './tarif.component.html',
    styleUrls: ['./tarif.component.css'],
    providers: [QuestionService]
})
export class TarifComponent implements OnInit {

    questions$: Observable<QuestionBase<any>[]> | undefined;
    @ViewChild('op') op!: OverlayPanel;

    form!: FormGroup;

    tarif: any = [];
    categoryTarif: any = [];
    tarifJasa: any = [];
    dataRuangan: any = [];
    selectedTarif: any = '';
    selectedCatTarif: string = '';
    selectedCategoryTarif: string = '';
    selectedRuangan: string = '';
    registrasi: any;
    tanggal: any = new Date();
    loadingTarifJasa: boolean = false;

    subs: Subscription[] = [];

    constructor(
        public tarifService: TarifService,
        private registrasiService: RegistrasiService,
        private masterService: MasterService
    ) {}

    ngOnInit(): void {
        this.masterService.getRuangan();
        this.tarifService.getCategory();

        this.subs.push(this.registrasiService.registrasi.subscribe(data => this.handleRegistrasi(data)))
        this.tarifService.tarif.subscribe(data => this.tarif = data);
        this.tarifService.categoryTarif.subscribe(data => this.categoryTarif = data);
        this.tarifService.tarifJasa.subscribe(data => this.handleTarifJasa(data))
        this.tarifService.defaultPelaksana.subscribe(data => this.handleDefaultPelaksana(data))
        this.tarifService.loading.subscribe(data => this.loadingTarifJasa = data)
        this.masterService.ruangan.subscribe(data => this.dataRuangan = data)
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.subs.forEach(element => {
            element.unsubscribe();
        });
    }

    handleRegistrasi(data: any){
        if(data){
            this.registrasi = data;
            this.selectedRuangan = this.registrasi.ruangan;
        }else{
            this.registrasi = '';
        }

    }

    handleDefaultPelaksana(data: any) {
        if (data) {
            if (data.length == this.tarifJasa.length) {
                data.forEach((item: any) => {
                    if (item.id_pelaksana == 9999) {
                        if (item.id_group_jasa == 'dokter') {
                            console.log(item)
                            // this.registrasiService.getDpjp(this.registrasi);
                        }
                    }
                });
            } else {
                alert('Default Value harga tarif belum set');
            }
        }
    }

    handleTarifJasa(data: any) {

        if (data) {
            let questions: QuestionBase<string>[] = [];

            data.forEach((item: any) => {
                questions.push(new DropdownQuestion(item));
            });

            this.questions$ = of(questions.sort((a, b) => a.order - b.order))

        } else {
            this.clearTarifJasa();
        }
    }

    clearTarifJasa() {
        this.tarifJasa = [];
    }

    changeCategoryTarif(value: any) {
        this.clearTarifJasa();
        if (value) {
            this.tarifService.getTarifByCategory(value)
        }
    }

    selectTarif(tarif: any, e: any) {
        if (tarif) {
            this.op.toggle(e);
            this.selectedTarif = tarif;
            this.tarifService.getTarifJasa(tarif.id_tarif_harga, this.registrasi.noreg, this.selectedRuangan);
        }
    }

    onHidePanel(){
        this.handleTarifJasa([]);
    }

}
