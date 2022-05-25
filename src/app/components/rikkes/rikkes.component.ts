import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataPesertaService } from './data-peserta/data-peserta.service';
import { LaboratoriumService } from './laboratorium/laboratorium.service';
import { RadiologiService } from './radiologi/radiologi.service';
import { RikkesService } from './rikkes.service';
import { UploadFileService } from './upload-file/upload-file.service';

@Component({
    selector: 'app-rikkes',
    templateUrl: './rikkes.component.html',
    styleUrls: ['./rikkes.component.css']
})
export class RikkesComponent implements OnInit {

    selectedHasil: any;
    dialogDataPeserta: boolean = false;
    dialogUploadFile: boolean = false;
    dialogRadiologi: boolean = false;
    dialogLaboratorium: boolean = false;
    peserta: any;
    hasil: any = [{ id: 1, name: 'LULUS' }, { id: 0, name: 'TIDAK LULUS' }]
    form!: FormGroup

    constructor(
        private fb: FormBuilder,
        private rikkesService: RikkesService,
        public dataPesertaService: DataPesertaService,
        public uploadFileService: UploadFileService,
        public radiologiService: RadiologiService,
        public laboratoriumService: LaboratoriumService
    ) { }

    ngOnInit(): void {
        this.initForm();
        this.dataPesertaService.peserta.subscribe(data => this.setFormPeserta(data))
        this.dataPesertaService.dialog.subscribe(data => this.dialogDataPeserta = data)
        this.uploadFileService.dialog.subscribe(data => this.dialogUploadFile = data)
        this.radiologiService.dialog.subscribe(data => this.dialogRadiologi = data)
        this.laboratoriumService.dialog.subscribe(data => this.dialogLaboratorium = data)

        this.initPeserta();
    }

    public setFormPeserta(data: any) {
        if (data) {
            this.peserta = {
                id: data.id,
                noUrut: data.noUrut,
                noPeserta: data.noPeserta,
                nama: data.nama,
                jnsKelamin: data.jnsKelamin
            }
        }
    }

    public initPeserta() {
        this.peserta = {
            id: '',
            noUrut: '',
            noPeserta: '',
            nama: '',
            jnsKelamin: ''
        }
    }

    public initForm() {
        this.initPeserta();
        this.form = this.fb.group({
            tinggi: [''],
            berat: [''],
            tekananDarah: [''],
            nadi: [''],
            tubuhBentuk: [''],
            tubuhGerak: [''],
            kepala: [''],
            muka: [''],
            leher: [''],
            odVisusAwal: [''],
            odLensaKoreksi: [''],
            odVisusKoreksi: [''],
            osVisusAwal: [''],
            osLensaKoreksi: [''],
            osVisusKoreksi: [''],
            campus: [''],
            kenalWarna: [''],
            lainLain: [''],
            ad: [''],
            as: [''],
            tajamPend: [''],
            membranTymp: [''],
            penyTel: [''],
            d: [''],
            m: [''],
            f: [''],
            karang: [''],
            protesa: [''],
            penyMulut: [''],
            hidung: [''],
            tenggorokan: [''],
            thoraxPernafasan: [''],
            thoraxBentuk: [''],
            cor: [''],
            pulmo: [''],
            abdomen: [''],
            lien: [''],
            hepar: [''],
            regioInguinalis: [''],
            genitalia: [''],
            perineum: [''],
            angGerakAtas: [''],
            angGerakBawah: [''],
            kulit: [''],
            refleks: [''],
            hymen: [''],
            palpasi: [''],
            kesimpulan: [''],
            rumusLahirU: [''],
            rumusLahirA: [''],
            rumusLahirB: [''],
            rumusLahirD: [''],
            rumusLahirL: [''],
            rumusLahirG: [''],
            rumusLahirJ: [''],
            stakes: [''],
            hasil: [''],
            peserta: []
        })
    }

    public listenGetPeserta(e: KeyboardEvent) {
        if (e.code === 'Enter') {
            this.getPeserta();
        }else{
            if( this.peserta.noUrut.length === 0 ){
                this.initPeserta();
            }
        }
    }

    public getPeserta() {
        this.dataPesertaService.getPesertaByNoUrut(this.peserta.noUrut);
    }

    public save() {
        this.form.get('peserta')?.patchValue(this.peserta);
        this.rikkesService.save(this.form.value);
    }

    public update() {

    }

}
