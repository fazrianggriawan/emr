import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { TabletFarmasiService } from 'src/app/services/tablet-farmasi.service';

@Component({
  selector: 'app-panel-jumlah',
  templateUrl: './panel-jumlah.component.html',
  styleUrls: ['./panel-jumlah.component.css']
})
export class PanelJumlahComponent implements OnInit {

  number : string = '';
  satuanPilih : string = '';
  stokGudang : string = '';
  firstNumberEdit : boolean = true;
  editResepMode : boolean = false;
  selectedObat : any = {};
  panelJumlah : boolean = false;
  editMode : boolean = false;

  changeSatuan(e:any){
    this.satuanPilih = e.target.innerText;
  }

  hapusResep(event: any){
    this.confirmationService.confirm({
        target: event.target,
        message: 'Anda yakin ingin hapus?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.tabletFarmasiService.deleteResep();
        }
    });
  }

  saveObatFavorit(){
    this.tabletFarmasiService.saveObatFavorit(this.selectedObat).subscribe(data=>{
      console.log(data);
    })
  }

  next(){
    this.tabletFarmasiService.panelSig.next(true);
    this.selectedObat.jumlah = this.number;
    this.selectedObat.satuan_pilih = this.satuanPilih;
    this.tabletFarmasiService.obatSelected.next(this.selectedObat);
    if( !this.editMode ){
      this.tabletFarmasiService.resetSigData();
    }
    this.tabletFarmasiService.firstNumber.next(false);
    this.number = '';
  }

  listenPanelAction(){
    this.tabletFarmasiService.panelJumlah.subscribe(data=>{
      this.panelJumlah = data;
    })

    this.tabletFarmasiService.obatSelected.subscribe(data=>{
      this.selectedObat = Object.assign({}, data)
      if( this.selectedObat.jumlah ){
        this.number = this.selectedObat.jumlah;
      }else{
        this.number = '';
      }
      if( this.selectedObat.satuan_pilih ){
        this.satuanPilih = this.selectedObat.satuan_pilih;
      }else{
        this.satuanPilih = this.selectedObat.satuan;
      }
    })

    this.tabletFarmasiService.editMode.subscribe(data=>{
      this.editMode = data;
    })

    this.tabletFarmasiService.firstNumber.subscribe(data=>{
      this.firstNumberEdit = data;
    });

  }

  setNumberValue(){
    if( this.editMode ){
      this.number = this.selectedObat.jumlah;
      console.log(this.selectedObat);
    }
  }

  keypadInput(num:any){
    if( this.firstNumberEdit ){
      this.number = '';
    }
    this.number = this.number + num;
    this.firstNumberEdit = false;
  }

  hapusNumber(){
    this.number = this.number.slice(0, -1)
  }

  @Input() item = '';
  @Output() newItemEvent = new EventEmitter<string>();

  addNewitem(value: string){
    this.newItemEvent.emit(value)
  }

  constructor(
    private tabletFarmasiService: TabletFarmasiService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.listenPanelAction();
  }

}
