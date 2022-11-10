import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MasterService } from 'src/app/modules/registrasi/services/master.service';
import { RegistrasiService } from 'src/app/modules/registrasi/services/registrasi.service';
import { AppService } from 'src/app/services/app.service';
import { BillingService } from '../../billing/billing.service';
import { TarifService } from '../../tarif/tarif.service';
import { JasaPelaksanaService } from '../jasa-pelaksana/jasa-pelaksana.service';
import { TambahBillingService } from './tambah-billing.service';

@Component({
    selector: 'app-tambah-billing',
    templateUrl: './tambah-billing.component.html',
    styleUrls: ['./tambah-billing.component.css']
})
export class TambahBillingComponent implements OnInit, OnDestroy {

    @Input() unit: string = '';

    dialog: boolean = false;
    tarif: any;
    registrasi: any;
    jasaPelaksana: any;
    form!: FormGroup;
    dataBilling: any[] = [];
    sessionId: any;
    tanggal = new Date();
    subs: Subscription[] = [];

    optionsJnsPerawatan: any[] = [];
    optionsRuangan: any[] = [];
    optionsDokter: any[] = [];

    constructor(
        public tambahBillingService: TambahBillingService,
        private tarifService: TarifService,
        private registrasiService: RegistrasiService,
        private jasaPelaksanaService: JasaPelaksanaService,
        private fb: FormBuilder,
        private masterService: MasterService,
        private appService: AppService,
        private billingService: BillingService
    ) { }

    ngOnInit(): void {
        this.initForm();
        this.subs.push(this.registrasiService.registrasi.subscribe(data => this.handleRegistrasi(data)))
        this.subs.push(this.tambahBillingService.dialog.subscribe(data => this.handleDialog(data)))
        this.tarifService.tarif.subscribe(data => this.tarif = data)
        this.subs.push(this.jasaPelaksanaService.jasaPelaksana.subscribe(data => this.handleJasaPelaksana(data)))
        this.masterService.jnsPerawatan.subscribe(data => this.optionsJnsPerawatan = data);
        this.masterService.ruangan.subscribe(data => this.optionsRuangan = data)
        this.masterService.dokter.subscribe(data => this.optionsDokter = data);
        this.subs.push(this.billingService.dataBilling.subscribe(data => this.handleDataBilling(data)))
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.unsubs();
    }

    unsubs(){
        this.subs.forEach(element => {
            element.unsubscribe();
        });
    }

    handleDialog(status: boolean){
        this.dialog = status;
        if( status ){
            this.tarifService.tarif.next('');
            this.sessionId = Date.now();
            this.tarifService.focusOnAc.next(true);
            this.billingService.getBillingByHead(this.sessionId);
        }else{
            this.jasaPelaksanaService.openDialog(false);
        }
    }

    handleDataBilling(data: any){
        this.dataBilling = data;
        if(data){
            this.jasaPelaksanaService.openDialog(false);
            this.tarifService.focusOnAc.next(true);
        }
    }

    handleRegistrasi(data: any) {
        this.registrasi = data;
        if (data) {
            this.getMasterData();
            this.setDefaultValueForm(this.registrasi);
        }
    }

    handleJasaPelaksana(data: any) {
        if (data) {
            let billing = {
                tarif: this.tarif,
                jasaPelaksana: data,
                billingHead: this.form.getRawValue(),
                sessionId: this.sessionId
            }
            billing.billingHead.tanggal = this.appService.reformatDate(this.tanggal);
            this.tambahBillingService.saveBilling(billing);
        }
    }

    setDefaultValueForm(registrasi: any) {
        this.form.get('jnsPerawatan')?.patchValue(registrasi.id_jns_perawatan);
        this.form.get('dokter')?.patchValue(registrasi.dpjp_pelaksana);
        this.form.get('ruangan')?.patchValue(registrasi.ruangan);
        this.form.get('unit')?.patchValue(this.unit);
        this.form.get('noreg')?.patchValue(registrasi.noreg);

        if( this.unit == 'all' ){
            this.form.get('unit')?.patchValue(registrasi.id_jns_perawatan);
        }
    }

    getMasterData() {
        this.masterService.getJnsPerawatan();
        this.masterService.getRuangan(this.registrasi.id_jns_perawatan);
        this.masterService.getDokter();
    }

    initForm() {
        this.form = this.fb.group({
            tanggal: [null, [Validators.required]],
            noreg: [null, [Validators.required]],
            jnsPerawatan: [null, [Validators.required]],
            ruangan: [null, [Validators.required]],
            dokter: [null, [Validators.required]],
            unit: [null, [Validators.required]],
            status: ['process', [Validators.required]],
        })
    }

}
