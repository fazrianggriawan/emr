import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { fadeIn } from 'src/app/animations';
import { BillingService } from 'src/app/components/dialog/billing/billing.service';
import { MasterService } from '../registrasi/services/master.service';

@Component({
    selector: 'app-rawat-jalan',
    templateUrl: './rawat-jalan.component.html',
    styleUrls: ['./rawat-jalan.component.css'],
    animations: [fadeIn]
})
export class RawatJalanComponent implements OnInit {

    results: any;
    form!: FormGroup;
    menuPrint!: MenuItem[];
    selectedCategoryTarif: string = '';

    tarif: any[] = [];
    categoryTarif: any[] = [];
    rs: any[] = [];

    constructor(
        private fb: FormBuilder,
        private masterService: MasterService,
        public billingService: BillingService
    ) { }

    ngOnInit(): void {
        this.initForm();
        this.masterService.rs.subscribe( data => this.rs = data )
        this.billingService.tarif.subscribe(data => this.tarif = data);
        this.billingService.categoryTarif.subscribe(data => this.categoryTarif = data);

        this.menuPrint = [
            { label: 'Registrasi' },
            { label: 'Kartu Pasien' },
            { label: 'SEP' },
        ]
    }

    public initForm() {
        this.form = this.fb.group({
            rs: ['', Validators.required],
            norm: ['', Validators.required],
            id_pasien: ['', Validators.required],
            noAsuransi: ['', Validators.required],
            nik: [''],
            nama: ['', Validators.required],
            tglLahir: ['', Validators.required],
            tanggal: ['', Validators.required],
            noSep: [''],
            poliklinik: ['', Validators.required],
            dokter: ['', Validators.required],
            jnsPembayaran: ['', Validators.required],
            catatan: [''],
            noreg: [''],
            status: [''],
        })
    }

}
