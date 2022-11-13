import { Component, OnInit } from '@angular/core';
import { PesertaService } from './peserta.service';

@Component({
    selector: 'app-peserta',
    templateUrl: './peserta.component.html',
    styleUrls: ['./peserta.component.css']
})
export class PesertaComponent implements OnInit {

    keyNomorKartu: string = '';
    keyNik: string = '';
    peserta: any;

    constructor(
        public pesertaService: PesertaService
    ) { }

    ngOnInit(): void {
        this.pesertaService.peserta.subscribe(data => this.handlePeserta(data))
    }

    initPeserta(){
        this.peserta = { statusPeserta: {}, jenisPeserta: {}, hakKelas: {}, provUmum: {}, cob: {}, mr: {}, informasi: {}, umur: {} }
    }

    handlePeserta(data: any){
        this.initPeserta();
        if( data ){
            this.peserta = data;
        }
        this.clearSearch();
    }

    listenCariPeserta(e: any) {
        if (e.code == 'Enter') {
            if (e.srcElement.name == 'noPeserta')
                this.pesertaService.getPesertaByNomorKartu(this.keyNomorKartu);

            if (e.srcElement.name == 'nik')
                this.pesertaService.getPesertaByNik(this.keyNik);
        }
    }

    clearSearch(){
        this.keyNik = '';
        this.keyNomorKartu = '';
    }

}
