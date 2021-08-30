import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegistrasiService } from 'src/app/services/registrasi.service';

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
      {id: 1, name:'Membaik / Selesai Pengobatan'},
      {id: 2, name:'Kontrol Kembali'},
      {id: 3, name:'Rujuk ke Rumah Sakit'},
      {id: 4, name:'Masuk Rawat / IGD'},
    ]
  }

  dataRegistrasi: any[] = []
;
  getDataRencana(e:any){
      this.getDataRegistrasi(e);
  }

    getDataRegistrasi(date: Date) {
        this.registrasiService.getAllRegistrasi(date).subscribe(data => {
            if (data.status == 200) {
                this.dataRegistrasi = data.data;
            } else {
                this.dataRegistrasi = [];
            }
        })
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
    private fb: FormBuilder,
    private registrasiService: RegistrasiService
  ) { }

  ngOnInit(): void {
    this.getCaraKeluar();
    this.getKeadaanKeluar();
  }

}
