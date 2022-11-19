import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { config } from 'src/app/config';
import { AppService } from 'src/app/services/app.service';
import { PesertaService } from '../../peserta/peserta.service';
import { FormRujukanService } from '../form-rujukan/form-rujukan.service';
import { DataRujukanService } from './data-rujukan.service';

@Component({
    selector: 'app-data-rujukan',
    templateUrl: './data-rujukan.component.html',
    styleUrls: ['./data-rujukan.component.css']
})
export class DataRujukanComponent implements OnInit, OnDestroy {

    dialogFormRujukanKeluar: boolean = false;
    dataRujukanFaskes: any = [];
    dataRujukanRs: any = [];
    dataRujukanKeluar: any = [];
    peserta: any;
    today = new Date();

    subs: Subscription[] = [];

    constructor(
        public dataRujukanService: DataRujukanService,
        public formRujukanService: FormRujukanService,
        private pesertaService: PesertaService,
        private appService: AppService,
    ) { }

    ngOnInit(): void {
        this.subs.push(this.pesertaService.peserta.subscribe(data => this.handlePeserta(data)))
        this.dataRujukanService.dataRujukanFaskes.subscribe(data => this.dataRujukanFaskes = data)
        this.dataRujukanService.dataRujukanRs.subscribe(data => this.dataRujukanRs = data)
        this.dataRujukanService.dataRujukanKeluar.subscribe(data => this.dataRujukanKeluar = data)
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.subs.forEach(element => {
            element.unsubscribe();
        });
    }

    handlePeserta(data: any) {
        if( data ) {
            this.peserta = data;
            this.getDataRujukan();
        }
    }

    getDataRujukan() {
        this.dataRujukanService.getDataRujukanFaskes( this.peserta.noKartu );
        this.dataRujukanService.getDataRujukanRs( this.peserta.noKartu );
        // this.dataRujukanService.getDataRujukanKeluar();
    }

    expiredDate(tanggal: string){
        let expired : any = this.dataRujukanService.getExpiredRujukan(tanggal);
        return expired;
    }

    dateHuman(tanggal: string){
        return this.appService.dateHuman(tanggal);
    }

    print(nomorRujukan: string){
        this.appService.print(config.api_vclaim('rujukan/print/'+nomorRujukan));
    }

}
