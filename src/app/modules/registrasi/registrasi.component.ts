import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { AppService } from 'src/app/services/app.service';
import { VclaimService } from '../shared/vclaim/vclaim.service';
import { DataPasienService } from './components/data-pasien/data-pasien.service';
import { MasterService } from './services/master.service';
import { RegistrasiService } from './services/registrasi.service';

@Component({
    selector: 'app-registrasi',
    templateUrl: './registrasi.component.html',
    styleUrls: ['./registrasi.component.css']
})
export class RegistrasiComponent implements OnInit {

    rs: any[] = [];
    awalanNama: any[] = [];
    negara: any[] = [];
    provinsi: any[] = [];
    kota: any[] = [];
    kecamatan: any[] = [];
    kelurahan: any[] = [];
    suku: any[] = [];
    statusNikah: any[] = [];
    agama: any[] = [];
    pekerjaan: any[] = [];
    pendidikan: any[] = [];
    angkatan: any[] = [];
    pangkat: any[] = [];
    groupPasien: any[] = [];
    golonganPasien: any[] = [];

    selectedPasien: any;
    dataPesertaBpjs: any;
    form!: FormGroup;
    dialogVclaim: boolean = false;
    dialogDataPasien: boolean = false;
    dialogFormRawatJalan: boolean = false;
    menuPendaftaran!: MenuItem[];

    constructor(
        private masterService: MasterService,
        private fb: FormBuilder,
        private registrasiService: RegistrasiService,
        private appService: AppService,
        public vclaimService: VclaimService,
        public dataPasienService: DataPasienService,
    ) { }

    ngOnInit(): void {
        this.initForm();
        this.getMasterData();
        this.masterService.rs.subscribe(data => this.rs = data)
        this.masterService.awalanNama.subscribe(data => this.awalanNama = data)
        this.masterService.negara.subscribe(data => this.negara = data)
        this.masterService.provinsi.subscribe(data => this.provinsi = data)
        this.masterService.kota.subscribe(data => this.kota = data)
        this.masterService.kecamatan.subscribe(data => this.kecamatan = data)
        this.masterService.kelurahan.subscribe(data => this.kelurahan = data)
        this.masterService.suku.subscribe(data => this.suku = data)
        this.masterService.statusNikah.subscribe(data => this.statusNikah = data)
        this.masterService.agama.subscribe(data => this.agama = data)
        this.masterService.pekerjaan.subscribe(data => this.pekerjaan = data)
        this.masterService.pendidikan.subscribe(data => this.pendidikan = data)
        this.masterService.angkatan.subscribe(data => this.angkatan = data)
        this.masterService.pangkat.subscribe(data => this.pangkat = data)
        this.masterService.groupPasien.subscribe(data => this.groupPasien = data)
        this.masterService.golonganPasien.subscribe(data => this.golonganPasien = data)

        this.dataPasienService.pasien.subscribe(data => this.setToForm(data))
        this.dataPasienService.dialog.subscribe(data => this.dialogDataPasien = data)

        this.vclaimService.dialog.subscribe(data => this.dialogVclaim = data)

        this.menuPendaftaran = [
            { label: 'Rawat Jalan', icon: 'bi bi-clipboard-pulse', command: (() => { this.openFormRawatJalan() }) },
            { label: 'Rawat Inap', icon: 'bi bi-hospital' }
        ]
    }

    public getMasterData() {
        this.masterService.getRs();
        this.masterService.getAwalanNama();
        this.masterService.getNegara();
        this.masterService.getProvinsi();
        this.masterService.getSuku();
        this.masterService.getStatusNikah();
        this.masterService.getAgama();
        this.masterService.getPekerjaan();
        this.masterService.getPendidikan();
        this.masterService.getAngkatan();
        this.masterService.getPangkat();
        this.masterService.getGroupPasien();
    }

    public openFormRawatJalan() {
        this.dialogFormRawatJalan = true;
    }

    public getPesertaBpjs() {
        if (this.form.get('nomorAsuransi')?.value) {
            this.vclaimService.getPesertaByNomorKartu();
        } else {
            if (this.form.get('nik')?.value) {
                this.vclaimService.getPesertaByNik();
            }
        }
    }

    public handleDataPasien(data: boolean) {
        if (data) {
            this.setToForm(data);
        }
    }

    public setToForm(data: any) {
        if (data) {
            this.form.get('id')?.patchValue(data.id);
            this.form.get('nomorRm')?.patchValue(data.norm);
            this.form.get('rs')?.patchValue(data.rs);
            this.form.get('awalanNama')?.patchValue(data.awalan);
            this.form.get('nama')?.patchValue(data.nama);
            this.form.get('tempatLahir')?.patchValue(data.tmpt_lahir);
            this.form.get('jnsKelamin')?.patchValue(data.jns_kelamin);
            this.form.get('alamat')?.patchValue(data.alamat);
            this.form.get('negara')?.patchValue(data.negara);
            this.form.get('provinsi')?.patchValue(data.provinsi);
            this.form.get('kota')?.patchValue(data.kota);
            this.form.get('kecamatan')?.patchValue(data.kecamatan);
            this.form.get('kelurahan')?.patchValue(data.kelurahan);
            this.form.get('suku')?.patchValue(data.suku);
            this.form.get('statusNikah')?.patchValue(data.status_nikah);
            this.form.get('agama')?.patchValue(data.agama);
            this.form.get('tlpPasien')?.patchValue(data.tlp);
            this.form.get('tlpKeluarga')?.patchValue(data.tlp_keluarga);
            this.form.get('pekerjaan')?.patchValue(data.pekerjaan);
            this.form.get('pendidikan')?.patchValue(data.pendidikan);
            this.form.get('golonganDarah')?.patchValue(data.gol_darah);
            this.form.get('nik')?.patchValue(data.nik);
            this.form.get('nrpNip')?.patchValue(data.nrp_nip);
            this.form.get('angkatan')?.patchValue(data.angkatan);
            this.form.get('pangkat')?.patchValue(data.pangkat);
            this.form.get('kesatuan')?.patchValue(data.kesatuan);
            this.form.get('jabatan')?.patchValue(data.jabatan);
            this.form.get('groupPasien')?.patchValue(data.group_pasien);
            this.form.get('golonganPasien')?.patchValue(data.gol_pasien);
            this.form.get('nomorAsuransi')?.patchValue(data.no_asuransi);

            if (data.tgl_lahir) {
                let tglLahir = new Date(data.tgl_lahir);
                this.form.get('tglLahir')?.patchValue(tglLahir);
            }
        }

    }

    public handleDataPeserta(data: any) {
        if (data) {
            let peserta = this.dataPesertaBpjs.response.peserta;
            this.form.get('nama')?.patchValue(peserta.nama);
            this.form.get('nomorAsuransi')?.patchValue(peserta.noKartu);
            this.form.get('nik')?.patchValue(peserta.nik);
            this.form.get('jnsKelamin')?.patchValue(peserta.sex);

            if (peserta.sex == 'L')
                this.form.get('awalanNama')?.patchValue(1);
            if (peserta.sex == 'P')
                this.form.get('awalanNama')?.patchValue(2);
        }
    }

    public initForm() {
        this.form = this.fb.group({
            id: [''],
            nomorRm: [''],
            rs: [1, Validators.required],
            awalanNama: ['', Validators.required],
            nama: ['', Validators.required],
            tempatLahir: ['', Validators.required],
            tglLahir: ['', Validators.required],
            jnsKelamin: ['', Validators.required],
            alamat: ['', Validators.required],
            negara: [101, Validators.required],
            provinsi: ['', Validators.required],
            kota: ['', Validators.required],
            kecamatan: ['', Validators.required],
            kelurahan: ['', Validators.required],
            suku: [''],
            statusNikah: ['', Validators.required],
            agama: ['', Validators.required],
            tlpPasien: ['', Validators.required],
            tlpKeluarga: [''],
            pekerjaan: ['', Validators.required],
            pendidikan: ['', Validators.required],
            golonganDarah: [''],
            nik: ['', Validators.required],
            nrpNip: [''],
            angkatan: [''],
            pangkat: [''],
            kesatuan: [''],
            jabatan: [''],
            groupPasien: ['', Validators.required],
            golonganPasien: ['', Validators.required],
            nomorAsuransi: ['']
        })
    }

    public getKota(provinsi: string) {
        if(provinsi){
            this.masterService.getKota(provinsi);
        }
    }

    public getKecamatan(kota: string) {
        if(kota){
            this.masterService.getKecamatan(kota);
        }
    }

    public getKelurahan(kecamatan: string) {
        if(kecamatan){
            this.masterService.getKelurahan(kecamatan);
        }
    }

    public getGolonganPasien(groupPasien: string) {
        if( groupPasien ){
            this.masterService.getGolonganPasien(groupPasien);
        }
    }

    public save() {
        let tglLahir = this.reformatDate(this.form.get('tglLahir')?.value);
        this.form.value.tglLahir = tglLahir;
        this.dataPasienService.savePasien(this.form.value);
    }

    public update() {

        let tglLahir = this.reformatDate(this.form.get('tglLahir')?.value);
        this.form.value.tglLahir = tglLahir;

        this.registrasiService.updatePasien(this.form.value);
    }

    public reformatDate(date: Date) {
        return date.toISOString().substr(0, 10);
    }

}
