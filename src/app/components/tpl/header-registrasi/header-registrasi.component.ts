import { Component, OnInit } from '@angular/core';
import { RegistrasiService } from 'src/app/services/registrasi.service';

@Component({
  selector: 'app-header-registrasi',
  templateUrl: './header-registrasi.component.html',
  styleUrls: ['./header-registrasi.component.css']
})

export class HeaderRegistrasiComponent implements OnInit {

  constructor(
    private registrasiService: RegistrasiService
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

  ngOnInit(): void {
    this.registrasiService.getDataRegistrasi().subscribe(data=>{
      this.registrasi = data;
    })
  }

}
