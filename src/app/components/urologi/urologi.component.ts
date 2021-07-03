import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { DICOMViewerComponent } from "ng-dicomviewer";
import { RegistrasiService } from 'src/app/services/registrasi.service';
import { Table } from 'primeng/table';
import { Router } from '@angular/router';
import { MenuItem } from "primeng/api";

declare const cornerstone: any;
declare const cornerstoneWADOImageLoader: any;

interface HTMLInputEvent extends Event {
   target: HTMLInputElement & EventTarget;
}


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

   dataRegistrasi: any[] = [];
   tglRegistrasi: Date = new Date;
   loading: boolean = true;
   filterPasien: any[] = [
      {value: '9210', label: 'Pasien Saya'},
   ];
   filter: any;
   dialogViewRegistrasi: boolean = false;
   menuHistory!: MenuItem[];

   activeItem!: MenuItem;

   changeTglRegistrasi(){
      this.getDataRegistrasi(this.tglRegistrasi)
   }

   filterBox: string = '';

   hallo(e:any,a:string){
      this.filterBox = 'gatot';
   }

   getDataRegistrasi(date: Date){
      this.loading = true;
      this.registrasiService.getAllRegistrasi(date).subscribe( data => {
         if( data.status == 200 ){
            this.dataRegistrasi = data.data;
         }else{
            this.dataRegistrasi = [];
         }

         this.loading = false;
      })
   }

   getIdPelaksana(){
      var ls:any = localStorage.getItem('login');
      var aa = JSON.parse(ls);
      this.filterPasien[0].value = aa.id_pelaksana;
   }

   @ViewChild('dtRegistrasi') dt: Table | undefined;

   applyFilterGlobal($event:any, stringVal:any) {
      this.dt!.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
    }

   selectRegistrasi(data:any){
      this.registrasiService.setDataRegistrasi(data);
      this.dialogViewRegistrasi = true;
   }

   // comparasion: boolean = false;
   // panelTambahData: boolean = false;
   // stickyRightPanel: boolean = false;
   // menu: MenuItem[] = [];
   // calendar: Date | undefined;
   // selectedValues = [];

   // @ViewChild(DICOMViewerComponent, { static: true })
   // viewPort: DICOMViewerComponent = new DICOMViewerComponent;

   // @ViewChild('StickyMenu') menuElement: ElementRef | undefined;

   // @HostListener('window:scroll', ['$event'])
   // handleScroll(){
   //    const windowScroll = window.pageYOffset;
   //    if(windowScroll >= this.menuElement?.nativeElement.offsetHeight){
   //       // console.log(windowScroll + ' ' + this.menuElement?.nativeElement.offsetTop);
   //       this.stickyRightPanel = true;
   //    }else{
   //       this.stickyRightPanel = false;
   //    }
   // }

   // /**
   // * Load selected DICOM images
   // *
   // * @param files list of selected dicom files
   // */
   //  loadDICOMImages(files: FileList) {

   //    if (files && files.length > 0) {
   //    let imageList = [];
   //    const fileList:Array<File> = Array.from(files);
   //    fileList.sort((a,b) => {
   //       if ( a.name > b.name ) return 1;
   //       if ( b.name > a.name ) return -1;
   //       return 0;
   //    })
   //    //cornerstoneWADOImageLoader.wadouri.fileManager.purge();
   //    cornerstoneWADOImageLoader.wadouri.dataSetCacheManager.purge();

   //    // loop thru the File list and build a list of wadouri imageIds (dicomfile:)
   //    for (let i = 0; i < fileList.length; i++) {
   //       const dicomFile: File = fileList[i];
   //       const imageId = cornerstoneWADOImageLoader.wadouri.fileManager.add(dicomFile);
   //       imageList.push(imageId);
   //    }

   //    this.viewPort.resetAllTools();

   //    // now load all Images, using their wadouri
   //    this.viewPort.loadStudyImages(imageList);

   //    } else alert('Escolha imagens DICOM a exibir.');
   // }

   // ngAfterViewInit(): void {
   //    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
   //    //Add 'implements AfterViewInit' to the class.
   //    console.log(this.menuElement?.nativeElement.offsetHeight);
   // }

   constructor(
      private registrasiService: RegistrasiService,
      private router: Router
      ) { }

      ngOnInit(): void {
         this.getDataRegistrasi(new Date);
         this.getIdPelaksana();

         this.menuHistory = [
            {label: '22 Jun 2021', icon: 'pi pi-fw pi-home'},
            {label: '18 Jun 2021', icon: 'pi pi-fw pi-calendar'},
            {label: '14 Jun 2021', icon: 'pi pi-fw pi-pencil'},
            {label: '8 Jun 2021', icon: 'pi pi-fw pi-file'},
            {label: '27 Mei 2021', icon: 'pi pi-fw pi-cog'}
        ];
        this.activeItem = this.menuHistory[0];

         // this.registrasiService.getAllRegistrasi().subscribe(data => {
         //    this.dataRegistrasi = data;
         // })

         // this.menu = [
         //    // {
         //    //    label: 'Menu',
         //    //    items: [
         //    //       { label: 'Pasien', icon: 'pi pi-user' },
         //    //       { label: 'Dokter', icon: 'pi pi-angle-right' },
         //    //       { label: 'Perawat', icon: 'pi pi-angle-right' },
         //    //    ]
         //    // },
         //    {
         //       label: 'Penunjang',
         //       items: [
         //          { label: 'E-Resep', icon: 'pi pi-angle-right' },
         //          { label: 'Order Radiologi', icon: 'pi pi-angle-right' },
         //          { label: 'Order Lab', icon: 'pi pi-angle-right' },
         //          { label: 'Order Operasi', icon: 'pi pi-angle-right' }
         //       ]
         //    },
         //    {
         //       label: 'Action',
         //       items: [
         //          { label: 'Masuk Rawat Inap', icon: 'pi pi-angle-right' },
         //          { label: 'Konsul ke Poli Lain', icon: 'pi pi-angle-right' },
         //          { label: 'Jadwal Kunjungan', icon: 'pi pi-angle-right' },
         //       ]
         //    },
         //    {
         //       label: 'Referensi',
         //       items: [
         //          { label: 'History Kunjungan', icon: 'pi pi-clock', command: () => {this.comparasion = true}  },
         //          { label: 'ICD-10 & ICD-9', icon: 'pi pi-table' },
         //       ]
         //    }
         //    ];

         //    const elm = document.getElementById('imagens');

         //    elm?.addEventListener('change', (e : any) => this.loadDICOMImages(e.target.files));

         //    cornerstoneWADOImageLoader.external.cornerstone = cornerstone; // inicializa WADO Image loader
         //    // configura codecs e web workers
         //    cornerstoneWADOImageLoader.webWorkerManager.initialize({
         //       webWorkerPath: './assets/cornerstone/webworkers/cornerstoneWADOImageLoaderWebWorker.js',
         //       taskConfiguration: {
         //          'decodeTask': {
         //             codecsPath: '../codecs/cornerstoneWADOImageLoaderCodecs.js'
         //          }
         //       }
         // });

      }

   }

