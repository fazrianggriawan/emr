import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SubjectiveService } from './subjective.service';

@Component({
    selector: 'app-subjective',
    templateUrl: './subjective.component.html',
    styleUrls: ['./subjective.component.css']
})
export class SubjectiveComponent implements OnInit {

    tplKeluhan: any = [];
    asalKunjungan: any = [];

    form!: FormGroup;

    constructor(
        private fb: FormBuilder,
        private subjectiveService: SubjectiveService
    ) { }

    ngOnInit(): void {
        this.initForm();
        this.subjectiveService.keluhan.subscribe( data => this.tplKeluhan = data )
        this.subjectiveService.asalKunjungan.subscribe( data => this.asalKunjungan = data )
    }

    public initForm() {
        this.form = this.fb.group({
            asalKunjungan: [null],
            keluhanUtama: [null],
            keluhanUtamaSejak: [null],
            keluhanTambahan: [null],
            keluhanTambahanSejak: [null],
            bb: [null],
            tb: [null],
            td: [null],
            nadi: [null],
            p: [null],
            suhu: [null],
            riwayatPenyakitSkrg: [null],
            riwayatPenyakitDulu: [null],
            anamnesaPerawat: [null],
            diagnosaRujukan: [null],
            alergiObat: [null],
            alergiMakanan: [null],
        })

    }

    save() {

    }

    isPasienBaru() {
    }

}
