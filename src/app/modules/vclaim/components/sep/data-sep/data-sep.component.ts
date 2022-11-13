import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { config } from 'src/app/config';
import { AppService } from 'src/app/services/app.service';
import { PesertaService } from '../../peserta/peserta.service';
import { SepService } from '../sep/sep.service';
import { DataSepService } from './data-sep.service';

@Component({
    selector: 'app-data-sep',
    templateUrl: './data-sep.component.html',
    styleUrls: ['./data-sep.component.css'],
    providers: [ConfirmationService]
})
export class DataSepComponent implements OnInit {

    peserta: any;
    dataHistory: any = {history: []};
    filter: any = { from: new Date, to: new Date }
    today: Date = new Date;
    dialogFormPasienPulang: boolean = false;

    subs: Subscription[] = [];

    constructor(
        private pesertaService: PesertaService,
        private dataSepService: DataSepService,
        private confirmationService: ConfirmationService,
        public sepService: SepService,
        public appService: AppService
    ) { }

    ngOnInit(): void {
        this.pesertaService.peserta.subscribe(data => this.peserta = data)
        this.dataSepService.dataHistory.subscribe(data => this.dataHistory = data)
        let defaultFilterFrom = new Date().setDate(this.today.getDate() - 30);
        this.filter.from = new Date(defaultFilterFrom);

        this.subs.push(this.sepService.dialog.subscribe(data => this.handleDialog(data)))
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.unsubs();
    }

    unsubs(){
        this.subs.forEach(element => {
            element.unsubscribe();
        });
    }

    handleDialog(data: boolean){
        if( data ){
            this.getDataHistory();
        }else{
            this.unsubs();
        }
    }

    getDataHistory() {
        setTimeout(() => {
            let from = this.appService.reformatDate(this.filter.from);
            let to = this.appService.reformatDate(this.filter.to);

            this.dataSepService.getDataHistory(this.peserta.noKartu, from, to);
        }, 0);
    }

    delete(noSep: string) {
        this.confirmationService.confirm({
            message: 'Anda yakin ingin menghapus data ini ?',
            accept: () => {
                this.dataSepService.deleteSep({ noSep: noSep });
            }
        });
    }

    printSep(nomorSep: string){
        this.appService.print(config.api_vclaim('sep/print/' + nomorSep));
    }

    pasienPulang(sep: any){

    }

}
