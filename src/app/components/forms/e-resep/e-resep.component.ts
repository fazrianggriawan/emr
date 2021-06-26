import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ObatService } from 'src/app/services/obat.service';
import { AutoComplete } from "primeng/autocomplete/autocomplete";
import { RegistrasiService } from 'src/app/services/registrasi.service';

@Component({
  selector: 'app-e-resep',
  templateUrl: './e-resep.component.html',
  styleUrls: ['./e-resep.component.css']
})
export class EResepComponent implements OnInit {

  constructor(
    private obatService: ObatService
  ) { }

  dataObat: any;
  filterDataObat: any;
  filterDataObatRacikan: any;
  masterObat: any[] = [];
  selectedObat: any;
  selectedObatRacikan: any;
  dataResepNonRacikan : any[] = [];
  satuanObat: any[] = [
    {id: 'tc', name: 'TAB/CAP'},
    {id: 'sdkm', name: 'SDK MKN'},
    {id: 'sdkt', name: 'SDK TEH'}
  ]
  signaSatuan: any = {id: 'tc', name: 'TAB/CAP'};
  dataHari : any[] = [];
  jumlahHari: number = 1;
  signa1: number = 1;
  signa2: number = 1;
  jumlahObat: number = 1;
  petunjuk: string = '';
  dataSigna2: any[] = [
    {id: 0.5, name: 0.5},
    {id: 1, name: 1},
    {id: 1.5, name: 1.5},
    {id: 2, name: 2},
    {id: 2.5, name: 2.5}
  ];
  dataObatNonRacikan : any[] = [];

  getDataHari(){
    for (let i = 1; i <= 30; i++) {
      var a = {id: i, name: i}
      this.dataHari.push(a);
    }
  }

  getDataSigna2(){
    for (let i = 3; i <= 100; i++) {
      var a = {id: i, name: i}
      this.dataSigna2.push(a);
    }
  }

  hitungTotalObat(){
    this.jumlahObat = (this.signa1 * this.signa2 * this.jumlahHari);
    this.petunjuk = this.signa1 + ' X SEHARI ' + this.signa2 + ' ' + this.signaSatuan.name;
  }

  tambahObatNonRacikan(aa: AutoComplete){
    var a = {
      obat: this.selectedObat,
      signa1: this.signa1,
      signa2: this.signa2,
      signaSatuan: this.signaSatuan,
      jumlahHari: this.jumlahHari,
      jumlahObat: this.jumlahObat,
      petunjuk: this.petunjuk
    }
    this.dataObatNonRacikan.push(a);
    setTimeout(()=>{
      this.selectedObat = null;
      aa.inputEL.nativeElement.value = null;
    }, 200)
  }

  hapusObat(i:number){
    this.dataObatNonRacikan.splice(i,1)
  }

  search(event:any){
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered : any[] = [];
    let query = event.query;

    for(let i = 0; i < this.masterObat.length; i++) {
        let obat = this.masterObat[i];
        if (obat.nama_obat.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(obat);
        }
    }
    this.filterDataObat = filtered;
  }

  ngOnInit(): void {
    this.obatService.getAllObat().subscribe(data => {
      this.masterObat = data;
    })

    this.getDataHari();
    this.getDataSigna2();

  }

}
