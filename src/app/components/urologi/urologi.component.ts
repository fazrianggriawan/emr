import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from "primeng/api";
import { DICOMViewerComponent } from "ng-dicomviewer";

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

   comparasion: boolean = false;
   panelTambahData: boolean = false;
   stickyRightPanel: boolean = false;
   menu: MenuItem[] = [];
   calendar: Date | undefined;

   @ViewChild(DICOMViewerComponent, { static: true })
   viewPort: DICOMViewerComponent = new DICOMViewerComponent;

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

   /**
   * Load selected DICOM images
   *
   * @param files list of selected dicom files
   */
    loadDICOMImages(files: FileList) {

      if (files && files.length > 0) {
      let imageList = [];
      const fileList:Array<File> = Array.from(files);
      fileList.sort((a,b) => {
         if ( a.name > b.name ) return 1;
         if ( b.name > a.name ) return -1;
         return 0;
      })
      //cornerstoneWADOImageLoader.wadouri.fileManager.purge();
      cornerstoneWADOImageLoader.wadouri.dataSetCacheManager.purge();

      // loop thru the File list and build a list of wadouri imageIds (dicomfile:)
      for (let i = 0; i < fileList.length; i++) {
         const dicomFile: File = fileList[i];
         const imageId = cornerstoneWADOImageLoader.wadouri.fileManager.add(dicomFile);
         imageList.push(imageId);
      }

      this.viewPort.resetAllTools();

      // now load all Images, using their wadouri
      this.viewPort.loadStudyImages(imageList);

      } else alert('Escolha imagens DICOM a exibir.');
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

         const elm = document.getElementById('imagens');

         elm?.addEventListener('change', (e : any) => this.loadDICOMImages(e.target.files));

         cornerstoneWADOImageLoader.external.cornerstone = cornerstone; // inicializa WADO Image loader
         // configura codecs e web workers
         cornerstoneWADOImageLoader.webWorkerManager.initialize({
            webWorkerPath: './assets/cornerstone/webworkers/cornerstoneWADOImageLoaderWebWorker.js',
            taskConfiguration: {
               'decodeTask': {
                  codecsPath: '../codecs/cornerstoneWADOImageLoaderCodecs.js'
               }
            }
      });

   }

}

