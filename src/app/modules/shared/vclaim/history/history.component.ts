import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { DataPasienService } from 'src/app/modules/registrasi/components/data-pasien/data-pasien.service';
import { VclaimService } from '../vclaim.service';
import { FormPasienPulangService } from './form-pasien-pulang/form-pasien-pulang.service';
import { HistoryService } from './history.service';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.css'],
    providers: [ConfirmationService]
})
export class HistoryComponent implements OnInit {

    peserta: any;
    dataHistory: any = {history: []};
    filter: any = { from: new Date, to: new Date }
    today: Date = new Date;
    dialogFormPasienPulang: boolean = false;

    constructor(
        public vclaimService: VclaimService,
        private historyService: HistoryService,
        private confirmationService: ConfirmationService,
        public formPasienPulangService: FormPasienPulangService
    ) { }

    ngOnInit(): void {
        this.vclaimService.peserta.subscribe(data => this.handlePeserta(data))
        this.historyService.dataHistory.subscribe(data => this.dataHistory = data)
        this.historyService.actionStatus.subscribe(data => { if (data) this.getDataHistory() })
        this.vclaimService.saveStatus.subscribe(data => { if (data) this.getDataHistory() })
        this.formPasienPulangService.dialog.subscribe(data => this.dialogFormPasienPulang = data)
        this.formPasienPulangService.statusSave.subscribe(data => { if(data) this.getDataHistory() })

        let defaultFilterFrom = new Date().setDate(this.today.getDate() - 30);
        this.filter.from = new Date(defaultFilterFrom);

    }

    public handlePeserta(data: any) {
        if (data) {
            this.peserta = data.peserta;
            this.getDataHistory();
        }
    }

    public getDataHistory() {
        setTimeout(() => {
            this.historyService.getDataHistory(this.peserta.noKartu, this.filter.from, this.filter.to);
        }, 50);
    }

    public delete(noSep: string) {
        this.confirmationService.confirm({
            message: 'Anda yakin ingin menghapus data ini ?',
            accept: () => {
                this.historyService.deleteSep({ noSep: noSep });
            }
        });
    }

    public pasienPulang(sep: any){
        this.formPasienPulangService.openDialog();
        this.historyService.sep.next(sep);
    }

}
