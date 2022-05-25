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
    hasil: any = [{ id: 1, name: 'MS' }, { id: 0, name: 'TMS' }]
    form!: FormGroup
    hasilBmi: string = '';
    keswaKesimpulan: any = [
        {name: 'TD'},
        {name: 'DD'},
        {name: 'D'}
    ]

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
            anamnese: [''],
            tinggi: [''],
            berat: [''],
            imt: [''],
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
            kesimpulanLab: [''],
            kesimpulanKeswa: [''],
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

    public hitungBmi() {
        let tinggi = parseInt(this.form.get('tinggi')?.value) / 100;
        let berat = parseInt(this.form.get('berat')?.value);

        if(tinggi && berat ){
            let bmi = berat / (tinggi * tinggi)
            bmi = Math.round(bmi * 10) / 10;

            if( this.peserta.jnsKelamin.toLowerCase() == 'perempuan' ){
                if( bmi >= 19 && bmi <= 23.9 ){
                    this.hasilBmi = 'STAKES 1'
                }else if( bmi >= 24 && bmi <= 25.9 ){
                    this.hasilBmi = 'STAKES 2'
                }else if( bmi >= 18.5 && bmi <= 18.9 ){
                    this.hasilBmi = 'STAKES 2'
                }else if( bmi >= 26 && bmi <= 28.9 ){
                    this.hasilBmi = 'STAKES 3'
                }else if( bmi >= 15 && bmi <= 18.4 ){
                    this.hasilBmi = 'STAKES 3'
                }else if( bmi >= 29 || bmi <= 14.9 ){
                    this.hasilBmi = 'STAKES 4'
                }
            }

            if( this.peserta.jnsKelamin.toLowerCase() == 'laki-laki' ){
                if( bmi >= 20 && bmi <= 24.9 ){
                    this.hasilBmi = 'STAKES 1'
                }else if( bmi >= 18.5 && bmi <= 19.9 ){
                    this.hasilBmi = 'STAKES 2'
                }else if( bmi >= 15 && bmi <= 18.4 ){
                    this.hasilBmi = 'STAKES 2'
                }else if( bmi >= 27 && bmi <= 29.9 ){
                    this.hasilBmi = 'STAKES 3'
                }else if( bmi >= 30 || bmi <= 14.9 ){
                    this.hasilBmi = 'STAKES 4'
                }
            }

            this.form.get('imt')?.patchValue(bmi);
        }
    }


}
