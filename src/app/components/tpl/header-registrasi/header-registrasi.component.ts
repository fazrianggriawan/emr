import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload';
import { config } from 'src/app/config';
import { RegistrasiService } from 'src/app/services/registrasi.service';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-header-registrasi',
  templateUrl: './header-registrasi.component.html',
  styleUrls: ['./header-registrasi.component.css']
})

export class HeaderRegistrasiComponent implements OnInit {

  constructor(
    private registrasiService: RegistrasiService,
    private uploadService: UploadService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  registrasi: any = {
    nama_pasien: null,
    jns_kelamin: null,
    kunjungan_ke: null,
    no_rekam_medik: null,
    usia: null,
    tanggal_pendaftaran: null,
    carabayar_nama: null,
    rs: null,
  };

  uploadForm!: FormGroup;

  uploadUrl : string = config.api_url('upload');
  pasienImageUrl : string = '';
  @ViewChild('fileInput') fileInput!: FileUpload;

  onUpload(event:any){
    const formData = new FormData();
    this.uploadForm.get('profile')?.setValue(event.files[0]);
    formData.append('file', this.uploadForm.get('profile')?.value);
    this.uploadService.doUpload(formData).subscribe(data=>{
      this.pasienImageUrl = 'http://localhost/emr/api_emr/'+data.imageUrl;
      this.fileInput.clear();
    })
  }
  menus !: MenuItem[];
  mainMenus !: MenuItem[];
  activeMenu !: MenuItem;

  changeSubmenu(e:any){
    var key = e.item.label.toLowerCase();

    if( key == 'subjective' ){
      this.menus = [
        {label: 'Assessmen Umum', routerLink: '/subjective/assessment_umum'},
        {label: 'Catatan Terintegrasi'},
        {label: 'Kajian Rawat Inap'},
      ]
    }else if( key == 'objective' ){
      this.menus = [
        {label: 'Diagnosa'}
      ]
    }else if( key == 'assessment' ){
      this.menus = [
        {label: 'Tindakan'}
      ]
    }else if( key == 'planning' ){
      this.menus = [
        {label: 'Online Prescription', routerLink: '/online_prescription'},
        {label: 'Test Order'},
        {label: 'Costult to Specialist'},
        {label: 'Konsultasi/Rawat Bersama'},
        {label: 'Hasil Konsultasi/Rawat Bersama'},
      ]
    }
    var a : any = this.mainMenus.indexOf(e.item);
    localStorage.setItem('mainMenu', a);
  }

  setActiveSubmenu(e:any){
    var a : any = this.menus.indexOf(e.item);
    localStorage.setItem('submenu', a);
  }

  getActiveMainMenu(){
    var a : any = localStorage.getItem('mainMenu');
    this.activeMenu = this.mainMenus[a];
    this.changeSubmenu({item:this.activeMenu});
  }

  activeSubMenu !: MenuItem;

  getActiveSubMenu(){
    var a : any = localStorage.getItem('mainMenu');
    this.activeSubMenu = this.mainMenus[a];
    console.log(this.router.url)
  }

  ngOnInit(): void {
    this.registrasiService.getDataRegistrasi().subscribe(data=>{
      this.registrasi = data;
    })
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });

    this.mainMenus = [
      {label: 'Subjective', id: 'label', command: (event)=>{this.changeSubmenu(event)} },
      {label: 'Objective', id: 'label', command: (event)=>{this.changeSubmenu(event)} },
      {label: 'Assessment', id: 'label', command: (event)=>{this.changeSubmenu(event)} },
      {label: 'Planning', id: 'label', command: (event)=>{this.changeSubmenu(event)} },
    ]

    this.getActiveMainMenu();
    this.getActiveSubMenu();

  }

}
