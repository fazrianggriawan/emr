import { Component, OnInit } from '@angular/core';
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

  constructor(
    private labService: LaboratoriumService
  ) { }

  ngOnInit(): void {
    this.getMasterCito()
    this.getMasterLab()
  }

}
