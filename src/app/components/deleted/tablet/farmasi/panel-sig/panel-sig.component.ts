import { Component, OnInit } from '@angular/core';
import { FarmasiService } from 'src/app/services/farmasi.service';
import { TabletFarmasiService } from 'src/app/services/tablet-farmasi.service';

@Component({
  selector: 'app-panel-sig',
  templateUrl: './panel-sig.component.html',
  styleUrls: ['./panel-sig.component.css']
})
export class PanelSigComponent implements OnInit {

  panelSig : boolean = false;
  sigData : any = {};
  dataDosis : any = this.farmasiService.getDataDosis();
  dataFrekuensi : any = this.farmasiService.getDataFrekuensi();
  dataArahan : any = this.farmasiService.getDataArahan();
  dataUnit : any = this.farmasiService.getDataUnit();
  dataRoute : any = this.farmasiService.getDataRoute();

  listenPanelAction(){
    this.tabletFarmasiService.panelSig.subscribe(data=>{
      this.panelSig = data;
    })
    this.tabletFarmasiService.sigData.subscribe(data=>{
      this.sigData = data;
    })
  }

  selesai(){
    this.tabletFarmasiService.sigData.next(this.sigData);
    if( this.tabletFarmasiService.editMode.value ){
      this.tabletFarmasiService.updateResep();
    }else{
      this.tabletFarmasiService.addResep();
    }
    this.tabletFarmasiService.closeAllPanel();
  }

  constructor(
    private tabletFarmasiService: TabletFarmasiService,
    private farmasiService: FarmasiService
  ) { }

  ngOnInit(): void {
    this.listenPanelAction();
  }

}
