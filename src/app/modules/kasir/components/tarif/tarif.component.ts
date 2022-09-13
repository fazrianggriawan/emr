import { Component, OnInit } from '@angular/core';
import { RegistrasiService } from 'src/app/modules/registrasi/services/registrasi.service';
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
    registrasi: any;

    constructor(
        public tarifService: TarifService,
        private registrasiService: RegistrasiService
    ) { }

    ngOnInit(): void {
        this.tarifService.tarif.subscribe(data => this.tarif = data);
        this.tarifService.categoryTarif.subscribe(data => this.categoryTarif = data);
        this.tarifService.tarifJasa.subscribe(data => this.handleTarifJasa(data))
        this.tarifService.defaultPelaksana.subscribe(data => console.log(data))
        this.registrasiService.registrasi.subscribe(data => this.registrasi = data)
        this.tarifService.getCategory();
    }

    handleDefaultPelaksana(data: any) {
        if (data) {
            data.forEach((item: any) => {
                if (item.id_pelaksana == 9999) {

                }
            });
        }
    }

    handleTarifJasa(data: any) {
        if (data) {
            let groupJasaId: any = [];
            data.forEach((item: any) => {
                groupJasaId.push(item.group_jasa_id)
            });
            this.tarifService.getDefaultPelaksana({ idRuangan: this.registrasi.ruangan, idGroupJasa: groupJasaId })
        }
    }

    selectTarif(tarif: any) {
        if (tarif) {
            this.tarifService.getTarifJasa(tarif.id_tarif_harga);
        }
    }

}
