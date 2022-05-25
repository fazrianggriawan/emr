import { Component, OnInit } from '@angular/core';
import { DataPasienService } from 'src/app/modules/registrasi/components/data-pasien/data-pasien.service';
import { VclaimService } from '../vclaim.service';
import { HistoryService } from './history.service';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

    peserta: any;
    dataHistory: any = [];
    filter: any = { from: new Date, to: new Date }
    today: Date = new Date;

    constructor(
        private vclaimService: VclaimService,
        private historyService: HistoryService
    ) { }

    ngOnInit(): void {
        this.vclaimService.peserta.subscribe(data => this.handlePeserta(data))
        this.historyService.dataHistory.subscribe(data => this.dataHistory = data)

        let defaultFilterFrom = new Date().setDate(this.today.getDate() - 30);
        this.filter.from = new Date(defaultFilterFrom);

    }

    public handlePeserta(data: any) {
        if(data){
            this.peserta = data.peserta;
            this.getDataHistory();
        }
    }

    public getDataHistory() {
        setTimeout(() => {
            this.historyService.getDataHistory(this.peserta.noKartu, this.filter.from, this.filter.to);
        }, 50);
    }

}
