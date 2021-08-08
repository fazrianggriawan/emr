import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
import { AutoComplete } from 'primeng/autocomplete';
import { IcdService } from 'src/app/services/icd.service';
import { RadiologiService } from 'src/app/services/radiologi.service';
import { RegistrasiService } from 'src/app/services/registrasi.service';
import { TestOrderService } from 'src/app/services/test-order.service';

@Component({
  selector: 'app-radiologi',
  templateUrl: './radiologi.component.html',
  styleUrls: ['./radiologi.component.css']
})
export class RadiologiComponent implements OnInit {

  dataMasterRadiologi: any[] = [];
  dataMasterRadiologiDetail: any[] = [];
  selectedRad: any[] = [];
  dataKlinis: any;
  filteredMasterRad: any[] = [];
  dataPemeriksaan: any[] = [];
  selectedPemeriksaan: any[] = [];
  now : Date = new Date();
  icd10 : any[] = [];
  cito : any[] = [
    {id: 'nonCito', name: 'Non Cito'},
    {id: 'cito', name: 'CITO'},
  ];
  registrasi : any = this.registrasiService.getLocalStorageReg();

  form = this.fb.group({
    noreg: [this.registrasi.no_pendaftaran, Validators.required],
    tanggal: [new Date(), Validators.required],
    tipe: ['nonCito', Validators.required],
    diagnosa: [null, Validators.required],
    physician: [null, Validators.required],
    remarks: [null],
    data: [null, Validators.required],
    unit: ['rad', Validators.required],
  })

  save(){
    this.form.patchValue({data: this.dataPemeriksaan})
    this.testOrderService.save(this.form.value).subscribe(data=>{
      if( data.status ){
        alert(data.message);
      }
    })
  }

  getPemeriksaanDetail(e:any){
    this.radiologiService.getMasterDataDetail(e.value.id).subscribe(data=>{
      this.dataMasterRadiologiDetail = data;
    })
  }

  getMasterData(){
    this.radiologiService.getMasterData().subscribe(data=>{
      this.dataMasterRadiologi = data;
    })
  }

  search(event:any){
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered : any[] = [];
    let query = event.query;

    for(let i = 0; i < this.dataMasterRadiologiDetail.length; i++) {
        let data = this.dataMasterRadiologiDetail[i];
        if (data.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(data);
        }
    }
    this.filteredMasterRad = filtered;
  }

  selectPemeriksaan(e:any, ac: AutoComplete){
    console.log(e);

    if(this.dataPemeriksaan.indexOf(e) < 0){
      this.dataPemeriksaan.push(e)
      setTimeout(()=>{
        ac.inputEL.nativeElement.value = null;
      }, 100)
    };
  }

  getIcd10(){
    this.icdService.getIcd10().subscribe(data=>{
      this.icd10 = data;
    })
  }

  constructor(
    private radiologiService: RadiologiService,
    private icdService: IcdService,
    private testOrderService: TestOrderService,
    private fb: FormBuilder,
    private registrasiService: RegistrasiService
  ) { }

  ngOnInit(): void {
    this.getMasterData();
    this.getIcd10();
  }

}

@NgModule({
  imports: [EditorModule]
})
class RadiologiComponentModule {}
