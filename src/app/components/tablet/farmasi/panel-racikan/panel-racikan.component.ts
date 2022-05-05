import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { TabletFarmasiService } from 'src/app/services/tablet-farmasi.service';

@Component({
  selector: 'app-panel-racikan',
  templateUrl: './panel-racikan.component.html',
  styleUrls: ['./panel-racikan.component.css']
})
export class PanelRacikanComponent implements OnInit {

  @ViewChild('dtObat') dt!: Table;

  panelRacikan : boolean = false;

  listenPanelRacikan(){
    this.tabletFarmasiService.panelRacikan.subscribe(data=>{
      this.panelRacikan = data;
    })
  }

  masterObat : any[] = [];
  loading : boolean = false;

  openJumlah(item:any){

  }

  getDataMasterObat(){
    this.tabletFarmasiService.getMasterObat().subscribe(data=>{
      this.masterObat = data;
    })
  }

  doFilterObat(value:string){
    this.dt!.filterGlobal(value, 'startsWith');
  }

  applyFilterGlobal($event:any){
    const value = ($event.target as HTMLInputElement).value;
    const element = ($event.target as Element);

    if( $event.keyCode == 13 ){
      this.doFilterObat(value);
      element.setAttribute('readonly', 'readonly'); // Force keyboard to hide on input field.
      element.setAttribute('disabled', 'true'); // Force keyboard to hide on textarea field.
      setTimeout(function() {
          element.removeAttribute('readonly');
          element.removeAttribute('disabled');
      }, 100);
    }
    if( value.length == 0 ){
      this.doFilterObat('');
      // this.setToAll();
    }
  }

  constructor(
    private tabletFarmasiService: TabletFarmasiService
  ) {
    this.getDataMasterObat();
  }

  ngOnInit(): void {
    this.listenPanelRacikan();
  }

}
