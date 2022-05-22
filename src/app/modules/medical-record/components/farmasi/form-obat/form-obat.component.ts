import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NumpadRacikanService } from 'src/app/modules/shared/numpad-racikan/numpad-racikan.service';
import { NumpadService } from 'src/app/modules/shared/numpad/numpad.service';
import { FarmasiService } from 'src/app/services/farmasi.service';

@Component({
    selector: 'app-form-obat',
    templateUrl: './form-obat.component.html',
    styleUrls: ['./form-obat.component.css']
})
export class FormObatComponent implements OnInit {

    form!: FormGroup;
    selectedObat!: any;
    displayDialog: boolean = false;
    jenisResep: string = '';

    signa: any = { dosis: '', unit: '', route: '', frekuensi: '', arahan: '', durasi: '' };
    data: any = { arahan: [], frekuensi: [], route: [], unit: [], dosis: [], hari: [], durasi: [] }

    constructor(
        private fb: FormBuilder,
        private farmasiService: FarmasiService,
        private numpadService: NumpadService,
        private numpadRacikanService: NumpadRacikanService
    ) { }

    ngOnInit(): void {
        this.initForm();
        this.getMasterDataSigna();
        this.farmasiService.selectedObat.subscribe(data => this.handleSelectedObat(data));
        this.numpadService.number.subscribe(data => this.form.patchValue({ jumlah: data }));
        this.numpadRacikanService.value.subscribe( data => this.form.patchValue({takaran : data}) )
        this.farmasiService.jenisResep.subscribe( data => this.handleJenisResep(data) );
    }

    public initForm() {
        this.form = this.fb.group({
            obat: [this.selectedObat, Validators.required],
            signaText: ['', Validators.required],
            signaValue: [this.signa, Validators.required],
            jumlah: ['1', Validators.required],
            kronis: [false, Validators.required],
            takaran: [''],
            catatan: [''],
        })
    }

    public save() {
        this.form.patchValue({ obat: this.selectedObat })
        this.farmasiService.orderObat.next(this.form.value);
        this.closeDialog();
    }

    public getMasterDataSigna() {
        this.data.arahan = this.farmasiService.getDataArahan();
        this.data.durasi = this.farmasiService.getDataDurasi();
        this.data.dosis = this.farmasiService.getDataDosis();
        this.data.unit = this.farmasiService.getDataUnit();
        this.data.route = this.farmasiService.getDataRoute();
        this.data.frekuensi = this.farmasiService.getDataFrekuensi();
        this.data.hari = this.farmasiService.getDataHari();
    }

    public updateSignaText() {
        let signa = '';
        signa += (this.signa.route) ? this.signa.route + ' ' : '';
        signa += (this.signa.dosis) ? this.signa.dosis + ' ' : '';
        signa += (this.signa.unit) ? this.signa.unit + ' ' : '';
        signa += (this.signa.frekuensi) ? this.signa.frekuensi + ' ' : '';
        signa += (this.signa.arahan) ? this.signa.arahan + ' ' : '';
        signa += (this.signa.durasi) ? this.signa.durasi + ' ' : '';

        this.form.patchValue({ signaText: signa });
    }

    public openNumpad(e: any) {
        this.numpadService.event.next(e);
    }

    public handleSelectedObat(data: any) {
        if (data) {
            this.selectedObat = data;
            this.openDialog();
        }
    }

    public handleJenisResep(value: string) {
        this.jenisResep = value;
    }

    public openDialog() {
        this.displayDialog = true;
    }

    public closeDialog() {
        this.numpadRacikanService.reset();
        this.numpadService.reset();
        this.displayDialog = false;
    }

}
