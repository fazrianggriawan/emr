import { Component, OnInit } from '@angular/core';
import { RegistrasiService } from 'src/app/services/registrasi.service';

@Component({
  selector: 'app-registrasi-list',
  templateUrl: './registrasi-list.component.html',
  styleUrls: ['./registrasi-list.component.css']
})
export class RegistrasiListComponent implements OnInit {

  constructor(
    private registrasiService: RegistrasiService
  ) { }

  tglRegistrasi: any = new Date;
  allRegistrasi: any;
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

  selectRegistrasi(data:any){
    this.registrasiService.setDataRegistrasi(data);
    // this.registrasi = {
    //   nama_pasien: data.nama_pasien,
    //   jns_kelamin: data.jns_kelamin,
    //   kunjungan_ke: data.kunjungan_ke,
    //   norm: data.no_rekam_medik,
    //   usia: data.usia,
    //   tgl_reg: data.tanggal_pendaftaran,
    //   cara_bayar: data.carabayar_nama,
    //   rs: data.rs
    // }
  }

  selectTanggal(){
    this.searchPasien = '';
    this.getDataRegistrasi(this.tglRegistrasi);
  }

  getDataRegistrasi(date: Date){
    // this.registrasiService.getDataRegistrasi(date).subscribe( data => {
    //   this.allRegistrasi = data;
    // })
  }

  ngOnInit(): void {
    this.getDataRegistrasi(this.tglRegistrasi);
  }

}
