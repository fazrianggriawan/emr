import { Component, OnInit, Pipe, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { DataPesertaService } from './data-peserta.service';

@Component({
    selector: 'app-data-peserta',
    templateUrl: './data-peserta.component.html',
    styleUrls: ['./data-peserta.component.css']
})

export class DataPesertaComponent implements OnInit {

    dataPeserta: any = [];
    filterKey: string = '';

    @ViewChild('dt') dt!: Table;

    constructor(
        private dataPesertaService: DataPesertaService
    ) { }

    ngOnInit(): void {
        this.dataPesertaService.dataPeserta.subscribe(data => this.dataPeserta = data)
        this.dataPesertaService.getDataPeserta();
    }

    public loadCarsLazy(e: any){
        this.dataPesertaService.getDataPeserta();
    }

    public selectedPeserta(data: any) {
        this.dataPesertaService.peserta.next(data);
        this.dataPesertaService.closeDialog();
    }

    public filtering(e: KeyboardEvent) {
        if( e.code == 'Enter' ){
            this.dt!.filterGlobal(this.filterKey, 'startsWith');
        }
    }

}
