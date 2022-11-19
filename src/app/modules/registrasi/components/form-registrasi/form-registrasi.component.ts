import { AfterContentInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';
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

    @ViewChild('noRm') elNorm!: ElementRef;
    @ViewChild('nama') elNama!: ElementRef;
    @ViewChild('noAskes') elNoAskes!: ElementRef;
    @ViewChild('noTlp') elNoTlp!: ElementRef;
    @ViewChild('kodeBooking') elKodeBooking!: ElementRef;

    registrasi: any;
    dialogDataPasien: boolean = false;
    dialogRegistrasiSuccess: boolean = false;
    dialogBilling: boolean = false;
    pasien: any;
    formRegistrasi: any;
    today: any;
    dataDokter: any;
    dataPoli: any;
    dataGroupPasien: any;
    dataGolPasien: any;
    dataJnsPerawatan: any;
    dataWaktuPelayanan: any;
    dataKelasRuangan: any;
    printItems!: MenuItem[];

    subscription: Subscription | undefined;

    constructor(
        public vclaimService: VclaimService,
        public dataPasienService: DataPasienService,
        public formRegistrasiService: FormRegistrasiService,
        private fb: FormBuilder,
        private masterService: MasterService,
        private registrasiService: RegistrasiService,
        private appService: AppService
    ) { }

    subDialog: any;

    ngOnInit(): void {
        this.initPrintItems();
        this.masterService.getGroupPasien();
        this.masterService.getDokter();
        this.masterService.getPoli();
        this.masterService.getJnsPerawatan();
        this.masterService.getDataWaktuPelayanan();

        this.masterService.dokter.subscribe(data => this.dataDokter = data)
        this.masterService.ruangan.subscribe(data => this.dataPoli = data)
        this.masterService.groupPasien.subscribe(data => this.dataGroupPasien = data)
        this.masterService.golonganPasien.subscribe(data => this.dataGolPasien = data)
        this.masterService.jnsPerawatan.subscribe(data => this.dataJnsPerawatan = data)
        this.masterService.waktuPelayanan.subscribe(data => this.dataWaktuPelayanan = data)
        this.masterService.kelasRuangan.subscribe(data => this.dataKelasRuangan = data)

        this.dataPasienService.dialog.subscribe(data => this.dialogDataPasien = data)
        this.dataPasienService.pasien.subscribe(data => this.handlePasien(data))
        this.registrasiService.registrasi.subscribe(data => this.registrasi = data)
        this.formRegistrasiService.saveStatus.subscribe(data => this.handleSaveRegistrasi(data))

        this.subDialog = this.formRegistrasiService.dialog.subscribe(data => {
            if (data) {
                this.initForm();
                setTimeout(() => { this.elNorm.nativeElement.focus() }, 0);
                this.formRegistrasiService.jnsPelayanan.subscribe(data => {
                    if (data) {
                        this.formRegistrasi.get('jnsPerawatan')?.patchValue(data);
                    }
                })
            } else {
                this.subDialog.unsubscribe();
            }
        })
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.subDialog.unsubscribe();
    }

    initForm() {
        this.today = new Date();
        this.formRegistrasi = this.fb.group({
            rs: [1],
            status: ['OPEN', [Validators.required]],
            noreg: [null],
            tanggal: [this.today, [Validators.required]],
            noSep: [null],
            jnsPerawatan: ['mc', [Validators.required]],
            ruanganPoli: [34, [Validators.required]],
            dokter: [null],
            groupPasien: [null, [Validators.required]],
            golPasien: [null, [Validators.required]],
            waktuPelayanan: [null],
            catatan: [null]
        })
    }

    initPrintItems() {
        this.printItems = [
            {
                label: 'Pilihan :',
                items: [
                    {label: 'Sticker Barcode', icon: 'bi bi-printer', command: (event) => { this.appService.doPrint('print/stickerBarcode/'+this.pasien.id) }},
                    {label: 'Data Pasien', icon:  'bi bi-printer', command: (event) => { this.appService.doPrint('print/biodataPasien/'+this.pasien.id) }},
                    {label: 'Data Registrasi', icon: 'bi bi-printer', command: (event) => { this.appService.doPrint('print/dataRegistrasi/'+this.registrasi.noreg) }}
                ]
            }
        ]
    }

    handlePasien(data: any) {
        this.pasien = data;
        if (data) {
            this.initForm();
        }
    }

    handleSaveRegistrasi(data: any) {
        if (data) {
            this.initForm();
            this.dialogRegistrasiSuccess = data;
        }
    }

    searchPasien(e: any) {
        if (e.code == 'Enter') {
            this.dataPasienService.pasien.next('');
            if (e.srcElement.value) {
                this.formRegistrasiService.searchPasien(e.srcElement.name, e.srcElement.value);
            }
        } else if (e.srcElement.value == '') {
            this.dataPasienService.pasien.next('');
        }
    }

    goSearchPasienBy(key: string) {
        if (key == 'norm') this.formRegistrasiService.searchPasien('norm', this.elNorm.nativeElement.value)
        if (key == 'nama') this.formRegistrasiService.searchPasien('nama', this.elNama.nativeElement.value)
        if (key == 'noTlp') this.formRegistrasiService.searchPasien('noTlp', this.elNoTlp.nativeElement.value)
        if (key == 'noAskes') this.formRegistrasiService.searchPasien('noAskes', this.elNoAskes.nativeElement.value)
        if (key == 'kodeBooking') this.formRegistrasiService.searchPasien('kodeBooking', this.elKodeBooking.nativeElement.value)
    }

    getDokterByPoli(value: string) {
        this.masterService.getDokterByPoli(value);
    }

    getGolPasienByGroup(value: string) {
        this.formRegistrasi.get('golPasien')?.patchValue(null);
        this.masterService.getGolPasienByGroup(value);
    }

    getDataRuangan(jnsPerawatan: string) {
        if (jnsPerawatan == 'RJ') {
            this.masterService.getPoli();
        }

        if (jnsPerawatan == 'RI') {
            this.masterService.getRuangRawatInap();
            this.masterService.getKelasRuangan();
        }
    }

    save() {
        let data = {
            registrasi: this.formRegistrasi.value,
            pasien: this.pasien
        }

        this.formRegistrasiService.save(data)
    }

}
