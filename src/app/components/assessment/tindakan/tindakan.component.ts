import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AutoComplete } from 'primeng/autocomplete';
import { IcdService } from 'src/app/services/icd.service';
import { RegistrasiService } from 'src/app/services/registrasi.service';
import { TindakanService } from 'src/app/services/tindakan.service';

@Component({
  selector: 'app-tindakan',
  templateUrl: './tindakan.component.html',
  styleUrls: ['./tindakan.component.css']
})
export class TindakanComponent implements OnInit {

  dataTable : any[] = [];
  dataIcd9 : any[] = [];
  filteredIcd9 : any[] = [];
  now : Date = new Date();
  registrasi : any = this.registrasiService.getLocalStorageReg();

  dataTindakan : any[] = [
      { id: '1', name: 'Operasi' },
      { id: '2', name: 'ESWL' },
      { id: '3', name: 'Li SWT' },
      { id: '4', name: 'Urodinamik' },
      { id: '5', name: 'Businasi' },
  ]

    dataOperasi: any[] = [
        { id: '1', name: 'Open' },
        { id: '2', name: 'Endoskopi' },
        { id: '3', name: 'TUR Prostat' },
        { id: '4', name: 'Penl' },
    ]

    dataOperasiDetail: any[] = [
        { id: '1', name: 'Nefrektomi Kiri' },
        { id: '1', name: 'Nefrektomi Kanan' },
        { id: '3', name: '' }
    ]

    setNamaOperasi(){

    }


  form = this.fb.group({
    noreg: [this.registrasi.no_pendaftaran],
    tanggal: [null, Validators.required],
    icd9: [null],
    tindakan: [null],
    operasi: [null],
  })

  getIcd9(){
    this.IcdService.getIcd9().subscribe(data => {
      this.dataIcd9 = data;
    })
  }

  search(event:any){
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered : any[] = [];
    let query = event.query;

    for(let i = 0; i < this.dataIcd9.length; i++) {
        let data = this.dataIcd9[i];
        if (data.name.toLowerCase().indexOf(query.toLowerCase()) == 0 || data.id.toLowerCase().indexOf(query.toLowerCase()) == 1) {
            filtered.push(data);
        }
    }
    this.filteredIcd9 = filtered;
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
    };
    ac.inputEL.nativeElement.value = null;
  }

  save(){
    this.form.patchValue({icd: this.dataTable});
    this.tindakanService.save(this.form.value).subscribe(data=>{
      if(data.status){
        alert(data.message);
      }
    })
  }

  constructor(
    private IcdService: IcdService,
    private tindakanService: TindakanService,
    private fb: FormBuilder,
    private registrasiService: RegistrasiService
  ) { }

  ngOnInit(): void {
    this.getIcd9()
  }

}