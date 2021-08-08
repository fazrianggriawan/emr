import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AutoComplete } from 'primeng/autocomplete';
import { DiagnosaService } from 'src/app/services/diagnosa.service';
import { IcdService } from 'src/app/services/icd.service';
import { RegistrasiService } from 'src/app/services/registrasi.service';
import { Icd } from "./icd";

@Component({
  selector: 'app-diagnosa',
  templateUrl: './diagnosa.component.html',
  styleUrls: ['./diagnosa.component.css']
})
export class DiagnosaComponent implements OnInit {

  dataTable : any[] = [];
  dataIcd10 : Icd[] = [];
  selectedData: any[] = [];
  filteredIcd10 : any[] = [];
  now : Date = new Date();
  registrasi : any = this.registrasiService.getLocalStorageReg();

  form = this.fb.group({
    noreg: [this.registrasi.no_pendaftaran, Validators.required],
    tanggal: [null, Validators.required],
    icd: [null]
  })

  save(){
    this.form.patchValue({ icd: this.dataTable });
    this.diagnosaService.save(this.form.value).subscribe(data=>{
      if( data.status ){
        alert(data.message);
      }
    });
  }

  getIcd10(){
    this.IcdService.getIcd10().subscribe(data => {
      this.dataIcd10 = data;
    })
  }

  search(event:any){
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered : any[] = [];
    let query = event.query;

    for(let i = 0; i < this.dataIcd10.length; i++) {
        let data = this.dataIcd10[i];
        if (data.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(data);
        }
    }
    this.filteredIcd10 = filtered;
  }

  setAsPrimary(){
    let i = this.dataTable.indexOf(this.selectedData);
    this.dataTable[i] = this.dataTable[0];
    this.dataTable[0] = this.selectedData;
    this.selectedData = [];
  }

  showAutocomplete(ac:AutoComplete, e:any){
    ac.show();
    if( e.keyCode == 27 ){
      ac.hide();
    }
  }

  selected(e:any, ac: AutoComplete){
    if(this.dataTable.indexOf(e) < 0){
      this.dataTable.push(e)
    }
    ac.inputEL.nativeElement.value = null;
  }

  constructor(
    private diagnosaService: DiagnosaService,
    private IcdService: IcdService,
    private fb: FormBuilder,
    private registrasiService: RegistrasiService
  ) { }

  ngOnInit(): void {
    this.getIcd10()
  }

}
