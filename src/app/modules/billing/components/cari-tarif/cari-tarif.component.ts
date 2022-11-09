import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AutoComplete } from 'primeng/autocomplete';
import { RegistrasiService } from 'src/app/modules/registrasi/services/registrasi.service';
import { TarifService } from '../../tarif/tarif.service';
import { JasaPelaksanaService } from '../jasa-pelaksana/jasa-pelaksana.service';

@Component({
    selector: 'app-cari-tarif',
    templateUrl: './cari-tarif.component.html',
    styleUrls: ['./cari-tarif.component.css']
})
export class CariTarifComponent implements OnInit {

    @Input() category!: any | 'all';

    @ViewChild('ac') ac!: AutoComplete;

    optionsTarif: any[] = [];

    registrasi: any;

    constructor(
        public tarifService: TarifService,
        private registrasiService: RegistrasiService
    ) { }

    ngOnInit(): void {
        this.registrasiService.registrasi.subscribe(data => this.handleRegistrasi(data))
        this.tarifService.optionsTarif.subscribe(data => this.optionsTarif = data)
        this.tarifService.focusOnAc.subscribe(data => this.focusOnAc(data) )
    }

    handleRegistrasi(data: any){
        this.registrasi = data;
    }

    focusOnAc(status: boolean){
        if(status){
            setTimeout(() => {
                this.ac.focusInput();
            }, 0);
        }
    }

    onSelectTarif(data: any, ac: AutoComplete){
        this.tarifService.tarif.next(data);
        ac.clear();
    }

    defaultTarif(){
        // 1 = PAKET RAWAT JALAN
        setTimeout(() => {
            this.tarifService.cariTarif('', this.category, 1);
            this.ac.show();
        }, 50);
    }

}
