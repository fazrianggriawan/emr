import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/services/app.service';
import { PesertaService } from '../../peserta/peserta.service';
import { SuratKontrolService } from '../surat-kontrol/surat-kontrol.service';
import { DataSuratKontrolService } from './data-surat-kontrol.service';

@Component({
    selector: 'app-data-surat-kontrol',
    templateUrl: './data-surat-kontrol.component.html',
    styleUrls: ['./data-surat-kontrol.component.css']
})
export class DataSuratKontrolComponent implements OnInit {

    dataSuratKontrol: any[] = [];
    peserta: any;
    tanggal = new Date();

    subs: Subscription[] = [];

    constructor(
        public dataSuratKontrolService: DataSuratKontrolService,
        private suratKontrolService: SuratKontrolService,
        private pesertaService: PesertaService,
        public appService: AppService
    ) { }

    ngOnInit(): void {
        this.pesertaService.peserta.subscribe(data => this.peserta = data)
        this.subs.push(this.suratKontrolService.dialog.subscribe(data => this.handleDialog(data)))
        this.dataSuratKontrolService.dataSuratKontrol.subscribe(data => this.dataSuratKontrol = data)
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.unsubs();
    }

    handleDialog(data: boolean) {
        if (data) {
            this.getDataSuratKontrol();
        }else{
            this.unsubs();
        }
    }

    unsubs(){
        this.subs.forEach(element => {
            element.unsubscribe();
        });
    }

    getDataSuratKontrol(){
        setTimeout(() => {
            let tanggal : any = this.appService.reformatDate(this.tanggal);
            this.dataSuratKontrolService.getDataSuratKontrol(this.peserta.noKartu, tanggal, '1');
        }, 0);
    }

    delete(item: any) {

    }

}
