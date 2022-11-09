import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AutoComplete } from 'primeng/autocomplete';
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

    constructor(
        public tarifService: TarifService,
        private jasaPelaksanaService: JasaPelaksanaService
    ) { }

    ngOnInit(): void {
        this.tarifService.optionsTarif.subscribe(data => this.optionsTarif = data)
        this.tarifService.focusOnAc.subscribe(data => this.focusOnAc(data) )
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

}
