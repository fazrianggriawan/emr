import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { DetailTarifService } from './detail-tarif/detail-tarif.service';
import { TarifService } from './tarif.service';

@Component({
    selector: 'app-tarif',
    templateUrl: './tarif.component.html',
    styleUrls: ['./tarif.component.css']
})
export class TarifComponent implements OnInit {

    dataTarif: any[] = [];
    dataHarga: any[] = [];

    optionsGroupTarif: any[] = [];
    optionsCategoryTarif: any[] = [];
    optionsStatus: any[] = [];

    selectedGroup: string = '';

    constructor(
        private tarifService: TarifService,
        private detailTarifService: DetailTarifService
    ) { }

    ngOnInit(): void {
        this.tarifService.getDataTarif()
        this.tarifService.getGroupTarif()
        this.tarifService.dataTarif.subscribe(data => this.handleDataTarif(data))
        this.tarifService.dataHarga.subscribe(data => this.dataHarga = data)
        this.tarifService.dataGroupTarif.subscribe(data => this.optionsGroupTarif = data)
        this.optionsStatus = [{id: 1, name: 'Active'}, {id: 0, name: 'Non Active'}];
    }

    changeFilter(e: any){
        setTimeout(() => {
            this.selectedGroup = e.name;
        }, 0);

    }

    handleDataTarif(data: any[]){
        if( data ){
            let newData : any[] = [];
            data.forEach(element => {
                let a = element;
                element.r_tarif_harga.forEach((item: any) => {
                    a.r_tarif_harga = item;
                    item.r_tarif_harga_jasa.forEach((jasa: any) => {
                        a.r_tarif_harga_jasa = jasa;
                    });
                });
                newData.push(a);
            });
            this.dataTarif = newData;
        }
    }

    tambahTarif(){
        this.detailTarifService.detailTarif.next('');
        this.tarifService.getGroupJasa();
        this.detailTarifService.openDialog(true);
    }

    getTarifHarga(item: any){
        this.detailTarifService.getDetailTarif(item.id);
        this.detailTarifService.openDialog(true);
    }

    hitungTotalJasa(data: any[]){
        let total = 0;
        data.forEach(element => {
            total = parseInt(element.jasa) + total;
        });
        return total;
    }

}
