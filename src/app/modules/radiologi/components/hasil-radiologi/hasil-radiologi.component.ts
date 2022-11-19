import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { config } from 'src/app/config';
import { DataBillingPenunjangService } from 'src/app/modules/billing/components/data-billing-penunjang/data-billing-penunjang.service';
import { MasterService } from 'src/app/modules/registrasi/services/master.service';
import { RegistrasiService } from 'src/app/modules/registrasi/services/registrasi.service';
import { AppService } from 'src/app/services/app.service';
import { RadiologiService } from '../radiologi/radiologi.service';
import { HasilRadiologiService } from './hasil-radiologi.service';

@Component({
    selector: 'app-hasil-radiologi',
    templateUrl: './hasil-radiologi.component.html',
    styleUrls: ['./hasil-radiologi.component.css']
})
export class HasilRadiologiComponent implements OnInit, OnDestroy {

    @Input() showButton: Boolean = true;

    dialog: boolean = false;
    tanggal = new Date();
    optionsDokter: any[] = [];
    registrasi: any;
    billingHead: any;

    form!: FormGroup;
    subs: Subscription[] = [];

    constructor(
        private dataBillingPenunjangService: DataBillingPenunjangService,
        public hasilRadiologiService: HasilRadiologiService,
        private masterService: MasterService,
        private fb: FormBuilder,
        private appService: AppService,
        private registrasiService: RegistrasiService
    ) { }

    ngOnInit(): void {
        this.initForm();
        this.subs.push(this.dataBillingPenunjangService.inputHasil.subscribe(data => this.handleInputHasil(data)))
        this.subs.push(this.masterService.dokter.subscribe(data => this.handleDataDokter(data)))
        this.registrasiService.registrasi.subscribe(data => this.registrasi = data)
        this.subs.push(this.dataBillingPenunjangService.billingHead.subscribe(data => this.handleBillingHead(data)))
        this.subs.push(this.hasilRadiologiService.dialog.subscribe(data => this.handleDialog(data)))
        this.subs.push(this.hasilRadiologiService.hasil.subscribe(data => this.handleHasil(data)))
        this.subs.push(this.dataBillingPenunjangService.printHasil.subscribe(data => this.handlePrintHasil(data)))
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.subs.forEach(element => {
            element.unsubscribe();
        });
    }

    handleBillingHead(data: any){
        this.billingHead = data;
        if( data ){
            this.hasilRadiologiService.getHasil(this.billingHead.id);
        }
    }

    handleHasil(data: any) {
        if (data) {
            this.form.get('id')?.patchValue(data.id);
            this.form.get('tanggal')?.patchValue(new Date(data.tanggal));
            this.form.get('dokter')?.patchValue(data.id_pelaksana_dokter);
            this.form.get('kesimpulan')?.patchValue(data.kesimpulan);
            this.form.get('noreg')?.patchValue(data.noreg);
            this.form.get('idBillingHead')?.patchValue(data.id_billing_head);
        }
    }

    handleDialog(data: any) {
        this.dialog = data;
        if (data) {
            this.initForm();
            this.masterService.getDokterByPoli('33');
            this.dataBillingPenunjangService.inputHasil.next(false);
        }
    }

    handleDataDokter(data: any) {
        this.optionsDokter = data;
        if (data) {
            if (data.length == 1) {
                this.form.get('dokter')?.patchValue(data[0].r_pelaksana.id);
            }
        }
    }

    initForm() {
        this.form = this.fb.group({
            id: [null],
            tanggal: [new Date(), [Validators.required]],
            dokter: [null, [Validators.required]],
            kesimpulan: [null, [Validators.required]],
            noreg: [null],
            idBillingHead: [null],
        })
    }

    handleInputHasil(data: boolean) {
        if (data) {
            this.hasilRadiologiService.openDialog(true);
        }
    }

    handlePrintHasil(data: any){
        if(data){
            if( data.unit == 'rad' ){
                let login = this.appService.getSessionStorage('login');
                this.appService.print(config.api_url('print/hasilRadiologi/'+data.noreg+'/'+data.idBillingHead+'/'+login.username))
            }
        }
    }

    save() {
        let data = this.form.getRawValue();
        data.tanggal = this.appService.reformatDate(data.tanggal);
        data.noreg = this.registrasi.noreg;
        data.idBillingHead = this.billingHead.id;

        this.hasilRadiologiService.saveHasil(data);

    }

}
