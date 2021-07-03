import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'iniapps';
  items: MenuItem[] = [];
  menus: any[] = [];
  selectedMenu : any;

  constructor(
    private primeNgConfig: PrimeNGConfig,
    private router: Router
  ){}

  getRouter(){
    this.router.events.subscribe(a=>{
      // console.log(a);
    })
  }

  ngOnInit(){
    this.getRouter();
    this.primeNgConfig.ripple = true;
    this.items = [
      { label:'Edit Profile', icon:'pi pi-pencil'},
      { label:'Change Password', icon:'pi pi-lock'},
      { label:'Logout', icon:'pi pi-sign-out'},
    ]
    this.menus = [
      {name: 'DASHBOARD'},
      {name: 'UROLOGI'},
    ]
  }
}
