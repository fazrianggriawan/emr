import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/services/app.service';
import { VclaimService } from '../shared/vclaim/vclaim.service';
import { DataPasienService } from './components/data-pasien/data-pasien.service';
import { FormRegistrasiService } from './components/form-registrasi/form-registrasi.service';
import { MasterService } from './services/master.service';
import { RegistrasiService } from './services/registrasi.service';

@Component({
    selector: 'app-registrasi',
    templateUrl: './registrasi.component.html',
    styleUrls: ['./registrasi.component.css']
})
export class RegistrasiComponent implements OnInit, OnDestroy {

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

    pasien: any;
    dataPesertaBpjs: any;
    form!: FormGroup;
    dialogVclaim: boolean = false;
    dialogDataPasien: boolean = false;
    dialogRegistrasi: boolean = false;
    dialogSavePasien: boolean = true;
    menuPendaftaran!: MenuItem[];

    subscription: Subscription | undefined;

    constructor(
        private masterService: MasterService,
        private fb: FormBuilder,
        private registrasiService: RegistrasiService,
        public formRegistrasiService: FormRegistrasiService,
        public dataPasienService: DataPasienService,
        public vclaimService: VclaimService,
        public appService: AppService
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

        let pasien = this.dataPasienService.pasien.subscribe(data => this.setToForm(data))
        let dialogDataPasien = this.dataPasienService.dialog.subscribe( data => this.dialogDataPasien = data )
        let saveStatusPasien = this.dataPasienService.saveStatusPasien.subscribe(data => this.dialogSavePasien = data)
        let dialogFormRegistrasi = this.formRegistrasiService.dialog.subscribe(data => this.dialogRegistrasi = data)

        this.subscription?.add(pasien);
        this.subscription?.add(dialogDataPasien);
        this.subscription?.add(saveStatusPasien);
        this.subscription?.add(dialogFormRegistrasi);
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.subscription?.unsubscribe();
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
        this.dialogRegistrasi = true;
    }

    public getPesertaBpjs() {
        if( this.form.get('nomorAsuransi')?.value ){
            this.vclaimService.getPesertaByNomorKartu();
        }else{
            if( this.form.get('nik')?.value ){
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
        this.form.reset();
        this.pasien = data;
        if( data ) {
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
        this.masterService.getKota(provinsi);
    }

    public getKecamatan(kota: string) {
        this.masterService.getKecamatan(kota);
    }

    public getKelurahan(kecamatan: string) {
        this.masterService.getKelurahan(kecamatan);
    }

    public getGolonganPasien(groupPasien: string) {
        this.masterService.getGolPasienByGroup(groupPasien);
    }

    public save() {
        let data = this.form.value;
        data.tglLahir = this.appService.reformatDate(data.tglLahir);
        this.dataPasienService.savePasien(data);
    }

    public update() {

        let tglLahir = this.appService.reformatDate(this.form.get('tglLahir')?.value);
        this.form.value.tglLahir = tglLahir;
        this.registrasiService.updatePasien(this.form.value);
    }

    public reformatDate(date: Date) {
        return date.toISOString().substr(0, 10);
    }

    public addRegistrasi() {
        this.formRegistrasiService.dialog.next(true);
    }

    public resetForm() {
        this.initForm();
        this.dataPasienService.pasien.next('');
    }

}
