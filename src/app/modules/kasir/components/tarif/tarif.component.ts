import { Component, OnInit } from '@angular/core';
import { TarifService } from './tarif.service';

@Component({
    selector: 'app-tarif',
    templateUrl: './tarif.component.html',
    styleUrls: ['./tarif.component.css']
})
export class TarifComponent implements OnInit {

    tarif: any[] = [];
    tarifJasa: any = {};
    categoryTarif: any[] = [];
    selectedCatTarif: string = '';
    selectedCategoryTarif: string = '';

    constructor(
        public tarifService: TarifService
    ) { }

    ngOnInit(): void {
        this.tarifService.tarif.subscribe(data => this.tarif = data);
        this.tarifService.categoryTarif.subscribe(data => this.categoryTarif = data);
        this.tarifService.tarifJasa.subscribe(data => this.handleTarifJasa(data))
        this.tarifService.defaultPelaksana.subscribe(data => console.log(data))
        this.tarifService.getCategory();
    }

    handleTarifJasa(data: any) {
        if (data) {
            let groupJasaId: any = [];
            data.forEach((item: any) => {
                groupJasaId.push(item.group_jasa_id)
            });
            this.tarifService.getDefaultPelaksana({ idRuangan: 1, idGroupJasa: groupJasaId })
        }
    }

    selectTarif(tarif: any) {
        this.tarifService.getTarifJasa(tarif.id_tarif_harga);
    }

}
