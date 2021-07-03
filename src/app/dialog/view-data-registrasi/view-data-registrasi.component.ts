import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DokterService } from 'src/app/services/dokter.service';
import { RegistrasiService } from 'src/app/services/registrasi.service';
import { MenuItem } from "primeng/api";

@Component({
  selector: 'app-view-data-registrasi',
  templateUrl: './view-data-registrasi.component.html',
  styleUrls: ['./view-data-registrasi.component.css']
})
export class ViewDataRegistrasiComponent implements OnInit {

  dpjp: any;
  dataDokter: any[] = [];
  registrasi: any;
  selectedHistory: string = '';
  menuHistory: any[] = [
    {name: '22 Jun 2021', code: 'NY'},
    {name: '18 Jun 2021', code: 'RM'},
    {name: '15 Jun 2021', code: 'LDN'},
    {name: '10 Mei 2021', code: 'IST'},
    {name: '4 Mei 2021', code: 'PRS'}
  ]

  simpan(){
    var data = {
      noreg: this.registrasi.no_pendaftaran,
      dpjp: this.dpjp
    }
    this.registrasiService.updateRegistrasiDPJP(data).subscribe(data => {
      console.log(data);
    });
  }

  mulaiPelayanan(){
    this.router.navigateByUrl('cppt');
  }

  getMasterDokter(){
    this.dokterService.getAllDokter().subscribe(data=>{
      this.dataDokter = data
    })
  }

  getDataRegistrasi(){
    this.registrasiService.getDataRegistrasi().subscribe(data=>{
      this.registrasi = data;
    })
  }

  constructor(
    private router: Router,
    private registrasiService: RegistrasiService,
    private dokterService: DokterService
  ) { }

  ngOnInit(): void {
    this.getMasterDokter();
    this.getDataRegistrasi();
  }

}
