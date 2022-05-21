import { Component, OnInit } from '@angular/core';
import { AutoComplete } from 'primeng/autocomplete';
import { PatAnatomiService } from 'src/app/services/pat-anatomi.service';

@Component({
  selector: 'app-pat-anatomi',
  templateUrl: './pat-anatomi.component.html',
  styleUrls: ['./pat-anatomi.component.css']
})
export class PatAnatomiComponent implements OnInit {

  selectedPemeriksaan: any[] = [];
  dataPemeriksaan: any[] = [];
  dataMasterPat: any[] = [];
  filteredMasterPat: any[] = [];
  now : Date = new Date();

  search(event:any){
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered : any[] = [];
    let query = event.query;

    for(let i = 0; i < this.dataMasterPat.length; i++) {
        let data = this.dataMasterPat[i];
        if (data.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(data);
        }
    }
    this.filteredMasterPat = filtered;
  }

  selectPemeriksaan(e:any, ac: AutoComplete){
    if(this.dataPemeriksaan.indexOf(e) < 0){
      this.dataPemeriksaan.push(e)
      setTimeout(()=>{
        ac.inputEL.nativeElement.value = null;
      }, 100)
    }else{
      setTimeout(()=>{
        ac.inputEL.nativeElement.value = null;
      }, 100)
    };
  }

  getMasterPat(){
    this.patService.getMasterdData().subscribe(data => {
      this.dataMasterPat = data;
    })
  }

  constructor(
    private patService: PatAnatomiService
  ) { }

  ngOnInit(): void {
    this.getMasterPat();
  }

}
