import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { RegistrasiService } from '../../services/registrasi.service';
import { DataPasienService } from '../data-pasien/data-pasien.service';
import { RiwayatKunjunganService } from './riwayat-kunjungan.service';

@Component({
    selector: 'app-riwayat-kunjungan',
    templateUrl: './riwayat-kunjungan.component.html',
    styleUrls: ['./riwayat-kunjungan.component.css']
})
export class RiwayatKunjunganComponent implements OnInit {

    pasien: any;
    dataRiwayatKunjungan: any;

    constructor(
        private riwayatKunjunganService: RiwayatKunjunganService,
        private registrasiService: RegistrasiService,
        public appService: AppService
    ) { }

    ngOnInit(): void {
        this.registrasiService.registrasi.subscribe(data => this.pasien = data.pasien)
        this.riwayatKunjunganService.dialog.subscribe(data => this.handleDialog(data))
        this.riwayatKunjunganService.dataRiwayatKunjungan.subscribe(data => this.dataRiwayatKunjungan = data )
    }

    handleDialog(status: boolean) {
        if (status) {
            this.riwayatKunjunganService.getRiwayatKunjungan(this.pasien.id, this.pasien.norm);
        }
    }

}
