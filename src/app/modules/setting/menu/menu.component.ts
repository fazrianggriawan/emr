import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    menuItems!: MenuItem[];

    constructor() { }

    ngOnInit(): void {
        this.menuItems = [
            { label: 'Dashboard' },
            {
                label: 'EMR', items: [
                    { label: 'Form EMR', routerLink: '/setting/form-emr' },
                ]
            }
        ];
    }

}
