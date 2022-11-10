import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { RegistrasiService } from '../../services/registrasi.service';
import { DataPasienService } from '../data-pasien/data-pasien.service';
import { WidgetRegistrasiService } from './widget-registrasi.service';

@Component({
    selector: 'app-widget-registrasi',
    templateUrl: './widget-registrasi.component.html',
    styleUrls: ['./widget-registrasi.component.css']
})
export class WidgetRegistrasiComponent implements OnInit {

    @Input() showWidget : Boolean = true;

    registrasi: any;

    constructor(
        private registrasiService: RegistrasiService,
        private dataPasienService: DataPasienService,
        public appService: AppService,
        private widgetRegistrasiService: WidgetRegistrasiService
    ) { }

    ngOnInit(): void {
        this.widgetRegistrasiService.widget.subscribe(data => this.showWidget = data);
        this.registrasiService.registrasi.subscribe(data => this.handleRegistrasi(data))
        this.appService.logout.subscribe(data => { if(data){ this.handleLogout(data) } })

        if( sessionStorage.getItem('noreg') ){
            this.registrasiService.getRegistrasiByNoreg(sessionStorage.getItem('noreg'));
        }
    }

    handleLogout(data: boolean){
        if(data){
            this.registrasiService.registrasi.next('');
        }
    }

    handleRegistrasi(data: any){
        this.registrasi = data;
        if( data ){
            this.dataPasienService.pasien.next(this.registrasi.pasien);
        }
    }

}
