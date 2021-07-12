import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ObatService } from 'src/app/services/obat.service';
import { AutoComplete } from "primeng/autocomplete/autocomplete";
import { OverlayPanel } from "primeng/overlaypanel";
import { RegistrasiService } from 'src/app/services/registrasi.service';
import {TreeNode} from 'primeng/api';
import { FarmasiService } from 'src/app/services/farmasi.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-farmasi',
  templateUrl: './farmasi.component.html',
  styleUrls: ['./farmasi.component.css'],
  animations: [
    trigger('fadeInOut', [
       transition(':enter', [
          style({opacity:'0'}),
          animate('400ms ease-in-out', style({opacity:'1'}))
       ])
    ])
  ]
})
export class FarmasiComponent implements OnInit {

  constructor(
    private obatService: ObatService,
    private farmasiService: FarmasiService,
    private FormBuilder: FormBuilder,
    private registrasiservice: RegistrasiService
  ) { }

  dialogSig: boolean = false;
  dataObat: any;
  filterDataObat: any;
  filterDataObatRacikan: any;
  masterObat: any[] = [];
  selectedObat: any;
  selectedObatRacikan: any;
  dataResepNonRacikan : any[] = [];
  satuanObat: any[] = [
    {id: 'tc', name: 'tab'},
    {id: 'sdkm', name: 'C'},
    {id: 'sdkt', name: 'Cth'}
  ]
  signaSatuan: any = {id: 'tc', name: 'tab'};
  dataHari : any[] = [];
  jumlahHari: number = 1;
  signa1: number = 1;
  signa2: number = 1;
  signa3: number = 1;
  jumlahObat: number = 1;
  petunjuk: string = '';
  dataSigna2: any[] = [
    {id: 0.5, name: 0.5},
    {id: 1, name: 1},
    {id: 1.5, name: 1.5},
    {id: 2, name: 2},
    {id: 2.5, name: 2.5}
  ];
  dataSigna1: any[] = [
    {id: '1 dd', name: '1 dd'},
    {id: '2 dd', name: '2 dd'},
    {id: '3 dd', name: '3 dd'},
    {id: '4 dd', name: '4 dd'}
  ];
  dataSigna3: any[] = [
    {id: 'a.c', name: 'a.c'},
    {id: 'p.c', name: 'p.c'}
  ];
  dataObatNonRacikan : any[] = [];
  dataDosis !: TreeNode[];
  alertSaveTemplate : boolean = false;
  sig : string = '';
  dataAlergiObat : string[] = [];

  formFarmasi = this.FormBuilder.group({
    obat: [null],
    sig: [null],
    jumlahHari: [null],
    jumlahObat: [null]
  })

  alergiObatText : string = '';

  updateAlergiObat(){
    var a = '';
    this.dataAlergiObat.forEach(element => {
      a = a + element + ', '
    });
    this.alergiObatText = a;
  }

  getDataHari(){
    for (let i = 1; i <= 200; i++) {
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
    this.petunjuk = this.signa1 + ' ' + this.signa2 + ' ' + this.signaSatuan.name + ' ' + this.signa3 + ' ';
  }

  tambahObatNonRacikan(aa: AutoComplete){
    var a = {
      obat: this.formFarmasi.value.obat,
      sig: this.formFarmasi.value.sig,
      jumlahHari: this.formFarmasi.value.jumlahHari,
      jumlahObat: this.formFarmasi.value.jumlahObat,
      romanJumlahObat: this.romanize(this.formFarmasi.value.jumlahObat)
    }
    this.dataObatNonRacikan.push(a);
    setTimeout(()=>{
      this.formFarmasi.reset();
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
            obat.label = obat.nama_obat + ' ('+obat.satuan+')'
            filtered.push(obat);
        }
    }
    this.filterDataObat = filtered;
  }

  dataRegistrasi : any;

  sendOrderFarmasi(){
    console.log(this.dataObatNonRacikan);
    this.registrasiservice.getDataRegistrasi().subscribe(data => {
      console.log(data)
    })
  }

  romanize (num:any) {
    if (!+num)
      return false;
    var	digits:any[] = String(+num).split(""),
      key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
             "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
             "","I","II","III","IV","V","VI","VII","VIII","IX"],
      roman = "",
      i = 3;
    while (i--)
      roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
  }

  selectedDosis : any[] = [];
  selectedSatuan : any;

  getDataDosis(){
    this.dataDosis = [
      {label: '0.1'},
      {label: '0.25'},
      {label: '0.5'},
      {label: '1'},
      {label: '2'},
      {label: '3'},
      {label: '4'},
      {label: '1-2'},
      {label: '2-3'},
      {label: '2-4'},
      {label: '3-4'},
      {label: '5'},
      {label: '5-10'},
      {label: '6'},
      {label: '7'},
      {label: '8'},
      {label: '9'},
      {label: '10'},
    ]
  }

  dataSatuan: any[] = [];

  getDataSatuan(){
    this.dataSatuan = [
      {label: 'Miligram'},
      {label: 'Mililiter'},
      {label: 'Gram'},
      {label: 'Tab'},
      {label: 'Sendok teh'},
      {label: 'Sendok makan'},
      {label: 'Tetes'},
    ]
  }

  dataCaraPakai : any[] = [];
  selectedCaraPakai : any;

  getDataCaraPakai(){
    this.dataCaraPakai = [
      {label: 'Makan'},
      {label: 'Minum'},
      {label: 'Oles'},
      {label: 'Suntik'}
    ]
  }

  dataFrekuensi : any[] = [];
  selectedFrekuensi : any;

  getDataFrekuensi(){
    this.dataFrekuensi = [
      {label: '1x Sehari'},
      {label: '2x Sehari'},
      {label: '3x Sehari'},
      {label: '4x Sehari'},
      {label: '5x Sehari'},
      {label: 'Setiap 15 Menit'},
      {label: 'Setiap 1 Jam'},
      {label: 'Setiap 18 Jam'},
      {label: 'Setiap 36 Jam'},
      {label: 'Setiap 72 Jam'},
      {label: '1x Seminggu'},
      {label: '2x Seminggu'},
      {label: '3x Seminggu'},
      {label: '1x Sebulan'},
      {label: '2x Sebulan'},
      {label: '3x Sebulan'},
    ]
  }

  dataPetunjuk : any[] = [];
  selectedPetunjuk : any;

  getDataPetunjuk(){
    this.dataPetunjuk = [
      {label: 'Sebelum makan'},
      {label: 'Sesudah makan'},
      {label: 'Jika diperlukan'},
      {label: 'Dengan makan'},
      {label: 'Waktu pagi hari'},
      {label: 'Waktu siang hari'},
      {label: 'Waktu sore hari'},
      {label: 'Waktu malam hari'},
      {label: 'Sebelum tidur'}
    ]
  }

  dataDurasi : any[] = [];
  selectedDurasi : any;

  getDataDurasi(){
    this.dataDurasi = [
      {label: '1 hari'},
      {label: '2 hari'},
      {label: '3 hari'},
      {label: '7 hari'},
      {label: '10 hari'},
      {label: '1 minggu'},
      {label: '2 minggu'},
      {label: '3 minggu'},
      {label: '4 minggu'},
      {label: '6 minggu'},
      {label: '8 minggu'},
      {label: '12 minggu'},
      {label: '1 bulan'},
      {label: '2 bulan'},
      {label: '3 bulan'},
      {label: '6 bulan'}
    ]
  }

  sigData : any[] = [
    {dosis: '', satuan: '', caraPakai: '', frekuensi: '', petunjuk: '',durasi: ''}
  ];
  sigText : string = '';

  onRowSigSelect(e:any, type:any, select:boolean){
    if( select == true ){
      if( type == 'dosis' ) this.sigData[0].dosis  = e.data.label;
      if( type == 'satuan' ) this.sigData[0].satuan  = e.data.label;
      if( type == 'caraPakai' ) this.sigData[0].caraPakai  = e.data.label;
      if( type == 'frekuensi' ) this.sigData[0].frekuensi  = e.data.label;
      if( type == 'petunjuk' ) this.sigData[0].petunjuk  = e.data.label;
      if( type == 'durasi' ) this.sigData[0].durasi  = e.data.label;
    }else{
      if( type == 'dosis' ) this.sigData[0].dosis  = '';
      if( type == 'satuan' ) this.sigData[0].satuan  = '';
      if( type == 'caraPakai' ) this.sigData[0].caraPakai  = '';
      if( type == 'frekuensi' ) this.sigData[0].frekuensi  = '';
      if( type == 'petunjuk' ) this.sigData[0].petunjuk  = '';
      if( type == 'durasi' ) this.sigData[0].durasi  = '';
    }
    var a = '';
    this.sigData.forEach(element => {
      a = element.dosis + ' ' + element.satuan + ' ' + element.caraPakai + ' ' + element.frekuensi + ' ' + element.petunjuk + ' ' + element.durasi;
    });
    this.sigText = a;
  }

  saveTemplateSig(){
    var data = {sigText: this.sigText}
    this.farmasiService.saveTemplateSig(data).subscribe(data => {
      this.alertSaveTemplate = true;
      var a = {value: this.sigText};
      this.dataTemplateSig.push(a);
      setTimeout(() => {
        this.alertSaveTemplate = false;
      }, 1500)
    })
  }

  onRowSigTemplate(e:any){
    this.sigText = e.data.value;
  }

  dataTemplateSig : any[] = [];
  selectedTemplateSig : string = '';

  sendToForm(){
    this.formFarmasi.patchValue({sig:this.sigText})
    this.dialogSig = false;
  }

  parsingNumber : any[] = [];

  parsingNomor(){
    var a = [];
    var b = [];
    for (let index = 0; index <= 100; index++) { b.push(index) }

    var i,j, temporary, chunk = 10;
    for (i = 0,j = b.length; i < j; i += chunk) {
        temporary = b.slice(i, i + chunk);
        a.push(temporary)
    }

    this.parsingNumber = a;

  }

  selectJumlahObat(dd:OverlayPanel, item:any){
    dd.hide();
    this.formFarmasi.patchValue({jumlahObat: item})
  }

  selectJumlahHari(dd:OverlayPanel, item:any){
    dd.hide();
    this.formFarmasi.patchValue({jumlahHari: item})
  }

  getSigTemplate(){
    this.farmasiService.getTemplateSig().subscribe(data => {
      this.dataTemplateSig = data;
    })
  }

  ngOnInit(): void {
    this.obatService.getAllObat().subscribe(data => {
      this.masterObat = data;
    })

    this.registrasiservice.getDataRegistrasi().subscribe(data => {
      console.log(data);
      this.dataRegistrasi = data;
    })

    this.getDataDosis();
    this.getDataSatuan();
    this.getDataCaraPakai();
    this.getDataFrekuensi();
    this.getDataPetunjuk();
    this.getDataDurasi();
    this.parsingNomor();
    this.getSigTemplate();

    this.getDataHari();
    this.getDataSigna2();

  }

}
