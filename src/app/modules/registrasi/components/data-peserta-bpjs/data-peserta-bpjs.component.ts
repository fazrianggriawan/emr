import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VclaimService } from '../../services/vclaim.service';
import { DataPesertaBpjsService } from './data-peserta-bpjs.service';

@Component({
    selector: 'app-data-peserta-bpjs',
    templateUrl: './data-peserta-bpjs.component.html',
    styleUrls: ['./data-peserta-bpjs.component.css']
})
export class DataPesertaBpjsComponent implements OnInit {

    showDialog: boolean = false;
    peserta: any;
    form!: FormGroup;

    constructor(
        public vclaimService: VclaimService,
        private fb: FormBuilder,
        private dataPesertaBpjsService: DataPesertaBpjsService
    ) { }

    ngOnInit(): void {
        this.dataPesertaBpjsService.showDialog.subscribe( data => this.showDialog = data )
        this.vclaimService.peserta.subscribe(data => this.handlePeserta(data))
        this.initForm();
    }

    public handlePeserta(data: any) {
        if( data ) {
            if( data.metaData.code == '200' ) {
                this.peserta = data.response.peserta;
                this.form.get('nik')?.patchValue(data.response.peserta.nik);
                this.form.get('nama')?.patchValue(data.response.peserta.nama);
                this.form.get('jnsKelamin')?.patchValue(data.response.peserta.sex);
                this.form.get('statusPeserta')?.patchValue(data.response.peserta.statusPeserta.keterangan);
                this.form.get('tglLahir')?.patchValue(data.response.peserta.tglLahir);
                this.form.get('umur')?.patchValue(data.response.peserta.umur.umurSekarang);
                this.form.get('jnsPeserta')?.patchValue(data.response.peserta.jenisPeserta.keterangan);
                this.form.get('hakKelas')?.patchValue(data.response.peserta.hakKelas.keterangan);
                this.form.get('namaProvider')?.patchValue(data.response.peserta.provUmum.nmProvider);
            }
        }
    }

    public initForm() {
        this.form = this.fb.group({
            nomorKartu: ['', Validators.required],
            nik: ['', Validators.required],
            nama: ['', Validators.required],
            jnsKelamin: [''],
            statusPeserta: ['', Validators.required],
            tglLahir: [''],
            umur: [''],
            jnsPeserta: [''],
            hakKelas: [''],
            namaProvider: [''],
        })
    }

    public cariPesertaByNomorKartu(e: KeyboardEvent) {
        if (e.code == 'Enter') {
            this.vclaimService.getPesertaByNomorKartu(this.form.value.nomorKartu);
        }
    }

    public cariPesertaByNik(e: KeyboardEvent) {
        if (e.code == 'Enter') {
            this.vclaimService.getPesertaByNik(this.form.value.nik);
        }
    }

    public hideDialog() {
        this.dataPesertaBpjsService.showDialog.next(false);
        this.form.reset();
    }

    public daftarPasienBaru() {
        this.vclaimService.sendToForm.next(true);
        this.hideDialog();
    }

}
