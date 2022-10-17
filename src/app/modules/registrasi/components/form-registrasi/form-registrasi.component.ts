import { AfterContentInit, Component, ElementRef, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { VclaimService } from 'src/app/modules/shared/vclaim/vclaim.service';
import { AppService } from 'src/app/services/app.service';
import { MasterService } from '../../services/master.service';
import { RegistrasiService } from '../../services/registrasi.service';
import { DataPasienService } from '../data-pasien/data-pasien.service';
import { FormRegistrasiService } from './form-registrasi.service';

@Component({
    selector: 'app-form-registrasi',
    templateUrl: './form-registrasi.component.html',
    styleUrls: ['./form-registrasi.component.css']
})
export class FormRegistrasiComponent implements OnInit, OnDestroy {

    @ViewChild('noRm') input!: ElementRef;

    registrasi: any;
    dialogDataPasien: boolean = false;
    dialogRegistrasiSuccess: boolean = false;
    pasien: any;
    form!: FormGroup;
    today: any;
    dataDokter: any;
    dataPoli: any;
    dataGroupPasien: any;
    dataGolPasien: any;
    dataJnsPerawatan: any;
    dataWaktuPelayanan: any;
    dataKelasRuangan: any;
    dataTempatTidur: any;
    dialogVclaim: boolean = false;

    subs: Subscription[] = [];

    constructor(
        public vclaimService: VclaimService,
        public dataPasienService: DataPasienService,
        public formRegistrasiService: FormRegistrasiService,
        private fb: FormBuilder,
        private masterService: MasterService,
        private registrasiService: RegistrasiService,
        private appService: AppService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.dialogRegistrasiSuccess = false;
        this.masterService.dokter.subscribe(data => this.dataDokter = data)
        this.masterService.ruangan.subscribe(data => {if(data){ this.dataPoli = data }else{ this.dataPoli = [] }} )
        this.masterService.groupPasien.subscribe(data => this.dataGroupPasien = data)
        this.masterService.golonganPasien.subscribe(data => this.dataGolPasien = data)
        this.masterService.jnsPerawatan.subscribe(data => this.dataJnsPerawatan = data)
        this.masterService.waktuPelayanan.subscribe(data => this.handleWaktuPelayanan(data))
        this.masterService.kelasRuangan.subscribe(data => this.dataKelasRuangan = data)
        this.masterService.tempatTidur.subscribe(data => this.dataTempatTidur = data)

        this.subs.push(this.formRegistrasiService.dialog.subscribe(data => this.handleDialog(data)));

        this.subs.push(this.dataPasienService.pasien.subscribe(data => this.handleDataPasien(data)))

        this.subs.push(this.vclaimService.dialog.subscribe(data => this.dialogVclaim = data))

        this.registrasiService.registrasi.subscribe(data => this.registrasi = data)
        this.formRegistrasiService.saveStatus.subscribe(data => this.handleSaveStatus(data) )
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.formRegistrasiService.dialog.next(false);
        this.subs.forEach(element => {
            element.unsubscribe();
        });
    }

    initForm() {
        this.today = new Date();
        this.form = this.fb.group({
            rs: [1],
            idPasien: [null, [Validators.required]],
            norm: [null, [Validators.required]],
            nama: [null, [Validators.required]],
            alamat: [null],
            noAsuransi: [null],
            noTelp: [null],
            jnsKelamin: [null],
            status: ['OPEN', [Validators.required]],
            noreg: [null],
            tanggal: [this.today, [Validators.required]],
            noSep: [null],
            jnsPerawatan: ['rj', [Validators.required]],
            ruanganPoli: [null, [Validators.required]],
            tempatTidur: [null],
            dokter: [null, [Validators.required]],
            groupPasien: [null, [Validators.required]],
            golPasien: [null, [Validators.required]],
            waktuPelayanan: [null],
            catatan: [null]
        })
    }

    handleWaktuPelayanan(data: any[]){
        this.dataWaktuPelayanan = data
    }

    handleDialog(data: boolean){
        if (data) {
            this.initForm();
            this.masterService.getGroupPasien();
            this.masterService.getDokter();
            this.masterService.getPoli();
            this.masterService.getJnsPerawatan();
            this.masterService.getDataWaktuPelayanan();
        }
    }

    handleDataPasien(data: any) {
        if(data){
            this.form.get('idPasien')?.patchValue(data.id);
            this.form.get('norm')?.patchValue(data.norm);
            this.form.get('nama')?.patchValue(data.nama);
            this.form.get('noAsuransi')?.patchValue(data.no_asuransi);
            this.form.get('alamat')?.patchValue(data.alamat);
            this.form.get('noTelp')?.patchValue(data.tlp);
            this.form.get('jnsKelamin')?.patchValue(data.r_jns_kelamin.name);
            this.form.get('groupPasien')?.patchValue(data.r_golpas.group);
            this.form.get('golPasien')?.patchValue(data.gol_pasien);
            this.getGolPasienByGroup(data.r_golpas.group);
        }
    }

    searchPasien(e: any) {
        if (e.code == 'Enter') {
            this.dataPasienService.pasien.next('');
            if (e.srcElement.value) {
                this.formRegistrasiService.searchPasien(e.srcElement.name, e.srcElement.value);
            }
        }else if(e.srcElement.value == ''){
            this.dataPasienService.pasien.next('');
        }
    }

    changeRuangan(value: any){
        if(value){
            if( this.form.get('jnsPerawatan')?.value == 'rj' ){
                this.masterService.getDokterByPoli(value);
            }else{
                this.masterService.getTempatTidur(value);
                this.masterService.getDokter();
            }
        }
    }

    getGolPasienByGroup(value: string){
        this.masterService.getGolPasienByGroup(value);
    }

    getDataRuangan(jnsPerawatan: string){
        if(jnsPerawatan){
            this.masterService.getRuangan(jnsPerawatan);
        }
    }

    save(){
        let data = this.form.value;
        data.tanggal = this.appService.reformatDate(this.form.get('tanggal')?.value);

        this.formRegistrasiService.save(data)
    }

    handleSaveStatus(data: any){
        if( data ){
            this.dialogRegistrasiSuccess = true;
            this.initForm();
            this.formRegistrasiService.saveStatus.next(false);
        }
    }

    toBilling(){
        this.dialogRegistrasiSuccess = false;
        setTimeout(() => {
            this.router.navigateByUrl('/billing');
        }, 100);
    }

}
