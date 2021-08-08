import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AssessmentUmumService } from 'src/app/services/assessment-umum.service';
import { IcdService } from 'src/app/services/icd.service';
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

  form = this.fb.group({
    keluhanUtama: [null],
    keluhanUtamaSejak: [null],
    keluhanTambahan: [null],
    keluhanTambahanSejak: [null],
    riwayat: [null],
    bb: [null],
    tb: [null],
    td: [null],
    nadi: [null],
    p: [null],
    suhu: [null]
  })

  save(){
    let data = this.form.value;
    console.log(data);
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

  constructor(
    private fb: FormBuilder,
    private IcdService: IcdService,
    private AssessmentUmumService: AssessmentUmumService,
    private pasienService: PasienService
  ) { }

  ngOnInit(): void {
    this.getIcd10();
    this.getIcd9();
    this.getTplKeluhan();
  }

}
