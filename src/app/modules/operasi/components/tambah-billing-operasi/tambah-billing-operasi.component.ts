import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TambahBillingOperasiService } from './tambah-billing-operasi.service';

@Component({
    selector: 'app-tambah-billing-operasi',
    templateUrl: './tambah-billing-operasi.component.html',
    styleUrls: ['./tambah-billing-operasi.component.css']
})
export class TambahBillingOperasiComponent implements OnInit {

    dialog: boolean = false;
    form!: FormGroup;

    constructor(
        public tambahBillingOperasiService: TambahBillingOperasiService,
        private fb: FormBuilder
    ) { }

    ngOnInit(): void {
        this.initForm()
        this.tambahBillingOperasiService.dialog.subscribe(data => this.dialog = data)
    }

    initForm(){
        this.form = this.fb.group({
            tanggal: [new Date(), [Validators.required]],
            name: [null, [Validators.required]],
        })
    }

}
