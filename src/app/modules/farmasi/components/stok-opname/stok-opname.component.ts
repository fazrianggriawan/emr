import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { DataStokService } from './data-stok/data-stok.service';
import { StokOpnameService } from './stok-opname.service';

@Component({
    selector: 'app-stok-opname',
    templateUrl: './stok-opname.component.html',
    styleUrls: ['./stok-opname.component.css']
})
export class StokOpnameComponent implements OnInit {

    dataPeriode: any[] = [];
    dialogDataStok: boolean = false;

    constructor(
        private stokOpnameService: StokOpnameService,
        public appService: AppService,
        private dataStokService: DataStokService
    ) { }

    ngOnInit(): void {
        this.stokOpnameService.getDataPeriode();
        this.stokOpnameService.dataPeriode.subscribe(data => this.dataPeriode = data);
        this.dataStokService.dialog.subscribe(data => this.dialogDataStok = data)
    }

    openDialogDataStok(item: any){
        this.stokOpnameService.periode.next(item);
        this.dataStokService.showDialog(true);
    }

}
