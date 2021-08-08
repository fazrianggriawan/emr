import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-disposisi-pasien',
  templateUrl: './disposisi-pasien.component.html',
  styleUrls: ['./disposisi-pasien.component.css']
})
export class DisposisiPasienComponent implements OnInit {

  caraKeluar: any[] = [];
  keadaanKeluar: any[] = [];

  getCaraKeluar(){
    this.caraKeluar = [
      {id: 1, name:'Diijinkan Pulang'},
      {id: 2, name:'Pulang Paksa'},
      {id: 3, name:'Pindah Rumah Sakit'},
      {id: 4, name:'Melarikan Diri'},
    ]
  }

  form = this.fb.group({
    tanggal: [null, Validators.required],
    jam: [null, Validators.required],
    caraKeluar: [null, Validators.required],
    keadaanKeluar: [null, Validators.required],
  })

  now: Date = new Date;

  getKeadaanKeluar(){
    this.keadaanKeluar = [
      {id: 2, name:'Membaik'},
      {id: 1, name:'Sembuh'},
      {id: 3, name:'Belum Sembuh'},
      {id: 4, name:'Meninggal < 48 Jam'},
      {id: 4, name:'Meninggal >= 48 Jam'},
    ]
    console.log(this.now)
  }

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getCaraKeluar();
    this.getKeadaanKeluar();
  }

}
