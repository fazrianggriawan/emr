import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DokterService } from 'src/app/services/dokter.service';

@Component({
  selector: 'app-pengajuan-pembedahaan',
  templateUrl: './pengajuan-pembedahaan.component.html',
  styleUrls: ['./pengajuan-pembedahaan.component.css']
})
export class PengajuanPembedahaanComponent implements OnInit {

  constructor(
    private formData: FormBuilder,
    private dokterService: DokterService
  ) { }

  formDiagnosa = this.formData.group({
    diagnosa: [null],
    rencanaBedah: [null],
    ahliBedah: [null],
    tgl: [null],
    jam: [null],
    asistenBedah: [null],
    anestesi: [null],
    jnsKasus: [null],
    td: [null],
    nadi: [null],
    p: [null],
    suhu: [null],
    bb: [null],
    riwAlergi: [null],
    riwAlergiObat: [null],
    riwAlergiMakanan: [null],
    riwAlergiLain: [null],
    riwAlergiReaksi: [null],
    penyakitPenyerta: [null],
    penyakitPenyertaLain: [null],
    ekg: [null],
    thoraxPhoto: [null],
    tesFungsiParu: [null],
    hasilKonsulIka: [null],
    hasilKonsulKardio: [null],
    hb: [null],
    golDarah: [null],
    gulaDarah: [null],
    masaPendarahan: [null],
    masaPembekuan: [null],
    ureum: [null],
    creatinine: [null],
    labLain: [null],
    pengobatanSaatIni: [null],
    persetujuanDarah: [null],
    persetujuanDarahYa: [null],
    premedikasi: [null],
    rencanaAnest: [null],
    kamarOp: [null],
    dokterKonsulen: [null],
    dokterPengajuan: [null],
  })

  allDokter: any;

  ngOnInit(): void {
    this.dokterService.getAllDokter().subscribe(data => {
      this.allDokter = data;
    })
  }

}
