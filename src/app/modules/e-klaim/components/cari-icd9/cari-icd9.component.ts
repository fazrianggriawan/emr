import { Component, OnInit } from '@angular/core';
import { AutoComplete } from 'primeng/autocomplete';
import { CariIcd9Service } from './cari-icd9.service';

@Component({
    selector: 'app-cari-icd9',
    templateUrl: './cari-icd9.component.html',
    styleUrls: ['./cari-icd9.component.css']
})
export class CariIcd9Component implements OnInit {

    optionsIcd: any[] = [];

    constructor(
        public cariIcd9Service: CariIcd9Service
    ) { }

    ngOnInit(): void {
        this.cariIcd9Service.icd9.subscribe(data => this.optionsIcd = data);
    }

    onSelect(e: any, ac: AutoComplete){
        this.cariIcd9Service.selectedIcd9.next(e);
        ac.clear();
    }

}
