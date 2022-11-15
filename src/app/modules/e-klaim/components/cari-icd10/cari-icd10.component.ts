import { Component, OnInit } from '@angular/core';
import { AutoComplete } from 'primeng/autocomplete';
import { CariIcd10Service } from './cari-icd10.service';

@Component({
    selector: 'app-cari-icd10',
    templateUrl: './cari-icd10.component.html',
    styleUrls: ['./cari-icd10.component.css']
})
export class CariIcd10Component implements OnInit {

    optionsIcd: any[] = [];

    constructor(
        public cariIcd10Service: CariIcd10Service
    ) { }

    ngOnInit(): void {
        this.cariIcd10Service.icd10.subscribe(data => this.optionsIcd = data);
    }

    onSelect(e: any, ac: AutoComplete){
        this.cariIcd10Service.selectedIcd10.next(e);
        ac.clear();
    }

}
