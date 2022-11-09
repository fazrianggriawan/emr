import { Component, OnInit } from '@angular/core';
import { BillingService } from 'src/app/modules/billing/billing/billing.service';
import { RegistrasiService } from 'src/app/modules/registrasi/services/registrasi.service';
import { AppService } from 'src/app/services/app.service';
import { HasilLaboratoriumService } from '../hasil-laboratorium/hasil-laboratorium.service';

@Component({
    selector: 'app-laboratorium',
    templateUrl: './laboratorium.component.html',
    styleUrls: ['./laboratorium.component.css']
})
export class LaboratoriumComponent implements OnInit {

    dialogHasilLab: boolean = false;
    dataPemeriksaan: any[] = [];
    dataBilling: any[] = [];
    registrasi: any;
    selectedBilling: any;

    constructor(
        public hasilLaboratoriumService: HasilLaboratoriumService,
        private billingService: BillingService,
        public appService: AppService,
        private registrasiService: RegistrasiService
    ) { }

    ngOnInit(): void {
        this.hasilLaboratoriumService.dialog.subscribe(data => this.dialogHasilLab = data)
        this.billingService.dataBilling.subscribe(data => this.dataBilling = data)
        this.registrasiService.registrasi.subscribe(data => this.handleRegistrasi(data))
        this.billingService.dataBilling.subscribe(data => this.dataBilling = data)
    }

    handleRegistrasi(data: any) {
        this.registrasi = data;
        if (data) {
            this.billingService.getBillingDetailByUnit(this.registrasi.noreg, 'lab');
        }
    }

    inputHasil(data: any){
        this.hasilLaboratoriumService.dialog.next(true);
        this.hasilLaboratoriumService.selectedBilling.next(data);
    }

}
