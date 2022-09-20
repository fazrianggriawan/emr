import { Component, OnDestroy, OnInit } from '@angular/core';
import { VclaimService } from 'src/app/modules/shared/vclaim/vclaim.service';
import { AppService } from 'src/app/services/app.service';
import { RegistrasiService } from '../../services/registrasi.service';
import { DataPasienService } from '../data-pasien/data-pasien.service';
import { FormRegistrasiService } from '../form-registrasi/form-registrasi.service';

@Component({
    selector: 'app-data-registrasi',
    templateUrl: './data-registrasi.component.html',
    styleUrls: ['./data-registrasi.component.css']
})
export class DataRegistrasiComponent implements OnInit, OnDestroy {

    dataRegistrasi: any = [];
    dialogFormRegistrasi: boolean = false;
    dialogVclaim: boolean = false;

    subs: any = [];

    constructor(
        public formRegistrasiService: FormRegistrasiService,
        public vclaimService: VclaimService,
        public appService: AppService,
        private registrasiService: RegistrasiService
    ) { }

    ngOnInit(): void {
        this.registrasiService.getDataRegistrasi();
        this.subs['dataRegistrasi'] = this.registrasiService.dataRegistrasi.subscribe(data => this.handleDataRegistrasi(data))
        this.subs['dialog'] = this.formRegistrasiService.dialog.subscribe(data => this.dialogFormRegistrasi = data)
        this.subs['dialogVclaim'] = this.vclaimService.dialog.subscribe(data => this.dialogVclaim = data)
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.subs.forEach((item: any) => {
            item.unsubscribe();
        });
    }

    handleDataRegistrasi(data: any) {
        if (data) {
            this.dataRegistrasi = data;
        }
    }

    refresh(){
        this.dataRegistrasi = '';
        this.registrasiService.getDataRegistrasi();
    }

    registrasiBaru() {
        this.formRegistrasiService.jnsPelayanan.next('RJ')
        this.formRegistrasiService.dialog.next(true)
    }

    selectRegistrasi(data: any) {
        if (data) {
            this.registrasiService.registrasi.next(data);
            sessionStorage.setItem('noreg', data.noreg);
        }
    }

}
