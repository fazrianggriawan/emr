import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-surat-masuk-perawatan',
  templateUrl: './surat-masuk-perawatan.component.html',
  styleUrls: ['./surat-masuk-perawatan.component.css']
})
export class SuratMasukPerawatanComponent implements OnInit {

  constructor(
    private formData: FormBuilder
  ) { }

  formMasukPerawatan = this.formData.group({
    keRuangan: [null],
    diagnosa: [null],
    namaPasien: [null],
    noRm: [null],
    jnsKelamin: [null],
    alamat: [null],
    dikirimOleh: [null],
  })

  ngOnInit(): void {
  }

}
