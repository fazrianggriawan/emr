import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataPasienService } from './data-pasien.service';

@Component({
    selector: 'app-data-pasien',
    templateUrl: './data-pasien.component.html',
    styleUrls: ['./data-pasien.component.css']
})
export class DataPasienComponent implements OnInit {

    showDialog: boolean = true;
    dataPasien: any[] = [];
    selectedPasien: any;
    form!: FormGroup;

    constructor(
        private fb: FormBuilder,
        private dataPasienService: DataPasienService
    ) { }

    ngOnInit(): void {
        this.initForm();
        this.dataPasienService.dataPasien.subscribe(data => this.dataPasien = data)
        this.dataPasienService.dialog.subscribe(data => this.showDialog = data)
    }

    public initForm() {
        this.form = this.fb.group({
            norm: [''],
            nama: [''],
            tglLahir: [''],
            alamat: [''],
            tlp: [''],
            noAsuransi: ['']
        })
    }

    public sorting(e: KeyboardEvent) {
        if( e.code == 'Enter' ){
            var tglLahir = this.form.value.tglLahir;
            if( tglLahir ) {
                var lahir = tglLahir.substr(6, 4) + '-' + tglLahir.substr(3, 2) + '-' + tglLahir.substr(0, 2);
                this.form.get('tglLahir')?.patchValue(lahir);
            }

            this.dataPasienService.getDataPasien(this.form.value);

            this.form.get('tglLahir')?.patchValue(tglLahir);
        }
    }

    public onSelectPasien() {
        this.dataPasienService.pasien.next(this.selectedPasien);
        this.closeDialog()
    }

    public closeDialog() {
        this.dataPasienService.dataPasien.next([]);
        this.dataPasienService.dialog.next(false);
        this.form.reset();
    }

}
