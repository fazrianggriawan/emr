import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Table } from 'primeng/table';
import { DetailTarifService } from './detail-tarif/detail-tarif.service';
import { TarifService } from './tarif.service';

@Component({
    selector: 'app-tarif',
    templateUrl: './tarif.component.html',
    styleUrls: ['./tarif.component.css'],
    providers: [ConfirmationService]
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
        private detailTarifService: DetailTarifService,
        private confirmationService: ConfirmationService,
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

    deleteTarif(event: any, id: any){
        this.confirmationService.confirm({
            target: event.target,
            message: 'Yakin ingin menonaktifkan tarif ini?',
            icon: 'pi pi-exclamation-triangle',
            acceptLabel: 'Ya',
            rejectLabel: 'Tidak',
            accept: () => {
                //confirm action
                this.tarifService.deleteTarif({ id: id });
            }
        });
    }

    activateTarif(event: any, id: any){
        this.confirmationService.confirm({
            target: event.target,
            message: 'Yakin ingin mengaktifkan tarif ini?',
            icon: 'pi pi-exclamation-triangle',
            acceptLabel: 'Ya',
            rejectLabel: 'Tidak',
            accept: () => {
                //confirm action
                this.tarifService.activateTarif({ id: id });
            }
        });
    }

}
