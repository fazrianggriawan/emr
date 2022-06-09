import { Component, OnInit } from '@angular/core';
import { VclaimService } from '../vclaim.service';
import { FormRujukanKeluarService } from './form-rujukan-keluar/form-rujukan-keluar.service';
import { RujukanService } from './rujukan.service';

@Component({
    selector: 'app-rujukan',
    templateUrl: './rujukan.component.html',
    styleUrls: ['./rujukan.component.css']
})
export class RujukanComponent implements OnInit {

    dialogFormRujukanKeluar: boolean = false;
    dataRujukanFaskes: any = [];
    dataRujukanRs: any = [];
    dataRujukanKeluar: any = [];
    peserta: any;
    today = new Date();

    constructor(
        public formRujukanKeluarService: FormRujukanKeluarService,
        public rujukanService: RujukanService,
        private vclaimService: VclaimService
    ) { }

    ngOnInit(): void {
        this.formRujukanKeluarService.dialog.subscribe(data => this.dialogFormRujukanKeluar = data )
        this.vclaimService.peserta.subscribe(data => this.handlePeserta(data))
        this.rujukanService.dataRujukanFaskes.subscribe(data => this.dataRujukanFaskes = data)
        this.rujukanService.dataRujukanRs.subscribe(data => this.dataRujukanRs = data)
        this.rujukanService.dataRujukanKeluar.subscribe(data => this.dataRujukanKeluar = data)
    }

    public handlePeserta(data: any) {
        if( data ) {
            this.peserta = data.peserta;
            this.getDataRujukan();
        }
    }

    public getDataRujukan() {
        this.rujukanService.getDataRujukanFaskes( this.peserta.noKartu );
        this.rujukanService.getDataRujukanRs( this.peserta.noKartu );
    }

}
