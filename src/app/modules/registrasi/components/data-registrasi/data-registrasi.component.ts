import { Component, OnInit } from '@angular/core';
import { VclaimService } from 'src/app/modules/shared/vclaim/vclaim.service';
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
        public vclaimService: VclaimService
    ) { }

    ngOnInit(): void {
        this.dataRegistrasi = [
            { tanggal: '12-08-2022', nama: 'Fazri Anggriawan', norm: '808112', jnsPerawatan: 'RAWAT JALAN', ruanganPoli: 'POLIKLINIK ANAK', dokter: 'dr. Ahmad subagja, Sp.B', jnsTagihan: 'BPJS' },
            { tanggal: '12-08-2022', nama: 'Fazri Anggriawan', norm: '808112', jnsPerawatan: 'RAWAT JALAN', ruanganPoli: 'POLIKLINIK ANAK', dokter: 'dr. Ahmad subagja, Sp.B', jnsTagihan: 'BPJS' },
            { tanggal: '12-08-2022', nama: 'Fazri Anggriawan', norm: '808112', jnsPerawatan: 'RAWAT JALAN', ruanganPoli: 'POLIKLINIK ANAK', dokter: 'dr. Ahmad subagja, Sp.B', jnsTagihan: 'BPJS' },
            { tanggal: '12-08-2022', nama: 'Fazri Anggriawan', norm: '808112', jnsPerawatan: 'RAWAT JALAN', ruanganPoli: 'POLIKLINIK ANAK', dokter: 'dr. Ahmad subagja, Sp.B', jnsTagihan: 'BPJS' },
            { tanggal: '12-08-2022', nama: 'Fazri Anggriawan', norm: '808112', jnsPerawatan: 'RAWAT JALAN', ruanganPoli: 'POLIKLINIK ANAK', dokter: 'dr. Ahmad subagja, Sp.B', jnsTagihan: 'BPJS' },
        ]

        this.formRegistrasiService.dialog.subscribe(data => this.dialogFormRegistrasi = data)
        this.vclaimService.dialog.subscribe(data => this.dialogVclaim = data)
    }

    registrasiBaru() {
        this.formRegistrasiService.jnsPelayanan.next('RJ')
        this.formRegistrasiService.dialog.next(true)
    }

}
