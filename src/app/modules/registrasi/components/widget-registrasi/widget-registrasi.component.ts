import { Component, OnInit } from '@angular/core';
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
        private dataPasienService: DataPasienService
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
