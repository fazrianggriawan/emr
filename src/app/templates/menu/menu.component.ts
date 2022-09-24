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
            { label: 'Admisi & Pendaftaran', routerLink: 'registrasi' },
            { label: 'Rawat Jalan', routerLink: 'rawatJalan' },
            { label: 'Rawat Inap' },
            { label: 'Kasir', routerLink: 'kasir' },
            { label: 'VClaim BPJS', routerLink: 'vclaim' },
            { label: 'Medical Record', routerLink: 'medicalRecord' },
        ]
    }

}
