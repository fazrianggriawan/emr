import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    public menus : any = [];
    public selectedMenu: any;

    constructor() { }

    ngOnInit(): void {
        this.menus = [
            // { label: 'Rikkes', icon: 'bi bi-file-text', routerLink: 'rikkes' },
            { label: 'VClaim BPJS', icon: 'bi bi-file-text', routerLink: 'vclaim' },
            // { label: 'Admisi & Pendaftaran', icon: 'bi bi-file-earmark-person', routerLink: 'registrasi' },
            // { label: 'Medical Record', icon: 'bi bi-file-earmark-text', routerLink: 'medicalRecord' },
            // { label: 'Rawat Jalan', icon: 'bi bi-clipboard-pulse', routerLink: 'rawatJalan' },
            // { label: 'Rawat Inap', icon: 'bi bi-hospital' },
            // { label: 'Kasir', icon: 'bi bi-cash-coin' }
        ]
    }

}
