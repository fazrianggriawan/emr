import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppService } from 'src/app/services/app.service';
import { DataPasienService } from '../registrasi/components/data-pasien/data-pasien.service';

@Component({
    selector: 'app-medical-record',
    templateUrl: './medical-record.component.html',
    styleUrls: ['./medical-record.component.css']
})
export class MedicalRecordComponent implements OnInit {

    subMenu: MenuItem[] = [];
    dataPasien: any;
    currentRoute: string = '';

    constructor(
        private dataPasienService: DataPasienService,
        private appService: AppService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.appService.currentRoute.subscribe(data => this.currentRoute = data)
        this.subMenu = [
            { label: 'Subjective', routerLink: 'subjective' },
            { label: 'Pemeriksaan', routerLink: 'pemeriksaan' },
            { label: 'Diagnosa & Prosedur', routerLink: 'diagnosa_prosedur' },
            { label: 'E-Resep', routerLink: 'farmasi' },
            {
                label: 'Penunjang',
                items: [
                    { label: 'Laboratorium' },
                    { label: 'Radiologi' },
                ]
            },
            { label: 'Planning', routerLink: 'planning' },
            { label: 'Summary Review', routerLink: ''},
        ];

        this.dataPasienService.dataPasien.subscribe(data => this.dataPasien = data);
        this.dataPasienService.getAllDataPasien();

    }

    selectPasien(data: any){
        this.dataPasienService.pasien.next(data)
        this.router.navigateByUrl(this.currentRoute+'/cppt');
    }

}
