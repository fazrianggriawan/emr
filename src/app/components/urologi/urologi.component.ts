import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
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
   stickyRightPanel: boolean = false;
   menu: MenuItem[] = [];
   calendar: Date | undefined;

   @ViewChild('StickyMenu') menuElement: ElementRef | undefined;

   @HostListener('window:scroll', ['$event'])
   handleScroll(){
      const windowScroll = window.pageYOffset;
      if(windowScroll >= this.menuElement?.nativeElement.offsetHeight){
         console.log(windowScroll + ' ' + this.menuElement?.nativeElement.offsetTop);
         this.stickyRightPanel = true;
      }else{
         this.stickyRightPanel = false;
      }
   }

   ngAfterViewInit(): void {
      //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
      //Add 'implements AfterViewInit' to the class.
      console.log(this.menuElement?.nativeElement.offsetHeight);
   }

   constructor() { }

   ngOnInit(): void {
      this.menu = [
         // {
         //    label: 'Menu',
         //    items: [
         //       { label: 'Pasien', icon: 'pi pi-user' },
         //       { label: 'Dokter', icon: 'pi pi-angle-right' },
         //       { label: 'Perawat', icon: 'pi pi-angle-right' },
         //    ]
         // },
         {
            label: 'Penunjang',
            items: [
               { label: 'E-Resep', icon: 'pi pi-angle-right' },
               { label: 'Order Radiologi', icon: 'pi pi-angle-right' },
               { label: 'Order Lab', icon: 'pi pi-angle-right' },
               { label: 'Order Operasi', icon: 'pi pi-angle-right' }
            ]
         },
         {
            label: 'Action',
            items: [
               { label: 'Masuk Rawat Inap', icon: 'pi pi-angle-right' },
               { label: 'Konsul ke Poli Lain', icon: 'pi pi-angle-right' },
               { label: 'Jadwal Kunjungan', icon: 'pi pi-angle-right' },
            ]
         },
         {
            label: 'Referensi',
            items: [
               { label: 'History Kunjungan', icon: 'pi pi-clock', command: () => {this.comparasion = true}  },
               { label: 'ICD-10 & ICD-9', icon: 'pi pi-table' },
            ]
         }
         ];
      }

   }
