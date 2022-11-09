import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { RegistrasiService } from 'src/app/modules/registrasi/services/registrasi.service';
import { AppService } from 'src/app/services/app.service';
import { QuestionBase } from '../../tarif/dynamic-form/question-base';
import { DropdownQuestion } from '../../tarif/dynamic-form/question-dropdown';
import { TarifService } from '../../tarif/tarif.service';
import { JasaPelaksanaService } from './jasa-pelaksana.service';

@Component({
    selector: 'app-jasa-pelaksana',
    templateUrl: './jasa-pelaksana.component.html',
    styleUrls: ['./jasa-pelaksana.component.css']
})
export class JasaPelaksanaComponent implements OnInit, OnDestroy {

    questions$: Observable<QuestionBase<any>[]> | undefined;

    dialog: boolean = false;
    subs: Subscription[] = [];
    registrasi: any;
    tanggal = new Date();
    tarif: any;

    constructor(
        public tarifService: TarifService,
        public jasaPelaksanaService: JasaPelaksanaService,
        private registrasiService: RegistrasiService,
        private appService: AppService
    ) { }

    ngOnInit(): void {
        this.registrasiService.registrasi.subscribe(data => this.registrasi = data)
        this.subs.push(this.jasaPelaksanaService.dialog.subscribe(data => this.dialog = data))
        this.subs.push(this.tarifService.tarif.subscribe(data => this.handleTarif(data)))
        this.subs.push(this.tarifService.tarifJasa.subscribe(data => this.handleTarifJasa(data)))
    }

    ngOnDestroy(): void {
        this.unsubs();
    }

    handleTarif(data: any){
        this.tarif = data;
        if(data){
            this.tarifService.getTarifJasa(data.id, this.registrasi.noreg, this.registrasi.ruangan)
        }
    }

    handleTarifJasa(data: any) {
        this.jasaPelaksanaService.openDialog(false);
        this.tarifService.autoSave.next(false);
        this.tarifService.focusSave.next(false);

        if (data) {
            this.jasaPelaksanaService.openDialog(true);

            let questions: QuestionBase<string>[] = [];

            let autoSave = true;

            data.forEach((item: any) => {
                questions.push(new DropdownQuestion(item));
                if( item.display ){
                    autoSave = false;
                }
            });

            this.questions$ = of(questions.sort((a, b) => a.order - b.order))

            this.tarifService.focusSave.next(true);
            this.tarifService.autoSave.next(autoSave);
        }
    }

    handleJasaPelaksana(data: any){
        this.jasaPelaksanaService.openDialog(false);
        if(data){
            let item = {
                tarif: this.tarif,
                jasaPelaksana: data
            }
            this.tarifService.jasaPelaksana.next('');
        }
    }

    unsubs(){
        this.subs.forEach(element => {
            element.unsubscribe();
        });
    }

}
