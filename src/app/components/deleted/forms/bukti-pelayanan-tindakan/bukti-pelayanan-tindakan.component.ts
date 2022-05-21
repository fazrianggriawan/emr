import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-bukti-pelayanan-tindakan',
  templateUrl: './bukti-pelayanan-tindakan.component.html',
  styleUrls: ['./bukti-pelayanan-tindakan.component.css']
})
export class BuktiPelayananTindakanComponent implements OnInit {

  constructor(
    private formData: FormBuilder,
  ) { }

  formBuktiPelayanan = this.formData.group({
    jnsPemeriksaan: [null],
    hasilPemeriksaan: [null]
  })

  ngOnInit(): void {
  }

}
