import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppService } from 'src/app/services/app.service';
import { LoginService } from 'src/app/templates/login/login.service';
import { DataPasienService } from '../registrasi/components/data-pasien/data-pasien.service';
import { MasterService } from '../registrasi/services/master.service';
import { RegistrasiService } from '../registrasi/services/registrasi.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-medical-record',
    templateUrl: './medical-record.component.html',
    styleUrls: ['./medical-record.component.css']
})
export class MedicalRecordComponent implements OnInit {

    subMenu: MenuItem[] = [];
    dataPasien: any;
    dataRegistrasi: any;
    currentRoute: string = '';
    selectedFilter: string = 'all';
    selectedJnsPerawatan: string = '';
    selectedTanggal: string = '';
    formFilter!: FormGroup;

    statusDilayani: any[] = [];
    jnsPerawatan: any[] = [];
    dataTanggal: any[] = [];
    dataRuangan: any[] = [];

    constructor(
        private dataPasienService: DataPasienService,
        private appService: AppService,
        private router: Router,
        private masterService: MasterService,
        private loginService: LoginService,
        private registrasiService: RegistrasiService,
        private fb: FormBuilder,
    ) { }

    ngOnInit(): void {
        this.initMenu();
        this.masterService.getJnsPerawatan();
        // this.dataPasienService.dataPasien.subscribe(data => this.dataPasien = data);
        // this.dataPasienService.getAllDataPasien();
        this.appService.currentRoute.subscribe(data => this.currentRoute = data)
        this.masterService.jnsPerawatan.subscribe(data => this.jnsPerawatan = data);
        this.masterService.ruangan.subscribe(data => this.dataRuangan = data)
        this.loginService.defaultRuangan.subscribe(data => this.handleDefaultRuangan(data))
        this.registrasiService.dataRegistrasi.subscribe(data => this.dataRegistrasi = data)
        this.initDefaultFilter()
    }

    initDefaultFilter() {
        this.formFilter = this.fb.group({
            dari: [new Date()],
            sampai: [new Date()],
            jnsPerawatan: ['rj'],
            ruangan: [''],
            norm: [''],
            statusDilayani: ['all'],
            dokter: ['']
        })

        this.getDataRuangan('rj');
        this.loginService.getDefaultRuanganByUsername(this.appService.loginData.value.username);
    }

    handleDefaultRuangan(data: any) {
        if (data) {
            this.formFilter.get('ruangan')?.patchValue(data.id_ruangan);
            this.formFilter.get('dokter')?.patchValue(data.id_pelaksana);
            this.goFilter();
        }
    }

    initMenu() {
        this.statusDilayani = [
            { id: 'all', name: 'Semua Pasien' },
            { id: '0', name: 'Belum Selesai / Dalam Perawatan' },
            { id: '1', name: 'Sudah Selesai / Pulang' },
        ]
    }

    getDataRuangan(value: any) {
        if (value) {
            this.masterService.getRuangan(value);
        }
    }

    selectPasien(data: any) {
        this.dataPasienService.pasien.next(data)
        this.router.navigateByUrl(this.currentRoute + '/cppt');
    }

    selectRegistrasi(data: any){
        this.registrasiService.registrasi.next(data);
    }

    goFilter() {
        let dataFilter = this.formFilter.value;
        dataFilter.from = this.appService.reformatDate(this.formFilter.value.dari);
        dataFilter.to = this.appService.reformatDate(this.formFilter.value.sampai);

        this.registrasiService.filterDataRegistrasi(dataFilter);
    }

}
