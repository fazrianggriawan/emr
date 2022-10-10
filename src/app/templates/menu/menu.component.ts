import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    public menus : any = [];
    public selectedMenu: any;

    constructor(
        private menuService: MenuService
    ) { }

    ngOnInit(): void {

        this.getModuleByUser();

        this.menuService.dataMenu.subscribe(data => {
            this.menus = data;
        })
        // this.menus = [
        //     { label: 'Admisi & Pendaftaran', routerLink: 'registrasi' },
        //     { label: 'Rawat Jalan', routerLink: 'rawatJalan' },
        //     { label: 'Radiologi', routerLink: 'radiologi' },
        //     { label: 'Rawat Inap' },
        //     { label: 'Kasir', routerLink: 'kasir' },
        //     { label: 'VClaim BPJS', routerLink: 'vclaim' },
        //     { label: 'E-Klaim-CBG', routerLink: 'e-klaim' },
        //     { label: 'eMedical Record', routerLink: 'medicalRecord' },
        //     { label: 'Laporan', routerLink: 'laporan' },
        // ]
    }

    getModuleByUser(){
        let login : any = localStorage.getItem('login');
        let data = JSON.parse(login);

        this.menuService.GetModule(data.username);
    }

}
