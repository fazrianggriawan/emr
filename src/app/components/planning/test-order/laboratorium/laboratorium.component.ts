import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AutoComplete } from 'primeng/autocomplete';
import { IcdService } from 'src/app/services/icd.service';
import { LaboratoriumService } from 'src/app/services/laboratorium.service';
import { RegistrasiService } from 'src/app/services/registrasi.service';
import { TestOrderService } from 'src/app/services/test-order.service';

@Component({
  selector: 'app-laboratorium',
  templateUrl: './laboratorium.component.html',
  styleUrls: ['./laboratorium.component.css']
})
export class LaboratoriumComponent implements OnInit {

  dataMasterLabCito : any[] = [];
  dataMasterLab : any[] = [];
  selectedLab: any[] = [];
  selectedCito : any = 'reg';
  icd10: any[] = [];
  filteredMasterLab : any[] = [];
  dataPemeriksaan : any[] = [];
  selectedPemeriksaan : any[] = [];
  now : Date = new Date();
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
    selectedLab: [null, Validators.required],
    data: [null, Validators.required],
    unit: ['lab', Validators.required],
  })

  save(){
    this.form.patchValue({data: this.dataPemeriksaan})
    this.testOrderService.save(this.form.value).subscribe(data=>{
      if( data.status ){
        alert(data.message);
      }
    })
  }

  getMasterCito(){
    this.labService.getMasterLabCito().subscribe(data=>{
      let aa : any[] = [];
      for(let key in data) {
        var a = {'group':key,'items':[{'name':'','items':[]}]};
        for(let key2 in data[key]){
          a.items.push({name:key2, items:data[key][key2]})
        }
        aa.push(a);
      }
        this.dataMasterLabCito = aa;
    })
  }

  search(event:any){
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered : any[] = [];
    let query = event.query;

    for(let i = 0; i < this.dataMasterLab.length; i++) {
        let data = this.dataMasterLab[i];
        if (data.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(data);
        }
    }
    this.filteredMasterLab = filtered;
  }

  selectPemeriksaan(e:any, ac: AutoComplete){
    if(this.dataPemeriksaan.indexOf(e) < 0){
      this.dataPemeriksaan.push(e)
      setTimeout(()=>{
        ac.inputEL.nativeElement.value = null;
      }, 100)
    };
  }

  getMasterLab(){
    this.labService.getMasterLab().subscribe(data=>{
      // let aa : any[] = [];
      this.dataMasterLab = data;
      // console.log(data)
      // for(let key in data) {
      //   var a = {'group':key,'items':[{'name':'','items':[]}]};
      //   for(let key2 in data[key]){
      //     a.items.push({name:key2, items:data[key][key2]})
      //   }
      //   aa.push(a);
      // }
      //   this.dataMasterLab = aa;
    })
  }

  getIcd10(){
    this.icdService.getIcd10().subscribe(data=>{
      this.icd10 = data;
    })
  }

  constructor(
    private labService: LaboratoriumService,
    private icdService: IcdService,
    private fb: FormBuilder,
    private testOrderService: TestOrderService,
    private registrasiService: RegistrasiService
  ) { }

  ngOnInit(): void {
    this.getMasterCito()
    this.getMasterLab()
    this.getIcd10()
  }

}
