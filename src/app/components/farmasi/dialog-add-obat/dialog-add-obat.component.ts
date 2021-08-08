import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AutoComplete } from 'primeng/autocomplete';
import { OverlayPanel } from 'primeng/overlaypanel';
import { Table } from 'primeng/table';
import { FarmasiService } from 'src/app/services/farmasi.service';
import { ObatService } from 'src/app/services/obat.service';

@Component({
  selector: 'app-dialog-add-obat',
  templateUrl: './dialog-add-obat.component.html',
  styleUrls: ['./dialog-add-obat.component.css']
})
export class DialogAddObatComponent implements OnInit {

  dataObat : any[] = [];
  dataTemplateSig : any[] = [];
  selectedObat : any;
  selectedTemplateSig : string = '';
  selectedObatUnit : string = '-';
  actionMode : string = '';
  data : any = {
    arahan : [],
    frekuensi : [],
    route : [],
    unit : [],
    dosis : [],
    hari : [],
    durasi : []
  }
  parsingNumber : any[] = [];
  sigText : string = '';
  filterBox : string = '';
  filterDataObat : any = [];
  dialogSig : boolean = false;
  masterObat : any[] = [];
  indexEditObat : any = undefined;
  alertSaveTemplate : boolean = false;

  sigData : any = {dosis: '', unit: '', route: '', frekuensi: '', arahan: '',durasi: ''};

  formFarmasi = this.formBuilder.group({
    obat: [null, Validators.required],
    sig: [null],
    dosis: [null, Validators.required],
    unit: [null, Validators.required],
    route: [null, Validators.required],
    frekuensi: [null, Validators.required],
    arahan: [null, Validators.required],
    durasi: [null],
    jumlahHari: [null],
    jumlahObat: [null, Validators.required]
  })

  selectObat(e:any){
    this.selectedObatUnit = e.satuan;
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

  selectJumlahHari(dd:OverlayPanel, item:any){
    dd.hide();
    this.formFarmasi.patchValue({jumlahHari: item})
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
    this.sigData = {dosis: e.data.dosis, unit: e.data.unit, route: e.data.route, frekuensi: e.data.frekuensi, arahan: e.data.arahan,durasi: e.data.durasi};
  }

  sendToForm(){
    this.formFarmasi.patchValue({dosis: this.sigData.dosis})
    this.formFarmasi.patchValue({unit: this.sigData.unit})
    this.formFarmasi.patchValue({route: this.sigData.route})
    this.formFarmasi.patchValue({frekuensi: this.sigData.frekuensi})
    this.formFarmasi.patchValue({arahan: this.sigData.arahan})
    this.formFarmasi.patchValue({durasi: this.sigData.durasi})
    // this.formFarmasi.patchValue({sig:this.sigData})
    this.dialogSig = false;
  }

  getSigTemplate(){
    this.farmasiService.getTemplateSig().subscribe(data => {
      this.dataTemplateSig = data;
    })
  }

  siga : any = {
    dosis: '',
    unit: '',
    route: '',
    frekuensi: '',
    arahan: '',
    durasi: '',
  }

  onRowSigSelect(e:any, type:any, select:boolean){
    if( select == true ){
      if( type == 'dosis' ) this.siga.dosis  = e.data;
      if( type == 'unit' ) this.siga.unit  = e.data;
      if( type == 'route' ) this.siga.route  = e.data;
      if( type == 'frekuensi' ) this.siga.frekuensi  = e.data;
      if( type == 'arahan' ) this.siga.arahan  = e.data;
      if( type == 'durasi' ) this.siga.durasi  = e.data;
    }else{
      if( type == 'dosis' ) this.siga.dosis  = '';
      if( type == 'unit' ) this.siga.unit  = '';
      if( type == 'route' ) this.siga.route  = '';
      if( type == 'frekuensi' ) this.siga.frekuensi  = '';
      if( type == 'arahan' ) this.siga.arahan  = '';
      if( type == 'durasi' ) this.siga.durasi  = '';
    }
    this.concatSigText();
  }

  concatSigText(){
    this.sigText = this.sigData.dosis + ' ' + this.sigData.unit + ' ' + this.sigData.route + ' ' + this.sigData.frekuensi + ' ' + this.sigData.arahan + ' ' + this.sigData.durasi;
  }

  addObat(ac: AutoComplete){
    this.dataObat.push(this.formFarmasi.value);
    this.resetForm(ac);
  }

  resetForm(ac: AutoComplete){
    this.sigData = {dosis: '', unit: '', route: '', frekuensi: '', arahan: '',durasi: ''};
    this.formFarmasi.reset();
    setTimeout(()=>{
      ac.inputEL.nativeElement.value = null;
    }, 200)
    this.actionMode = 'new';
    this.sigText = '';
  }

  updateObat(ac: AutoComplete){
    var i = this.indexEditObat;
    this.dataObat[i] = this.formFarmasi.value;
    this.resetForm(ac);
  }

  removeObat(i:number){
    this.dataObat.splice(i,1)
  }

  editObat(i:number, data:any){
    this.indexEditObat = i;
    this.setActionMode('edit');
    this.formFarmasi.patchValue(data);
    this.sigData = {
      dosis: data.dosis,
      unit: data.unit,
      route: data.route,
      frekuensi: data.frekuensi,
      arahan: data.arahan,
      durasi: data.durasi
    };
    this.concatSigText();
  }

  setActionMode(mode:string){
    this.actionMode = mode;
  }

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

  getDataMasterObat(){
    this.obatService.getAllObat().subscribe(data => {
      this.masterObat = data;
    })
  }

  save(){
    console.log(this.dataObat);
  }

  constructor(
    private formBuilder : FormBuilder,
    private farmasiService : FarmasiService,
    private obatService : ObatService
  ) { }

  ngOnInit(): void {
    this.data.arahan = this.farmasiService.getDataArahan();
    this.data.durasi = this.farmasiService.getDataDurasi();
    this.data.dosis = this.farmasiService.getDataDosis();
    this.data.unit = this.farmasiService.getDataUnit();
    this.data.route = this.farmasiService.getDataRoute();
    this.data.frekuensi =  this.farmasiService.getDataFrekuensi();
    this.data.hari = this.farmasiService.getDataHari();
    this.getSigTemplate();
    this.parsingNomor();
    this.getDataMasterObat();
    this.setActionMode('new');
  }

}
