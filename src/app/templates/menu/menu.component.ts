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
    }

    getModuleByUser(){
        let login : any = sessionStorage.getItem('login');
        if( login ){
            let data = JSON.parse(login);
            this.menuService.GetModule(data.username);
        }
    }

}
