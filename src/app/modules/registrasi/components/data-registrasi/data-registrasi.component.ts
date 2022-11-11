import { Component, OnInit } from '@angular/core';
import { VclaimService } from 'src/app/modules/shared/vclaim/vclaim.service';
import { RegistrasiService } from '../../services/registrasi.service';
import { FormRegistrasiService } from '../form-registrasi/form-registrasi.service';

@Component({
    selector: 'app-data-registrasi',
    templateUrl: './data-registrasi.component.html',
    styleUrls: ['./data-registrasi.component.css']
})
export class DataRegistrasiComponent implements OnInit {

    dataRegistrasi: any = [];
    dialogFormRegistrasi: boolean = false;
    dialogVclaim: boolean = false;

    constructor(
        public formRegistrasiService: FormRegistrasiService,
        public vclaimService: VclaimService,
        private registrasiService: RegistrasiService
    ) { }

    ngOnInit(): void {
        this.registrasiService.getDataRegistrasi();
        this.registrasiService.dataRegistrasi.subscribe(data => this.dataRegistrasi = data)
        this.formRegistrasiService.dialog.subscribe(data => this.dialogFormRegistrasi = data)
        this.vclaimService.dialog.subscribe(data => this.dialogVclaim = data)
    }

    registrasiBaru() {
        this.formRegistrasiService.jnsPelayanan.next('rj')
        this.formRegistrasiService.dialog.next(true)
    }

}
