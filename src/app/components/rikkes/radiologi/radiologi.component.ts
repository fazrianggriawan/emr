import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { config } from 'src/app/config';
import { DataPesertaService } from '../data-peserta/data-peserta.service';
import { RadiologiService } from './radiologi.service';

@Component({
    selector: 'app-radiologi',
    templateUrl: './radiologi.component.html',
    styleUrls: ['./radiologi.component.css'],
    providers: [MessageService]
})
export class RadiologiComponent implements OnInit {

    uploadedFiles: any[] = [];
    currentFiles: any[] = [];
    hasil: string = '';
    dokter: string= 'dr.Priatna,Sp.Rad';
    peserta: any;

    constructor(
        private radiologiService: RadiologiService,
        private messageService: MessageService,
        private dataPesertaService: DataPesertaService
    ) { }

    ngOnInit(): void {
        this.radiologiService.saveStatus.subscribe(data => {
            if (data) {
                this.messageService.add({ severity: 'success', summary: 'Sukses !', detail: 'Data Berhasil Disimpan.' });
            }
        })
        this.dataPesertaService.peserta.subscribe(data => this.peserta = data)
        this.radiologiService.dialog.subscribe(data => {
            if (data) {
                this.radiologiService.getDataHasil(this.peserta.id);
            }else{
                this.hasil = '';
                this.dokter = 'dr.Priatna,Sp.Rad';
            }
        })

        this.radiologiService.hasil.subscribe(data => {
            if( data ) {
                this.hasil = data.keterangan;
                this.dokter = data.dokter;
            }
        })
    }

    public save() {
        this.radiologiService.save({ hasil: this.hasil, idPeserta: this.peserta.id, dokter: this.dokter });
    }

    public print() {
        let iframe = '<iframe src="' + config.api_url('rikkes/printHasilRadiologi/idPeserta/' + this.peserta.id) + '" style="height:calc(100% - 4px);width:calc(100% - 4px)"></iframe>';
        let win: any = window.open("", "", "width="+screen.availWidth+",height="+screen.availHeight+",toolbar=no,menubar=no,resizable=yes");
        win.document.write(iframe);
    }

}
