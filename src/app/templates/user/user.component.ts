import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    menuItems: MenuItem[] = [];
    dialogBarcode: boolean = false;

    constructor(
        private router: Router
    ) { }

    ngOnInit(): void {
        this.menuItems = [
            { label: 'Edit Profile', icon: 'pi pi-pencil' },
            { label: 'Change Password', icon: 'pi pi-lock' },
            { label: 'Logout', icon: 'pi pi-sign-out' },
        ]
    }

    logout(){
        this.router.navigateByUrl('/login');
    }

}
