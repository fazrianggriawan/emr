import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-form-registrasi-farmasi',
    templateUrl: './form-registrasi-farmasi.component.html',
    styleUrls: ['./form-registrasi-farmasi.component.css']
})
export class FormRegistrasiFarmasiComponent implements OnInit {

    dialogTambahRegistrasi: boolean = false;
    form!: FormGroup;

    constructor(
        private fb: FormBuilder
    ) { }

    ngOnInit(): void {
        this.form = this.fb.group({
            tanggal: [new Date(), [Validators.required]],
            nama: [null, [Validators.required]],
            tlp: [null, [Validators.required]],
            id_pasien: [0, [Validators.required]],
            id_golpas: [15, [Validators.required]],
        })
    }

    save() {

    }

}
