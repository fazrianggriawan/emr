import { Component, OnInit } from '@angular/core';
import { DataPesertaService } from './data-peserta.service';

@Component({
    selector: 'app-data-peserta',
    templateUrl: './data-peserta.component.html',
    styleUrls: ['./data-peserta.component.css']
})
export class DataPesertaComponent implements OnInit {

    dataPeserta: any = [];

    constructor(
        private dataPesertaService: DataPesertaService
    ) { }

    ngOnInit(): void {
        this.dataPesertaService.dataPeserta.subscribe(data => this.dataPeserta = data)
        this.dataPesertaService.getDataPeserta();
    }

    public selectedPeserta(data: any) {
        this.dataPesertaService.peserta.next(data);
        this.dataPesertaService.closeDialog();
    }

}
