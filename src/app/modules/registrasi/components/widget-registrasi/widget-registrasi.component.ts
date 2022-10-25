import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { RegistrasiService } from '../../services/registrasi.service';
import { DataPasienService } from '../data-pasien/data-pasien.service';

@Component({
    selector: 'app-widget-registrasi',
    templateUrl: './widget-registrasi.component.html',
    styleUrls: ['./widget-registrasi.component.css']
})
export class WidgetRegistrasiComponent implements OnInit {

    registrasi: any;

    constructor(
        private registrasiService: RegistrasiService,
        private dataPasienService: DataPasienService,
        public appService: AppService
    ) { }

    ngOnInit(): void {
        this.registrasiService.registrasi.subscribe(data => this.handleRegistrasi(data))

        if( sessionStorage.getItem('noreg') ){
            this.registrasiService.getRegistrasiByNoreg(sessionStorage.getItem('noreg'));
        }
    }

    handleRegistrasi(data: any){
        this.registrasi = data;
        if( data ){
            this.dataPasienService.pasien.next(this.registrasi.pasien);
        }
    }

}
