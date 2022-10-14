import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    menuItems!: any[];

    constructor() { }

    ngOnInit(): void {
        this.menuItems = [
            {
                label: 'EMR', items: [
                    { label: 'Form Builder', routerLink: '/setting/form-emr' },
                    { label: 'Integrasi Form & SOAP', routerLink: '/setting/integrasi-form-soap' },
                ]
            },
            {
                label: 'Master Data', items: [
                    { label: 'General', routerLink: 'form-emr' },
                    { label: 'Farmasi', routerLink: 'form-emr' },
                    { label: 'Laboratorium', routerLink: 'form-emr' },
                    { label: 'Radiologi', routerLink: 'form-emr' },
                    { label: 'Rawat Inap', routerLink: 'form-emr' },
                    { label: 'Rawat Jalan', routerLink: 'form-emr' },
                ]
            },
            {
                label: 'Tarif', items: [
                    { label: 'Buku Tarif', routerLink: 'form-emr' },
                    { label: 'Setting Tarif', routerLink: 'form-emr' },
                ]
            }
        ];
    }

}
