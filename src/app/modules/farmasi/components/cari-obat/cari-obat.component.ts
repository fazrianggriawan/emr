import { Component, OnInit } from '@angular/core';
import { AutoComplete } from 'primeng/autocomplete';
import { FarmasiService } from '../farmasi/farmasi.service';
import { CariObatService } from './cari-obat.service';

@Component({
    selector: 'app-cari-obat',
    templateUrl: './cari-obat.component.html',
    styleUrls: ['./cari-obat.component.css']
})
export class CariObatComponent implements OnInit {

    dataObat: any[] = [];

    constructor(
        public farmasiService: FarmasiService,
        private cariObatService: CariObatService
    ) { }

    ngOnInit(): void {
        this.farmasiService.dataObat.subscribe(data => this.dataObat = data)
    }

    selectObat(obat: any, ac: AutoComplete){
        if( obat ){
            this.cariObatService.selectedObat.next(obat);
        }
        ac.clear();
    }

}
