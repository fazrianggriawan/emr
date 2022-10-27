import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-billing',
    templateUrl: './billing.component.html',
    styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

    data: any[] = [];
    results: any[] = [];
    obat: any;

    constructor() { }

    ngOnInit(): void {
    }

    search(e: any){

    }

}
