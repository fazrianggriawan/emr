import { Component, ComponentFactoryResolver, NgModule, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { PasienService } from "../../pasien/pasien.service";
import { IcdService } from "../../../services/icd.service";
import { SaveStatusService } from "../../../services/save-status.service";
import { FormBuilder } from '@angular/forms';
import { CpptService } from "src/app/services/cppt.service";

@Component({
  selector: 'app-cppt-form',
  templateUrl: './cppt-form.component.html',
  styleUrls: ['./cppt-form.component.css']
})

export class CpptFormComponent implements OnInit {

  @ViewChild('lazyLoad', { read: ViewContainerRef })
  private vcref!: ViewContainerRef;

  tplKeluhan: any;
  icd10: any[] = [];
  icd9: any[] = [];
  dialogLab: boolean = false;
  dialogRad: boolean = false;
  dialogFarmasi: boolean = false;

  formSubjective = this.FormBuilder.group({
    keluhanUtama: [null],
    keluhanUtamaLainnya: [null],
    keluhanTambahan: [null],
    keluhanTambahanLainnya: [null],
    riwayat: [null]
  })

  formObjective = this.FormBuilder.group({
    bb: [null],
    tb: [null],
    td: [null],
    nadi: [null],
    p: [null],
    suhu: [null],
    hasilPenunjang: [null],
  })

  formAssessment = this.FormBuilder.group({
    diagUtama: [null],
    diagDiff: [null],
    diagSek: [null],
  })

  doSave(){
    // console.log(this.formSubjective.value)
    // console.log(this.formObjective.value)
    // console.log(this.formAssessment.value)
    this.cpptService.saveKeluhan(this.formSubjective.value).subscribe(data => {
      console.log(data);
    })
    this.cpptService.saveKeluhan(this.formObjective.value).subscribe(data => {
      console.log(data);
    })
    this.cpptService.saveKeluhan(this.formAssessment.value).subscribe(data => {
      console.log(data);
    })
  }

  save(){
    this.SaveStatusService.setSaveStatus(true);
    this.doSave();
  }

  async loadRencanBerobatComponent(){
    this.vcref.clear();
    const { RencanBerobatLanjutanFormComponent } = await import('../rencan-berobat-lanjutan-form/rencan-berobat-lanjutan-form.component');
    this.vcref.createComponent(
      this.cfr.resolveComponentFactory(RencanBerobatLanjutanFormComponent)
    );
  }

  clearLazyLoad(){
    this.vcref.clear();
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

  constructor(
    private pasienService: PasienService,
    private IcdService: IcdService,
    private SaveStatusService: SaveStatusService,
    private FormBuilder: FormBuilder,
    private cfr: ComponentFactoryResolver,
    private cpptService: CpptService
  ) {}

  ngOnInit(): void {
    this.getIcd10()
    this.getIcd9()
    this.pasienService.getTplKeluhan().subscribe(data => {
      this.tplKeluhan = data;
    })
  }

}
