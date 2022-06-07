import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { BillingService } from '../kasir/components/billing/billing.service';
import { MasterService } from '../registrasi/services/master.service';

@Component({
    selector: 'app-rawat-jalan',
    templateUrl: './rawat-jalan.component.html',
    styleUrls: ['./rawat-jalan.component.css']
})
export class RawatJalanComponent implements OnInit {

    results: any;
    form!: FormGroup;
    menuPrint!: MenuItem[];
    selectedCategoryTarif: string = '';

    tarif: any[] = [];
    categoryTarif: any[] = [];
    rs: any[] = [];

    dialogVclaim: boolean = false;

    selectedCatTarif: string = '';

    catTarif: any = [
        { name: 'All' },
        { name: 'Perawatan' },
        { name: 'Laboratorium' },
        { name: 'Radiologi' },
        { name: 'Farmasi' },
        { name: 'Operasi' },
        { name: 'Kamar Rawat' },
    ];

    constructor(
        private fb: FormBuilder,
        private masterService: MasterService,
        public billingService: BillingService
    ) { }

    ngOnInit(): void {
        this.initForm();
        this.masterService.rs.subscribe(data => this.rs = data)
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
