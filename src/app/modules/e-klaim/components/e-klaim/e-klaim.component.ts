import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { config } from 'src/app/config';
import { RegistrasiService } from 'src/app/modules/registrasi/services/registrasi.service';
import { VclaimService } from 'src/app/modules/shared/vclaim/vclaim.service';
import { AppService } from 'src/app/services/app.service';
import { CariIcd10Service } from '../cari-icd10/cari-icd10.service';
import { CariIcd9Service } from '../cari-icd9/cari-icd9.service';
import { EKlaimService } from './e-klaim.service';

@Component({
    selector: 'app-e-klaim',
    templateUrl: './e-klaim.component.html',
    styleUrls: ['./e-klaim.component.css'],
    providers: [ConfirmationService]
})
export class EKlaimComponent implements OnInit, OnDestroy {

    registrasi: any;
    nomorSep: any;
    sep: any;
    klaim: any;
    subs: Subscription[] = [];
    form!: FormGroup;

    dataDiagnosa: any[] = [];
    dataProsedur: any[] = [];
    billing: any;

    totalBilling = 0;
    totalPaket = 0;

    constructor(
        public eklaimService: EKlaimService,
        private registrasiService: RegistrasiService,
        private fb: FormBuilder,
        private cariIcd10Service: CariIcd10Service,
        private cariIcd9Service: CariIcd9Service,
        private vclaimService: VclaimService,
        private appService: AppService,
        private confirmationService: ConfirmationService
    ) { }

    ngOnInit(): void {
        this.initSep();
        this.subs.push(this.registrasiService.registrasi.subscribe(data => this.handleRegistrasi(data)))
        this.subs.push(this.eklaimService.sep.subscribe(data => this.handleSepByNoreg(data)))
        this.subs.push(this.cariIcd10Service.selectedIcd10.subscribe(data => this.handleSelectedIcd10(data)))
        this.subs.push(this.cariIcd9Service.selectedIcd9.subscribe(data => this.handleSelectedIcd9(data)))
        this.subs.push(this.vclaimService.sep.subscribe(data => this.handleSep(data)))
        this.subs.push(this.eklaimService.billing.subscribe(data => this.handleBilling(data)))
        this.subs.push(this.eklaimService.klaim.subscribe(data => this.handleKlaim(data)))
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.subs.forEach(element => {
            element.unsubscribe;
        });
    }

    initSep() {
        this.sep = { peserta: {} };
    }

    handleKlaim(data: any) {
        this.klaim = data;
    }

    handleSep(data: any) {
        this.initSep();
        if (data) {
            this.sep = data;
        }
    }

    handleSepByNoreg(data: any) {
        this.nomorSep = '';
        if (data) {
            this.nomorSep = data.no_sep;
            this.vclaimService.getSep(data.no_sep);
            this.eklaimService.getBillingGroupEklaim(data.noreg);
        }
    }

    handleBilling(data: any) {
        this.billing = data;
        if (data) {
            this.hitungTotalBilling(data);
        }
    }

    handleSelectedIcd10(data: any) {
        if (data) {
            this.dataDiagnosa.push(data);
        }
    }

    handleSelectedIcd9(data: any) {
        if (data) {
            this.dataProsedur.push(data);
        }
    }

    handleRegistrasi(registrasi: any) {
        this.initForm();
        this.initSep();
        this.registrasi = registrasi;
        if (registrasi) {
            this.eklaimService.getSepByNoreg(registrasi.noreg);
        }
    }

    hitungTotalBilling(data: any) {
        let total: any = 0;
        Object.entries(data).forEach((entry: any) => {
            const [key, value] = entry;
            total = parseInt(total) + parseInt(value)
        });
        this.totalBilling = total;
    }

    initForm() {
        this.form = this.fb.group({
            tanggal: [new Date(), [Validators.required]],
            diagnosa: [null, [Validators.required]],
            prosedur: [null],
        })
    }

    newKlaim() {
        let data = {
            registrasi: this.registrasi,
            sep: this.sep
        }
        this.eklaimService.newKlaim(data);
    }

    simpanKlaim() {
        let data = {
            registrasi: this.registrasi,
            sep: this.sep,
            billing: this.billing,
            diagnosa: this.dataDiagnosa,
            prosedur: this.dataProsedur
        }
        this.eklaimService.save(data);
    }

    groupingStage1() {
        this.eklaimService.groupingStage1({ noSep: this.sep.noSep })
    }

    editUlang() {
        this.eklaimService.editUlang({ noSep: this.sep.noSep })
    }

    finalisasi(event: any) {
        this.confirmationService.confirm({
            target: event.target,
            message: 'Yakin ingin finalisasi klaim ini?',
            icon: 'pi pi-exclamation-triangle',
            acceptLabel: 'Ya',
            rejectLabel: 'Tidak',
            accept: () => {
                //confirm action
                this.eklaimService.finalisasi({ noSep: this.sep.noSep })
            }
        });
    }

    listenUpdateSep(e: any) {
        if (e.keyCode == 13) {
            let data = { noreg: this.registrasi.noreg, sep: e.target.value }
            this.eklaimService.updateSep(data);
        }
    }

    deleteDiagnosa(idx: number) {
        this.dataDiagnosa.splice(idx, 1);
    }

    deleteProcedure(idx: number) {
        this.dataProsedur.splice(idx, 1);
    }

    printKlaim() {
        this.appService.print(config.api_url('eklaim/print/' + this.sep.noSep));
    }

    printLampiran() {
        let login = this.appService.getSessionStorage('login');
        this.appService.print(config.api_url('print/lampiranKlaim/' + this.registrasi.noreg + '/' + login.username));
    }

}
