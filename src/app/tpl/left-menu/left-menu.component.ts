import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css'],
  animations: [
    trigger('fadeInOut', [
       transition(':enter', [
          style({opacity:'0'}),
          animate('400ms ease-in-out', style({opacity:'1'}))
       ])
    ])
 ]
})
export class LeftMenuComponent implements OnInit {

  selectedHistory: string = '';
  more: string = '';
  menuHistory: any[] = [
    {id: 'NY', name: '22 Jun 2021'},
    {id: 'RM', name: '18 Jun 2021'},
    {id: 'LDN', name: '01 Jun 2021'},
    {id: 'more', name: 'More', icon: 'pi pi-bars'},
  ]

  selectTanggal(e:any){

  }

  constructor() { }

  ngOnInit(): void {
  }

}
