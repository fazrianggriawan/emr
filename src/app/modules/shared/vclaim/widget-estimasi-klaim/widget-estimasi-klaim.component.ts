import { Component, OnInit } from '@angular/core';
import { BillingService } from 'src/app/modules/kasir/components/billing/billing.service';

@Component({
    selector: 'app-widget-estimasi-klaim',
    templateUrl: './widget-estimasi-klaim.component.html',
    styleUrls: ['./widget-estimasi-klaim.component.css']
})
export class WidgetEstimasiKlaimComponent implements OnInit {


    totalBilling = 0;

    constructor(
        private billingService: BillingService
    ) { }

    ngOnInit(): void {
        this.billingService.totalBilling.subscribe(data => this.totalBilling = data)
    }

}
