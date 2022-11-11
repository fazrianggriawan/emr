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
            { label: 'Pendaftaran', routerLink: 'registrasi' },
            { label: 'MCU', routerLink: 'rikkes' },
            { label: 'Kasir', routerLink: 'kasir' },
            { label: 'Admin Website' },
            { label: 'Setting' },
        ]
    }

}
