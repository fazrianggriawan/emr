import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { config } from 'src/app/config';
import { DataPesertaService } from './data-peserta/data-peserta.service';
import { LaboratoriumService } from './laboratorium/laboratorium.service';
import { RadiologiService } from './radiologi/radiologi.service';
import { RikkesService } from './rikkes.service';
import { UploadFileService } from './upload-file/upload-file.service';

@Component({
    selector: 'app-rikkes',
    templateUrl: './rikkes.component.html',
    styleUrls: ['./rikkes.component.css'],
    providers: [MessageService]
})
export class RikkesComponent implements OnInit {

    selectedHasil: any;
    dialogDataPeserta: boolean = false;
    dialogUploadFile: boolean = false;
    dialogRadiologi: boolean = false;
    dialogLaboratorium: boolean = false;
    dialogPrintSticker: boolean = false;
    dialogSimbolOdontogram: boolean = false;

    peserta: any;
    odontogram: any = {kiri: [], kanan: []};
    hasil: any = [{ id: 1, name: 'MS' }, { id: 0, name: 'TMS' }]
    printNoUrut: any = { dari: '', sampai: '' };
    form!: FormGroup
    hasilBmi: string = '';
    keswaKesimpulan: any = [
        { name: 'TD' },
        { name: 'DD' },
        { name: 'D' }
    ]

    constructor(
        private fb: FormBuilder,
        private rikkesService: RikkesService,
        public dataPesertaService: DataPesertaService,
        public uploadFileService: UploadFileService,
        public radiologiService: RadiologiService,
        public laboratoriumService: LaboratoriumService,
        private messageService: MessageService
    ) { }

    ngOnInit(): void {
        this.initForm();
        this.dataPesertaService.peserta.subscribe(data => this.setFormPeserta(data))
        this.dataPesertaService.dialog.subscribe(data => this.dialogDataPeserta = data)
        this.uploadFileService.dialog.subscribe(data => this.dialogUploadFile = data)
        this.radiologiService.dialog.subscribe(data => this.dialogRadiologi = data)
        this.laboratoriumService.dialog.subscribe(data => this.dialogLaboratorium = data)
        this.rikkesService.dataRikkes.subscribe(data => this.setFormRikkes(data))

        this.rikkesService.saveStatus.subscribe(data => {
            if (data) {
                this.messageService.add({ severity: 'success', summary: 'Sukses !', detail: 'Data Berhasil Disimpan.' });
            }
        })
        this.initPeserta();
    }

    public setFormPeserta(data: any) {
        if (data) {
            this.peserta = {
                id: data.id,
                noUrut: data.noUrut,
                noPeserta: data.noPeserta,
                nama: data.nama,
                jnsKelamin: data.jnsKelamin,
                tglLahir: data.tglLahir
            }
            this.rikkesService.getDataRikkes(this.peserta.id);
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
        this.initOdontogram();
        this.form = this.fb.group({
            id: [''],
            anamnesa: [''],
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
            mata: [''],
            od1: [''],
            od2: [''],
            od3: [''],
            os1: [''],
            os2: [''],
            os3: [''],
            campus: [''],
            kenalWarna: [''],
            lainLain: [''],
            telinga: [''],
            ad: [''],
            as: [''],
            tajamPend: [''],
            membranTymp: [''],
            penyTel: [''],
            gigiMulut: [''],
            gigiD: [''],
            gigiM: [''],
            gigiF: [''],
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
            kesimpulanPemeriksaan: [''],
            U: [''],
            A: [''],
            B: [''],
            D: [''],
            L: [''],
            G: [''],
            J: [''],
            stakes: [''],
            hasil: [''],
            hasilLab: [''],
            hasilEkg: [''],
            hasilRadiologi: [''],
            hasilAudiometri: [''],
            hasilKeswaKode: [''],
            hasilKeswaKeterangan: [''],
            peserta: []
        })
    }

    public initOdontogram() {
        this.odontogram.kiri = [
            { keterangan: '8', atas: '', bawah: '', idPeserta: '' },
            { keterangan: '7', atas: '', bawah: '', idPeserta: '' },
            { keterangan: '6', atas: '', bawah: '', idPeserta: '' },
            { keterangan: '5', atas: '', bawah: '', idPeserta: '' },
            { keterangan: '4', atas: '', bawah: '', idPeserta: '' },
            { keterangan: '3', atas: '', bawah: '', idPeserta: '' },
            { keterangan: '2', atas: '', bawah: '', idPeserta: '' },
            { keterangan: '1', atas: '', bawah: '', idPeserta: '' }
        ]

        this.odontogram.kanan = [
            { keterangan: '1', atas: '', bawah: '', idPeserta: '' },
            { keterangan: '2', atas: '', bawah: '', idPeserta: '' },
            { keterangan: '3', atas: '', bawah: '', idPeserta: '' },
            { keterangan: '4', atas: '', bawah: '', idPeserta: '' },
            { keterangan: '5', atas: '', bawah: '', idPeserta: '' },
            { keterangan: '6', atas: '', bawah: '', idPeserta: '' },
            { keterangan: '7', atas: '', bawah: '', idPeserta: '' },
            { keterangan: '8', atas: '', bawah: '', idPeserta: '' }
        ]
    }

    public clearForm() {
        let noUrut = this.peserta.noUrut;
        this.initForm();
        this.peserta.noUrut = noUrut;
    }

    public setFormRikkes(data: any) {
        if (data) {
            this.form.get('id')?.patchValue(data.id);
            this.form.get('anamnesa')?.patchValue(data.anamnesa);
            this.form.get('tinggi')?.patchValue(data.tinggi);
            this.form.get('berat')?.patchValue(data.berat);
            this.form.get('imt')?.patchValue(data.imt);
            this.form.get('tekananDarah')?.patchValue(data.tekananDarah);
            this.form.get('nadi')?.patchValue(data.nadi);
            this.form.get('tubuhBentuk')?.patchValue(data.tubuhBentuk);
            this.form.get('tubuhGerak')?.patchValue(data.tubuhGerak);
            this.form.get('kepala')?.patchValue(data.kepala);
            this.form.get('muka')?.patchValue(data.muka);
            this.form.get('leher')?.patchValue(data.leher);
            this.form.get('mata')?.patchValue(data.mata);
            this.form.get('od1')?.patchValue(data.od1);
            this.form.get('od2')?.patchValue(data.od2);
            this.form.get('od3')?.patchValue(data.od3);
            this.form.get('os1')?.patchValue(data.os1);
            this.form.get('os2')?.patchValue(data.os2);
            this.form.get('os3')?.patchValue(data.os3);
            this.form.get('campus')?.patchValue(data.campus);
            this.form.get('kenalWarna')?.patchValue(data.kenalWarna);
            this.form.get('lainLain')?.patchValue(data.lainLain);
            this.form.get('telinga')?.patchValue(data.telinga);
            this.form.get('ad')?.patchValue(data.ad);
            this.form.get('as')?.patchValue(data.as);
            this.form.get('tajamPend')?.patchValue(data.tajamPend);
            this.form.get('membranTymp')?.patchValue(data.membranTymp);
            this.form.get('penyTel')?.patchValue(data.penyTel);
            this.form.get('gigiMulut')?.patchValue(data.gigiMulut);
            this.form.get('gigiD')?.patchValue(data.gigiD);
            this.form.get('gigiM')?.patchValue(data.gigiM);
            this.form.get('gigiF')?.patchValue(data.gigiF);
            this.form.get('karang')?.patchValue(data.karang);
            this.form.get('protesa')?.patchValue(data.protesa);
            this.form.get('penyMulut')?.patchValue(data.penyMulut);
            this.form.get('hidung')?.patchValue(data.hidung);
            this.form.get('tenggorokan')?.patchValue(data.tenggorokan);
            this.form.get('thoraxPernafasan')?.patchValue(data.thoraxPernafasan);
            this.form.get('thoraxBentuk')?.patchValue(data.thoraxBentuk);
            this.form.get('cor')?.patchValue(data.cor);
            this.form.get('pulmo')?.patchValue(data.pulmo);
            this.form.get('abdomen')?.patchValue(data.abdomen);
            this.form.get('lien')?.patchValue(data.lien);
            this.form.get('hepar')?.patchValue(data.hepar);
            this.form.get('regioInguinalis')?.patchValue(data.regioInguinalis);
            this.form.get('genitalia')?.patchValue(data.genitalia);
            this.form.get('perineum')?.patchValue(data.perineum);
            this.form.get('angGerakAtas')?.patchValue(data.angGerakAtas);
            this.form.get('angGerakBawah')?.patchValue(data.angGerakBawah);
            this.form.get('kulit')?.patchValue(data.kulit);
            this.form.get('refleks')?.patchValue(data.refleks);
            this.form.get('kesimpulanPemeriksaan')?.patchValue(data.kesimpulanPemeriksaan);
            this.form.get('U')?.patchValue(data.U);
            this.form.get('A')?.patchValue(data.A);
            this.form.get('B')?.patchValue(data.B);
            this.form.get('D')?.patchValue(data.D);
            this.form.get('L')?.patchValue(data.L);
            this.form.get('G')?.patchValue(data.G);
            this.form.get('J')?.patchValue(data.J);
            this.form.get('stakes')?.patchValue(data.stakes);
            this.form.get('hasil')?.patchValue(data.hasil);
            this.form.get('hasilLab')?.patchValue(data.hasilLab);
            this.form.get('hasilEkg')?.patchValue(data.hasilEkg);
            this.form.get('hasilRadiologi')?.patchValue(data.hasilRadiologi);
            this.form.get('hasilAudiometri')?.patchValue(data.hasilAudiometri);
            this.form.get('hasilKeswaKode')?.patchValue(data.hasilKeswaKode);
            this.form.get('hasilKeswaKeterangan')?.patchValue(data.hasilKeswaKeterangan);
        }
    }

    public listenGetPeserta(e: KeyboardEvent) {
        if (e.code === 'Enter') {
            this.getPeserta();
        } else {
            if (this.peserta.noUrut.length === 0) {
                this.initPeserta();
            }
        }
    }

    public getPeserta() {
        this.dataPesertaService.getPesertaByNoUrut(this.peserta.noUrut);
    }

    public getDataRikkes() {
        this.rikkesService.getDataRikkes(this.peserta.id);
    }

    public save() {
        this.form.get('peserta')?.patchValue(this.peserta);
        this.rikkesService.save(this.form.value);
    }

    public update() {
        this.messageService.add({ severity: 'success', summary: 'Sukses!', detail: 'Data Berhasil Disimpan.' });
    }

    public hitungBmi() {
        let tinggi = parseInt(this.form.get('tinggi')?.value) / 100;
        let berat = parseInt(this.form.get('berat')?.value);

        if (tinggi && berat) {
            let bmi = berat / (tinggi * tinggi)
            bmi = Math.round(bmi * 10) / 10;

            if (this.peserta.jnsKelamin.toLowerCase() == 'perempuan') {
                if (bmi >= 19 && bmi <= 23.9) {
                    this.hasilBmi = 'STAKES 1'
                } else if (bmi >= 24 && bmi <= 25.9) {
                    this.hasilBmi = 'STAKES 2'
                } else if (bmi >= 18.5 && bmi <= 18.9) {
                    this.hasilBmi = 'STAKES 2'
                } else if (bmi >= 26 && bmi <= 28.9) {
                    this.hasilBmi = 'STAKES 3'
                } else if (bmi >= 15 && bmi <= 18.4) {
                    this.hasilBmi = 'STAKES 3'
                } else if (bmi >= 29 || bmi <= 14.9) {
                    this.hasilBmi = 'STAKES 4'
                }
            }

            if (this.peserta.jnsKelamin.toLowerCase() == 'laki-laki') {
                if (bmi >= 20 && bmi <= 24.9) {
                    this.hasilBmi = 'STAKES 1'
                } else if (bmi >= 18.5 && bmi <= 19.9) {
                    this.hasilBmi = 'STAKES 2'
                } else if (bmi >= 15 && bmi <= 18.4) {
                    this.hasilBmi = 'STAKES 2'
                } else if (bmi >= 27 && bmi <= 29.9) {
                    this.hasilBmi = 'STAKES 3'
                } else if (bmi >= 30 || bmi <= 14.9) {
                    this.hasilBmi = 'STAKES 4'
                }
            }

            this.form.get('imt')?.patchValue(bmi);
        }
    }

    public openDialogSimbolOdontogram(idx: number, data: any, location: string) {
        this.dialogSimbolOdontogram = true;
        console.log(data);
    }


    public printSticker() {
        let iframe = '<iframe src="' + config.api_url('rikkes/printSticker/noUrut/' + this.peserta.noUrut) + '" style="height:calc(100% - 4px);width:calc(100% - 4px)"></iframe>';
        let win: any = window.open("", "", "width=1024,height=510,toolbar=no,menubar=no,resizable=yes");
        win.document.write(iframe);
    }

    public printStickerPesertaRange() {
        let iframe = '<iframe src="' + config.api_url('rikkes/printStickerAllPeserta/dari/' + this.printNoUrut.dari + '/sampai/' + this.printNoUrut.sampai) + '" style="height:calc(100% - 4px);width:calc(100% - 4px)"></iframe>';
        let win: any = window.open("", "", "width=1024,height=510,toolbar=no,menubar=no,resizable=yes");
        win.document.write(iframe);
    }

    public exportExcel() {
        let iframe = '<iframe src="' + config.api_url('rikkes/export') + '" style="height:calc(100% - 4px);width:calc(100% - 4px)"></iframe>';
        let win: any = window.open("", "", "width=1024,height=510,toolbar=no,menubar=no,resizable=yes");
        win.document.write(iframe);
    }


}
