import { Component, OnInit } from '@angular/core';
import { IcdService } from 'src/app/services/icd.service';
import { LaboratoriumService } from 'src/app/services/laboratorium.service';

@Component({
  selector: 'app-laboratorium',
  templateUrl: './laboratorium.component.html',
  styleUrls: ['./laboratorium.component.css']
})
export class LaboratoriumComponent implements OnInit {

  dataMasterLabCito : any[] = [];
  dataMasterLab : any[] = [];
  selectedLab: any[] = [];
  cito : any[] = [
    {id: 'reg', name: 'Non Cito'},
    {id: 'cito', name: 'CITO'},
  ];
  selectedCito : any = 'reg';
  icd10: any[] = [];

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

  getMasterLab(){
    this.labService.getMasterLab().subscribe(data=>{
      let aa : any[] = [];
      for(let key in data) {
        var a = {'group':key,'items':[{'name':'','items':[]}]};
        for(let key2 in data[key]){
          a.items.push({name:key2, items:data[key][key2]})
        }
        aa.push(a);
      }
        this.dataMasterLab = aa;
    })
  }

  getIcd10(){
    this.icdService.getIcd10().subscribe(data=>{
      this.icd10 = data;
    })
  }

  constructor(
    private labService: LaboratoriumService,
    private icdService: IcdService
  ) { }

  ngOnInit(): void {
    this.getMasterCito()
    this.getMasterLab()
    this.getIcd10()
  }

}
