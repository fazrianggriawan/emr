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
            { label: 'Pendaftaran', icon: 'bi bi-file-earmark-person', routerLink: 'registrasi' },
            { label: 'MCU', icon: 'bi bi-file-text', routerLink: 'rikkes' },
            { label: 'Kasir', icon: 'bi bi-cash-coin' },
            { label: 'Admin Website', icon: 'bi bi-globe' },
            { label: 'Setting', icon: 'bi bi-gear' },
        ]
    }

}
