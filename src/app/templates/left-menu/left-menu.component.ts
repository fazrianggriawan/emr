import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { RegistrasiService } from 'src/app/services/registrasi.service';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css'],
  animations: [
    trigger('fadeInOut', [
       transition(':enter', [
          style({opacity:'0'}),
          animate('400ms ease-in-out', style({opacity:'1'}))
       ])
    ])
  ]
})
export class LeftMenuComponent implements OnInit {

  selectedHistory: string = '';
  more: string = '';
  dataTop3Reg : any[] = [];
  dataNextReg : any[] = [];
  selectedRegistrasi : any = {
    tanggal_pendaftaran: '',
    dokter_name: '',
    ruangan_nama: ''
  };
  tableHistory : boolean = false;
  showContent : boolean = true;
  loading : boolean = false;

  selectTanggal(e:any){
    if( e.value.no_pendaftaran ){
      this.selectRegistrasi(e.value);
      this.tableHistory = false;
    }else{
      this.tableHistory = true;
    }
  }

  getNamaBulan(data:string){
    var bln = '';
    switch(data) {
      case '01': bln = 'Jan'; break;
      case '02': bln = 'Feb'; break;
      case '03': bln = 'Mar'; break;
      case '04': bln = 'Apr'; break;
      case '05': bln = 'Mei'; break;
      case '06': bln = 'Jun'; break;
      case '07': bln = 'Jul'; break;
      case '08': bln = 'Agt'; break;
      case '09': bln = 'Sep'; break;
      case '10': bln = 'Okt'; break;
      case '11': bln = 'Nop'; break;
      case '12': bln = 'Des'; break;
      default:
        bln = data;
    }
    return bln;
  }

  reformatTanggal(data:string){
    return data.substr(8, 2)+' '+this.getNamaBulan(data.substr(5, 2))+' '+data.substr(0, 4);
  }

  top3Reg(data:any[]){
    var array = data.reverse();
    var aa:any[] = [];
    for (let index = 0; index < 3; index++) {
      array[index].tanggal_pendaftaran = this.reformatTanggal(array[index].tanggal_pendaftaran);
      aa.push(array[index]);
    }
    this.dataTop3Reg = aa;
    this.selectRegistrasi(this.dataTop3Reg[0]);
  }

  nextReg(data:any[]){
    var aa:any[] = [];
    var array = data.sort();
    for (let index = 3; index < array.length; index++) {
      array[index].tanggal_pendaftaran = this.reformatTanggal(array[index].tanggal_pendaftaran);
      aa.push(array[index]);
    }
    this.dataNextReg = aa;
    if( data.length > 3 ){
      this.dataTop3Reg.push({id:'more',name:'More',icon:'pi pi-bars'});
    }
  }

  getHistoryRegistrasi(){
    this.registrasiService.getHistoryRegistrasi().subscribe(data => {
      this.top3Reg(data.data);
      this.nextReg(data.data);
    })
  }

  selectRegistrasi(data:any){
    this.loading = true;
    this.showContent = false;
    this.selectedHistory = data.no_pendaftaran;
    this.selectedRegistrasi = data;
    this.tableHistory = false;
    setTimeout(() =>{ this.loading = false; this.showContent = true; }, 500)
  }

  constructor(
    private registrasiService: RegistrasiService
  ) { }

  ngOnInit(): void {
    this.getHistoryRegistrasi();
  }

}
