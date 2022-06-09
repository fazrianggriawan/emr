import { Component, OnInit } from '@angular/core';
import { VclaimService } from '../vclaim.service';
import { FormSuratKontrolService } from './form-surat-kontrol/form-surat-kontrol.service';
import { SuratKontrolService } from './surat-kontrol.service';

@Component({
    selector: 'app-surat-kontrol',
    templateUrl: './surat-kontrol.component.html',
    styleUrls: ['./surat-kontrol.component.css']
})
export class SuratKontrolComponent implements OnInit {

    dataSuratKontrol: any = [];
    dialogFormSuratKontrol: boolean = false;
    filter: any = { from: new Date };
    peserta: any;
    filterBulan: any;

    constructor(
        public suratKontrolService: SuratKontrolService,
        public formSuratKontrolService: FormSuratKontrolService,
        private vclaimService: VclaimService
    ) { }

    ngOnInit(): void {
        this.suratKontrolService.dataSuratKontrol.subscribe(data => this.dataSuratKontrol = data)
        this.formSuratKontrolService.dialog.subscribe(data => this.dialogFormSuratKontrol = data)
        this.vclaimService.peserta.subscribe(data => this.handlePeserta(data))
        this.formSuratKontrolService.saveStatus.subscribe(data => { if (data) this.getDataSuratKontrol() })
        this.suratKontrolService.actionStatus.subscribe(data => { if (data) this.getDataSuratKontrol() })
    }

    public handlePeserta(data: any) {
        if (data) {
            this.peserta = data.peserta;
            this.getDataSuratKontrol();
        }
    }

    public getDataSuratKontrol() {
        setTimeout(() => {
            this.suratKontrolService.getDataSuratKontrol(this.peserta.noKartu, this.filter.from, '1');
        }, 50);
    }

    public delete(noSuratKontrol: string) {
        if (confirm('Yakin ingn menghapus data ini?')) {
            this.suratKontrolService.delete(noSuratKontrol);
        }
    }

}
