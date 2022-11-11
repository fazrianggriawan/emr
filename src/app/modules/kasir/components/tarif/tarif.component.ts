import { Component, OnInit } from '@angular/core';
import { RegistrasiService } from 'src/app/modules/registrasi/services/registrasi.service';
import { AppService } from 'src/app/services/app.service';
import { BillingService } from '../billing/billing.service';
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
        private billingService: BillingService,
        private appService: AppService,
        private registrasiService: RegistrasiService
    ) { }

    ngOnInit(): void {
        this.tarifService.tarif.subscribe(data => this.tarif = data);
        this.tarifService.categoryTarif.subscribe(data => this.categoryTarif = data);
        this.tarifService.tarifJasa.subscribe(data => this.handleTarifJasa(data))
        this.tarifService.defaultPelaksana.subscribe(data => console.log(data))
        this.tarifService.getCategory();
        this.registrasiService.registrasi.subscribe(data => this.registrasi = data)
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
        if( tarif ){
            let data = tarif;
            data.tanggal = this.appService.reformatDate(new Date());
            data.rs = 1;
            data.ruangan = 34;
            data.noreg = this.registrasi.noreg;

            this.billingService.save(tarif);
        }
    }

}
