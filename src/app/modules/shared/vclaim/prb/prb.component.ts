import { Component, OnInit } from '@angular/core';
import { DataPasienService } from 'src/app/modules/registrasi/components/data-pasien/data-pasien.service';
import { VclaimService } from '../vclaim.service';
import { FormPrbService } from './form-prb/form-prb.service';
import { PrbService } from './prb.service';

@Component({
    selector: 'app-prb',
    templateUrl: './prb.component.html',
    styleUrls: ['./prb.component.css']
})
export class PrbComponent implements OnInit {

    today: Date = new Date;
    dialogFormPrb: boolean = false;
    filter: any = { from: new Date, to: new Date }
    peserta: any;
    dataPrb: any = [];


    constructor(
        private prbService: PrbService,
        public formPrbService: FormPrbService,
        private vclaimService: VclaimService
    ) { }

    ngOnInit(): void {
        this.formPrbService.dialog.subscribe(data => { this.dialogFormPrb = data })
        this.vclaimService.peserta.subscribe(data => this.handlePeserta(data))
        this.prbService.dataPrb.subscribe(data => this.dataPrb = data)

        let defaultFilterFrom = new Date().setDate(this.today.getDate() - 30);
        this.filter.from = new Date(defaultFilterFrom);

    }

    public handlePeserta(data: any) {
        if (data) {
            this.peserta = data.peserta;
            this.getDataPrb();
        }
    }

    public getDataPrb() {
        setTimeout(() => {
            this.prbService.getDataPrb(this.peserta.noKartu, this.filter.from, this.filter.to)
        }, 50);
    }

}
