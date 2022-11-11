import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    menuItems: MenuItem[] = [];
    dialogBarcode: boolean = false;

    constructor() { }

    ngOnInit(): void {
        this.menuItems = [
            { label: 'Edit Profile', icon: 'pi pi-pencil' },
            { label: 'Change Password', icon: 'pi pi-lock' },
            { label: 'Logout', icon: 'pi pi-sign-out' },
        ]
    }

}
