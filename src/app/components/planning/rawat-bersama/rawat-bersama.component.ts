import { Component, OnInit } from '@angular/core';
import { AutoComplete } from 'primeng/autocomplete';
import { DokterService } from 'src/app/services/dokter.service';
import { IcdService } from 'src/app/services/icd.service';
import { PoliklinikService } from 'src/app/services/poliklinik.service';

@Component({
  selector: 'app-rawat-bersama',
  templateUrl: './rawat-bersama.component.html',
  styleUrls: ['./rawat-bersama.component.css']
})
export class RawatBersamaComponent implements OnInit {

  dataRawatBersama : any[] = [];
  now : Date = new Date();
  masterPoli : any[] = [];
  dataDokter: any[] = [];
  dataIcd10 : any[] = [];
  filteredIcd10 : any[] = [];
  dataTable: any[] = [];
  dialog1 : boolean = false;

  getMasterPoli(){
    this.poliService.getDataMaster().subscribe(data => {
      this.masterPoli = data.data;
    })
  }

  getIcd10(){
    this.IcdService.getIcd10().subscribe(data => {
      this.dataIcd10 = data;
    })
  }

  selectedPoliTujuan(e:any){
    this.getDokterByPoli(e.value.poliid);
  }

  getDokterByPoli(id_poli:any){
    this.dokterService.getDokterByPoli(id_poli).subscribe(data=>{
      this.dataDokter = data;
    })
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

  search(event:any){
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


  constructor(
    private poliService: PoliklinikService,
    private IcdService: IcdService,
    private dokterService: DokterService
  ) { }

  ngOnInit(): void {
    this.getMasterPoli();
    this.getIcd10();
  }

}
