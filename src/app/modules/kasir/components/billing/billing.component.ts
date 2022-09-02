import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-billing',
    templateUrl: './billing.component.html',
    styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

    jnsBayar: any;
    selectedJnsBayar: any;

    constructor() { }

    ngOnInit(): void {
        this.jnsBayar = [
            {id: 'CASH', name: 'TUNAI'},
            {id: 'DC', name: 'KARTU DEBIT'},
            {id: 'CC', name: 'KARTU KREDIT'},
            {id: 'TR', name: 'TRANSFER BANK'},
            {id: 'ASU', name: 'ASURANSI'}
        ]
    }

}
