import { Component, OnInit } from '@angular/core';
import { TabletFarmasiService } from 'src/app/services/tablet-farmasi.service';

@Component({
  selector: 'app-panel-pasien',
  templateUrl: './panel-pasien.component.html',
  styleUrls: ['./panel-pasien.component.css']
})
export class PanelPasienComponent implements OnInit {

  panelPasien : boolean = false;
  number : string = '';
  noRekmed : string = '';
  dataPasien : any[] = [];

  listenPanelAction(){
    this.tabletFarmasiService.panelPasien.subscribe(data=>{
      this.panelPasien = data;
    })
  }

  keypadInput(num:any){
    this.number = this.number + num;
    if( this.number.length == 1 ){
      this.noRekmed = '';
    }
  }

  hapusNumber(){
    this.number = this.number.slice(0, -1)
  }

  findPasien(){
    let number = this.number;
    this.tabletFarmasiService.findPasien(this.number).subscribe(data=>{
      this.dataPasien = data;
      if( data.length == 0 ){
        this.noRekmed = number;
      }
    })
    this.number = '';
  }

  selectPasien(e:any){
    this.tabletFarmasiService.dataPasien.next(e);
    this.tabletFarmasiService.panelPasien.next(false);
  }

  constructor(
    private tabletFarmasiService: TabletFarmasiService
  ) { }

  ngOnInit(): void {
    this.listenPanelAction();
  }

}
