import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-menu-emr',
    templateUrl: './menu-emr.component.html',
    styleUrls: ['./menu-emr.component.css']
})
export class MenuEmrComponent implements OnInit {

    items: any;
    term: string = '';

    public subMenu : MenuItem[] = [];

    constructor() { }

    ngOnInit(): void {

        this.subMenu = [
            { label: 'Pasien', routerLink: 'medicalRecord', icon: 'bi bi-people-fill' },
            { label: 'CPPT', routerLink: 'medicalRecord/cppt' },
            { label: 'Radiologi', routerLink: 'medicalRecord/radiologi' },
            { label: 'Laboratorium', routerLink: 'medicalRecord/laboratorium' },
            { label: 'Diagnosa & Prosedur', routerLink: 'medicalRecord/diagnosa_prosedur' },
            { label: 'E-Resep', routerLink: 'medicalRecord/farmasi' },
            { label: 'Konsul', routerLink: 'medicalRecord/konsul' },
            { label: 'Summary Review', routerLink: 'medicalRecord/planning' },
            { label: 'Penanda Organ', routerLink: 'medicalRecord/konva' },
            { label: 'Resume Medis', routerLink: 'medicalRecord/resume_medis' },
        ];
    }

    public setActiveMenu(e: any){
        let childs = document.getElementsByClassName('nav-link');

        Array.prototype.forEach.call(childs, function(el){
            el.classList.remove('active');
        })

        e.target.classList.add('active');
    }

}
