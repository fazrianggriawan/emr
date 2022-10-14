import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-farmasi',
    templateUrl: './farmasi.component.html',
    styleUrls: ['./farmasi.component.css']
})
export class FarmasiComponent implements OnInit {

    menuItems!: MenuItem[];

    constructor() { }

    ngOnInit(): void {
        this.menuItems = [
            { label: 'Home' },
            { label: 'Transaksi', routerLink: 'transaksi' }
        ]
    }

}
