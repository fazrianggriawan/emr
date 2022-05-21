import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { PasienService } from "./pasien.service";
import { SaveStatusService } from 'src/app/services/save-status.service';

@Component({
  selector: 'app-pasien',
  templateUrl: './pasien.component.html',
  styleUrls: ['./pasien.component.css']
})
export class PasienComponent implements OnInit {

  allRegistrasi: any;
  hallo: string = 'Fazri Anggriawan';
  items: any;
  term: string = '';
  searchPasien: string = '';
  registrasi: any = {
    nama_pasien: null,
    jns_kelamin: null,
    kunjungan_ke: null,
    norm: null,
    usia: null,
    tgl_reg: null,
    cara_bayar: null,
    rs: null,
  };

  save(){
    this.SaveStatusService.setSaveStatus(true);
    console.log('hallo');
  }

  selectRegistrasi(data:any){
    this.registrasi = {
      nama_pasien: data.nama_pasien,
      jns_kelamin: data.jns_kelamin,
      kunjungan_ke: data.kunjungan_ke,
      norm: data.no_rekam_medik,
      usia: data.usia,
      tgl_reg: data.tanggal_pendaftaran,
      cara_bayar: data.carabayar_nama,
      rs: data.rs
    }
  }

  constructor(
    private http: HttpClient,
    private pasienService: PasienService,
    private SaveStatusService: SaveStatusService,
    private greetviewcontainerref: ViewContainerRef
  ) { }

  dataRegistrasi: any[] = [];

  ngOnInit(): void {

  }

}
