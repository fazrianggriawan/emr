import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { PrimeNGConfig, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'iniapps';
  items: MenuItem[] = [];

  constructor( private primeNgConfig: PrimeNGConfig ){}

  ngOnInit(){
    this.primeNgConfig.ripple = true;
    this.items = [
      { label:'File', items: [{label:'New'}] }, { label: 'Edit' }
    ]
  }
}
