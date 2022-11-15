import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-data-billing-operasi',
    templateUrl: './data-billing-operasi.component.html',
    styleUrls: ['./data-billing-operasi.component.css']
})
export class DataBillingOperasiComponent implements OnInit {

    dataBilling: any[] = [];

    constructor() { }

    ngOnInit(): void {
    }

}
