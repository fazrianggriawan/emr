import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BillingService } from 'src/app/modules/billing/billing/billing.service';
import { DataBillingPenunjangService } from 'src/app/modules/billing/components/data-billing-penunjang/data-billing-penunjang.service';
import { RegistrasiService } from 'src/app/modules/registrasi/services/registrasi.service';
import { AppService } from 'src/app/services/app.service';
import { HasilLaboratoriumService } from '../hasil-laboratorium/hasil-laboratorium.service';

@Component({
    selector: 'app-laboratorium',
    templateUrl: './laboratorium.component.html',
    styleUrls: ['./laboratorium.component.css']
})
export class LaboratoriumComponent implements OnInit, OnDestroy {

    dialogHasilLab: boolean = false;
    dataPemeriksaan: any[] = [];
    dataBilling: any[] = [];
    registrasi: any;
    selectedBilling: any;

    subs: Subscription[] = [];

    constructor(
        public hasilLaboratoriumService: HasilLaboratoriumService,
        private billingService: BillingService,
        public appService: AppService,
        private registrasiService: RegistrasiService,
        private dataBillingPenunjangService: DataBillingPenunjangService
    ) { }

    ngOnInit(): void {
        this.hasilLaboratoriumService.dialog.subscribe(data => this.dialogHasilLab = data)
        this.billingService.dataBilling.subscribe(data => this.dataBilling = data)
        this.registrasiService.registrasi.subscribe(data => this.handleRegistrasi(data))
        this.billingService.dataBilling.subscribe(data => this.dataBilling = data)
    }

    ngOnDestroy(): void {
        this.subs.forEach(element => {
            element.unsubscribe();
        });

        this.dataBillingPenunjangService.inputHasil.next(false);
        this.dataBillingPenunjangService.printHasil.next('');

    }

    handleRegistrasi(data: any) {
        this.registrasi = data;
        // if (data) {
        //     this.billingService.getBillingDetailByUnit(this.registrasi.noreg, 'lab');
        // }
    }

    inputHasil(data: any){
        this.hasilLaboratoriumService.dialog.next(true);
        this.dataBillingPenunjangService.billingHead.next(data);
    }

}
