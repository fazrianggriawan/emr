import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-emr',
  templateUrl: './menu-emr.component.html',
  styleUrls: ['./menu-emr.component.css']
})
export class MenuEmrComponent implements OnInit {

  constructor() { }

  items: any;
  term: string = '';

  ngOnInit(): void {
    this.items = [{
      label: 'Menu',
      items: [
        {label: 'CPPT / SOAP', link: '/cppt'},
        {label: 'Pengkajian Awal Medis', link: '/pengkajian_awal_medis'},
        {label: 'Laporan Pembedahaan Dengan Anestesi Lokal', link: '/lap_bedah_anest_lokal'},
        {label: 'Surat Masuk Perawatan', link: '/surat_masuk_perawatan'},
        {label: 'Pengajuan Pembedahaan', link: '/pengajuan_pembedahaan'},
        // {label: 'Catatan Edukasi dan Informasi Terintegrasi Pasien / Keluarga'},
        // {label: 'Persetujuan Tindakan Medis'},
        // {label: 'DPJP dan PPJA'},
        // {label: 'Catatan Pemindahan Pasien Antar Ruangan'},
        // {label: 'Penandaaan Lokasi Operasi'},
        // {label: 'Daftar Tilik Catatan Keperawatan Perioperatif'},
      ]
    },{
      label: 'Penunjang',
      items: [
        {label: 'Laboratorium'},
        {label: 'Radiologi'},
        {label: 'Farmasi', link: '/e_resep'},
      ]
    }]
  }

}
