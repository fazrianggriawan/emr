import { Component, OnInit } from '@angular/core';
import { TransferBillingService } from './transfer-billing.service';

@Component({
    selector: 'app-transfer-billing',
    templateUrl: './transfer-billing.component.html',
    styleUrls: ['./transfer-billing.component.css']
})
export class TransferBillingComponent implements OnInit {

    dialog: boolean = false;

    constructor(
        public transferBillingService: TransferBillingService
    ) { }

    ngOnInit(): void {
        this.transferBillingService.dialog.subscribe(data => this.dialog = data);
    }

}
