import { Component, OnInit } from '@angular/core';
import { TabletFarmasiService } from 'src/app/services/tablet-farmasi.service';

@Component({
  selector: 'app-panel-send-order',
  templateUrl: './panel-send-order.component.html',
  styleUrls: ['./panel-send-order.component.css']
})
export class PanelSendOrderComponent implements OnInit {

  panelSendOrder : boolean = false;
  dataResep : any[] = [];
  dataPasien : any = {};
  dataDokter : any = {nama: 'dr. Bebet Prasetyo Spb.U', poliklinik: 'Bedah Urologi', sip: '98012031231'};

  listenPanelAction(){
    this.tabletFarmasiService.panelSendOrder.subscribe(data=>{
      this.panelSendOrder = data;
    })
    this.tabletFarmasiService.dataResep.subscribe(data=>{
      this.dataResep = data;
    })
    this.tabletFarmasiService.dataPasien.subscribe(data=>{
      this.dataPasien = data;
    })
  }

  constructor(
    private tabletFarmasiService: TabletFarmasiService
  ) { }

  ngOnInit(): void {
    this.listenPanelAction();
  }

}
