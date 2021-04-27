import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from "primeng/api";

@Component({
  selector: 'app-urologi',
  templateUrl: './urologi.component.html',
  styleUrls: ['./urologi.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity:'0'}),
        animate('200ms ease-in-out', style({opacity:'1'}))
      ])
    ]),
    trigger('fadeInOut2', [
      transition(':enter', [
        style({background:'rgba(39, 104, 245, 0.2)'}),
        animate('0.5s 300ms ease-in-out', style({background:'rgba(39, 104, 245, 0)'}))
      ])
    ])
  ]
})
export class UrologiComponent implements OnInit {

  comparasion: boolean = false;
  panelTambahData: boolean = false;
  menu: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
      this.menu = [
          { label: 'Menu', items: [
              { label: 'Pasien', icon: 'pi pi-angle-right' },
              { label: 'Dokter', icon: 'pi pi-angle-right' },
              { label: 'Perawat', icon: 'pi pi-angle-right' },
          ]},
          {
              label: 'Penunjang',
              items: [
                  { label: 'E-Resep', icon: 'pi pi-angle-right' },
                  { label: 'Order Radiologi', icon: 'pi pi-angle-right' },
                  { label: 'Order Lab', icon: 'pi pi-angle-right' },
                  { label: 'Order Operasi', icon: 'pi pi-angle-right' }
              ]
          },
          { label: 'Komparasi Kunjungan', icon: 'pi pi-angle-right', command: () => {this.comparasion = true} }
      ];
  }

}
