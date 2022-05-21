import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-laporan-pemantauan-tindakan-anest-lokal',
  templateUrl: './laporan-pemantauan-tindakan-anest-lokal.component.html',
  styleUrls: ['./laporan-pemantauan-tindakan-anest-lokal.component.css']
})
export class LaporanPemantauanTindakanAnestLokalComponent implements OnInit {

  constructor(
    private formData: FormBuilder
  ) { }

  formPemantauanTindakan = this.formData.group({
    profilaksi: [null],
    jnsAntibiotik: [null],
    waktuPemberian: [null],
    teknikJenis: [null],
    teknikLokasi: [null],
    teknikObat: [null],
    responHipersensitive: [null],
    responHipersensitiveKet: [null],
    kejadianToksikasi: [null],
    kejadianToksikasiKet: [null],
  })

  ngOnInit(): void {
  }

}
