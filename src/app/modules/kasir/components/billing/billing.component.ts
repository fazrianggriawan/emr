import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-billing',
    templateUrl: './billing.component.html',
    styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

    catTarif: any;
    selectedCatTarif: string = '';

    constructor() { }

    ngOnInit(): void {
        this.catTarif = [
            { name: 'All' },
            { name: 'Perawatan' },
            { name: 'Laboratorium' },
            { name: 'Radiologi' },
            { name: 'Farmasi' },
            { name: 'Operasi' },
            { name: 'Kamar Rawat' },
        ];
    }

}
