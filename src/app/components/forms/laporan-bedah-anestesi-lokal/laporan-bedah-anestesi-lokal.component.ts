import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DokterService } from 'src/app/services/dokter.service';

@Component({
  selector: 'app-laporan-bedah-anestesi-lokal',
  templateUrl: './laporan-bedah-anestesi-lokal.component.html',
  styleUrls: ['./laporan-bedah-anestesi-lokal.component.css']
})
export class LaporanBedahAnestesiLokalComponent implements OnInit {

  constructor(
    private formData: FormBuilder,
    private dokterService: DokterService
  ) { }

  formLapBedahAnestLokal = this.formData.group({
    tglBedah: [null],
    jamBedah: [null],
    ahliBedah: [null],
    asisten: [null],
    instrumentator: [null],
    macamBedah: [null],
    macamBedahGawat: [null],
    macamBedahBersih: [null],
    diagPraBedah: [null],
    tindakanBedah: [null],
    diagPascaBedah: [null],
    ahliBius: [null],
    caraBius: [null],
    posisiPasien: [null],
    mulaiJam: [null],
    selesaiJam: [null],
    lamaPembedahaan: [null],
    ok: [null],
    uraianBedah: [null],
    komplikasi: [null],
    implant: [null],
    diangkat: [null],
    kirimKePatalogi: [null],
    asalJaringan: [null],
  })

  allDokter: any;

  ngOnInit(): void {
    this.dokterService.getAllDokter().subscribe(data => {
      this.allDokter = data;
    })
  }

}
