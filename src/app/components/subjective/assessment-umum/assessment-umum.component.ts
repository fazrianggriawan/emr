import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AssessmentUmumService } from 'src/app/services/assessment-umum.service';
import { IcdService } from 'src/app/services/icd.service';
import { RegistrasiService } from 'src/app/services/registrasi.service';
import { PasienService } from '../../pasien/pasien.service';

@Component({
  selector: 'app-assessment-umum',
  templateUrl: './assessment-umum.component.html',
  styleUrls: ['./assessment-umum.component.css']
})
export class AssessmentUmumComponent implements OnInit {

  tplKeluhan: any[] = [];
  icd10: any[] = [];
  icd9: any[] = [];
  registrasi : any = this.registrasiService.getLocalStorageReg();
  asalKunjungan = this.AssessmentUmumService.getDataAsalKunjungan();

  form = this.fb.group({
    noreg: [this.registrasi.no_pendaftaran],
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

  save(){
    let data = this.form.value;
    this.AssessmentUmumService.save(data).subscribe(data=>{
      console.log(data);
    })
  }

  getIcd10(){
    this.IcdService.getIcd10().subscribe(data => {
      this.icd10 = data;
    })
  }

  getIcd9(){
    this.IcdService.getIcd10().subscribe(data => {
      this.icd9 = data;
    })
  }

  getTplKeluhan(){
    this.pasienService.getTplKeluhan().subscribe(data => {
      this.tplKeluhan = data;
    })
  }

  getData(){
    this.AssessmentUmumService.getData(this.registrasi.no_pendaftaran).subscribe(data => {
      let row = data[0];
      this.form.patchValue({
        keluhanUtama: { id: row.keluhan_utama_id, name: row.keluhan_utama_name, active: 1 },
        keluhanUtamaSejak: row.keluhan_utama_sejak,
        keluhanTambahan: { id: row.keluhan_tambahan_id, name: row.keluhan_tambahan_name, active: 1 },
        keluhanTambahanSejak: row.keluhan_tambahan_sejak,
        bb: row.bb,
        tb: row.tb,
        td: row.tb,
        nadi: row.nadi,
        p: row.p,
        suhu: row.suhu,
        riwayatPenyakitSkrg: row.riwayat_penyakit_skrg,
        riwayatPenyakitDulu: row.riwayat_penyakit_dulu,
        anamnesaPerawat: row.anamnesa_perawat,
        diagnosaRujukan: row.diagnosa_rujukan,
        alergiObat: row.alergi_obat,
        alergiMakanan: row.alergi_makanan,
      })
      console.log(this.form.value);
    })
  }

  constructor(
    private fb: FormBuilder,
    private IcdService: IcdService,
    private AssessmentUmumService: AssessmentUmumService,
    private pasienService: PasienService,
    private registrasiService: RegistrasiService
  ) { }

  ngOnInit(): void {
    this.getIcd10();
    this.getIcd9();
    this.getTplKeluhan();
    this.getData();
  }

}
