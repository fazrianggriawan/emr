import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { VclaimService } from 'src/app/modules/shared/vclaim/vclaim.service';
import { AppService } from 'src/app/services/app.service';
import { MasterService } from '../../services/master.service';
import { RegistrasiService } from '../../services/registrasi.service';
import { DataPasienService } from '../data-pasien/data-pasien.service';
import { EditRegistrasiService } from '../edit-registrasi/edit-registrasi.service';
import { FormRegistrasiService } from '../form-registrasi/form-registrasi.service';
import { RiwayatKunjunganService } from '../riwayat-kunjungan/riwayat-kunjungan.service';
import { DataRegistrasiService } from './data-registrasi.service';

@Component({
    selector: 'app-data-registrasi',
    templateUrl: './data-registrasi.component.html',
    styleUrls: ['./data-registrasi.component.css']
})
export class DataRegistrasiComponent implements OnInit, OnDestroy {

    @Input() showForm : Boolean = true;
    @Input() showHeader : Boolean = true;

    registrasi: any;
    dataRegistrasi: any[] = [];
    dialogFormRegistrasi: boolean = false;
    dialogVclaim: boolean = false;
    tanggal: Date[] = [];
    form!: FormGroup;
    pasien: any;
    loading: boolean = false;

    dialogRiwayatKunjungan: boolean = false;

    jnsPerawatan: any;
    dataDokter: any[] = [];
    dataJnsPerawatan: any[] = [];
    dataRuangan: any[] = [];
    dataJnsPembayaran: any[] = [];

    subs: Subscription[] = [];

    constructor(
        public formRegistrasiService: FormRegistrasiService,
        public vclaimService: VclaimService,
        public appService: AppService,
        private registrasiService: RegistrasiService,
        private dataPasienService: DataPasienService,
        private masterService: MasterService,
        private fb: FormBuilder,
        public riwayatKunjunganService: RiwayatKunjunganService,
        private editRegistrasiService: EditRegistrasiService,
        private changeDetector: ChangeDetectorRef,
    ) { }

    ngOnInit(): void {
        this.masterService.getDokter();
        this.masterService.getJnsPerawatan();
        this.masterService.getRuangan(this.jnsPerawatan);
        this.masterService.getGroupPasien();
        this.subs.push(this.registrasiService.dataRegistrasi.subscribe(data => this.handleDataRegistrasi(data)))
        this.subs.push(this.formRegistrasiService.dialog.subscribe(data => this.dialogFormRegistrasi = data))
        this.registrasiService.registrasi.subscribe(data => this.registrasi = data);
        this.masterService.dokter.subscribe(data => this.dataDokter = data)
        this.masterService.jnsPerawatan.subscribe(data => this.dataJnsPerawatan = data)
        this.masterService.ruangan.subscribe(data => this.dataRuangan = data)
        this.masterService.groupPasien.subscribe(data => this.dataJnsPembayaran = data);
        this.registrasiService.dataRegistrasi.subscribe(data => { this.dataRegistrasi = data; this.loading = false; });
        this.formRegistrasiService.saveStatus.subscribe(data => {if(data) this.filterForm()})
        this.riwayatKunjunganService.dialog.subscribe(data => this.dialogRiwayatKunjungan = data)
        this.dataPasienService.pasien.subscribe(data => this.pasien = data);

        this.initForm();
    }

    ngAfterContentChecked(): void {
        this.changeDetector.detectChanges();
    }

    ngOnDestroy(): void {
        this.subs.forEach(element => { element.unsubscribe(); });
        this.registrasiService.dataRegistrasi.next([]);
    }

    initForm() {
        this.form = this.fb.group(this.registrasiService.formFilter());
        if( this.dataRegistrasi.length == 0 ){
            this.filterForm();
        }
    }

    filterForm(){
        let data = this.form.value;
        if( data.tanggal ){
            if( data.tanggal[0] ) data.from = this.appService.reformatDate(data.tanggal[0]);
            if( data.tanggal[1] ) data.to = this.appService.reformatDate(data.tanggal[1]);

            if(data.tanggal.length > 0){
                this.loading = true;
                this.registrasiService.filterDataRegistrasi(data);
            }
        }
    }

    getRuangan(e: any) {
        if (e.value) {
            this.masterService.getRuangan(e.value);
            this.filterForm();
        }
    }

    handleDataRegistrasi(data: any) {
        if (data) {
            this.dataRegistrasi = data;
        }
    }

    refresh() {
        // this.dataRegistrasi = '';
        // this.registrasiService.getDataRegistrasi();
    }

    clearTanggal(){
        this.form.get('tanggal')?.patchValue([]);
    }

    registrasiBaru() {
        this.formRegistrasiService.jnsPelayanan.next('RJ')
        this.formRegistrasiService.dialog.next(true)
    }

    editRegistrasi(data: any){
        this.registrasiService.registrasi.next(data);
        this.editRegistrasiService.openDialog(true);
    }

    selectRegistrasi(data: any) {
        if (data) {
            this.registrasiService.showDialog(false)
            this.registrasiService.registrasi.next(data);
            this.dataPasienService.pasien.next(data.pasien);
            sessionStorage.setItem('noreg', data.noreg);
        }
    }

}
