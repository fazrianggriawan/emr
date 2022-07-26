import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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

    username: any;

    peserta: any;
    odontogram: any = [];
    selectedOdontogram: any;
    hasil: any = [{ id: 1, name: 'MS' }, { id: 0, name: 'TMS' }]
    printNoUrut: any = { dari: '', sampai: '' };
    form!: FormGroup
    hasilBmi: string = '';
    keswaKesimpulan: any = [
        { name: 'direkomendasikan' },
        { name: 'tidak direkomendasikan' }
    ]
    menuExport: any;

    constructor(
        private fb: FormBuilder,
        private rikkesService: RikkesService,
        public dataPesertaService: DataPesertaService,
        public uploadFileService: UploadFileService,
        public radiologiService: RadiologiService,
        public laboratoriumService: LaboratoriumService,
        private messageService: MessageService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.username = sessionStorage.getItem('login');

        // if( this.username != 'adminOld' && this.username != 'admin2Old' ){
        //     this.router.navigateByUrl('');
        // }
        this.initForm();
        this.dataPesertaService.peserta.subscribe(data => this.setFormPeserta(data))
        this.dataPesertaService.dialog.subscribe(data => this.dialogDataPeserta = data)
        this.uploadFileService.dialog.subscribe(data => this.dialogUploadFile = data)
        this.radiologiService.dialog.subscribe(data => this.dialogRadiologi = data)
        this.laboratoriumService.dialog.subscribe(data => this.dialogLaboratorium = data)
        this.rikkesService.dataRikkes.subscribe(data => this.setFormRikkes(data))
        this.laboratoriumService.hasilLabKeterangan.subscribe(data => {
            if( data ){
                if( data.length > 0 ) this.form.get('hasilLab')?.patchValue(data[0].catatan)
            }
        })

        this.radiologiService.hasil.subscribe(data => {
            if( data ){
                this.form.get('hasilRadiologi')?.patchValue(data.keterangan)
            }
        })

        this.rikkesService.saveStatus.subscribe(data => {
            if (data) {
                this.messageService.add({ severity: 'success', summary: 'Sukses !', detail: 'Data Berhasil Disimpan.' });
            }
        })

        this.rikkesService.dataPsikometri.subscribe(data => {
            if( data ){
                this.form.get('hasilKeswaKode')?.patchValue(data.hasil);
                this.form.get('hasilKeswaKeterangan')?.patchValue(data.keterangan);
                this.form.get('hasilKeswaPleton')?.patchValue(data.pleton);
            }
        })

        this.rikkesService.dataEkg.subscribe(data => {
            if( data ){
                this.form.get('hasilEkg')?.patchValue(data.hasil);
            }
        })

        this.menuExport = [
            { label: 'Summary', icon: 'bi bi-file-earmark-ruled', command: (() => { this.exportExcel() }) },
            { label: 'All Data', icon: 'bi bi-file-earmark-ruled', command: (() => { this.exportExcelAllData() }) },
        ]

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
            this.laboratoriumService.getHasilLabKeterangan(this.peserta.id);
            this.radiologiService.getDataHasil(this.peserta.id);
            this.rikkesService.getDataHasilPsikometri(this.peserta.noUrut);
            this.rikkesService.getDataHasilEkg(this.peserta.noUrut);
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
        this.hasilBmi = '';
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
            hasilKeswaPleton: [''],
            odontogramIdentifikasi: [''],
            peserta: []
        })
    }

    public initOdontogram() {
        this.odontogram = [
            { keterangan: '8', posisi: 'kiri', atas: '', bawah: '', idPeserta: '' },
            { keterangan: '7', posisi: 'kiri', atas: '', bawah: '', idPeserta: '' },
            { keterangan: '6', posisi: 'kiri', atas: '', bawah: '', idPeserta: '' },
            { keterangan: '5', posisi: 'kiri', atas: '', bawah: '', idPeserta: '' },
            { keterangan: '4', posisi: 'kiri', atas: '', bawah: '', idPeserta: '' },
            { keterangan: '3', posisi: 'kiri', atas: '', bawah: '', idPeserta: '' },
            { keterangan: '2', posisi: 'kiri', atas: '', bawah: '', idPeserta: '' },
            { keterangan: '1', posisi: 'kiri', atas: '', bawah: '', idPeserta: '' },
            { keterangan: '1', posisi: 'kanan', atas: '', bawah: '', idPeserta: '' },
            { keterangan: '2', posisi: 'kanan', atas: '', bawah: '', idPeserta: '' },
            { keterangan: '3', posisi: 'kanan', atas: '', bawah: '', idPeserta: '' },
            { keterangan: '4', posisi: 'kanan', atas: '', bawah: '', idPeserta: '' },
            { keterangan: '5', posisi: 'kanan', atas: '', bawah: '', idPeserta: '' },
            { keterangan: '6', posisi: 'kanan', atas: '', bawah: '', idPeserta: '' },
            { keterangan: '7', posisi: 'kanan', atas: '', bawah: '', idPeserta: '' },
            { keterangan: '8', posisi: 'kanan', atas: '', bawah: '', idPeserta: '' }
        ]
    }

    public clearForm() {
        let noUrut = this.peserta.noUrut;
        this.initForm();
        this.peserta.noUrut = noUrut;
    }

    public setFormRikkes(data: any) {
        if (data.rikkes) {
            let rikkes = data.rikkes;
            this.form.get('id')?.patchValue(rikkes.id);
            this.form.get('anamnesa')?.patchValue(rikkes.anamnesa);
            this.form.get('tinggi')?.patchValue(rikkes.tinggi);
            this.form.get('berat')?.patchValue(rikkes.berat);
            this.form.get('imt')?.patchValue(rikkes.imt);
            this.form.get('tekananDarah')?.patchValue(rikkes.tekananDarah);
            this.form.get('nadi')?.patchValue(rikkes.nadi);
            this.form.get('tubuhBentuk')?.patchValue(rikkes.tubuhBentuk);
            this.form.get('tubuhGerak')?.patchValue(rikkes.tubuhGerak);
            this.form.get('kepala')?.patchValue(rikkes.kepala);
            this.form.get('muka')?.patchValue(rikkes.muka);
            this.form.get('leher')?.patchValue(rikkes.leher);
            this.form.get('mata')?.patchValue(rikkes.mata);
            this.form.get('od1')?.patchValue(rikkes.od1);
            this.form.get('od2')?.patchValue(rikkes.od2);
            this.form.get('od3')?.patchValue(rikkes.od3);
            this.form.get('os1')?.patchValue(rikkes.os1);
            this.form.get('os2')?.patchValue(rikkes.os2);
            this.form.get('os3')?.patchValue(rikkes.os3);
            this.form.get('campus')?.patchValue(rikkes.campus);
            this.form.get('kenalWarna')?.patchValue(rikkes.kenalWarna);
            this.form.get('lainLain')?.patchValue(rikkes.lainLain);
            this.form.get('telinga')?.patchValue(rikkes.telinga);
            this.form.get('ad')?.patchValue(rikkes.ad);
            this.form.get('as')?.patchValue(rikkes.as);
            this.form.get('tajamPend')?.patchValue(rikkes.tajamPend);
            this.form.get('membranTymp')?.patchValue(rikkes.membranTymp);
            this.form.get('penyTel')?.patchValue(rikkes.penyTel);
            this.form.get('gigiMulut')?.patchValue(rikkes.gigiMulut);
            this.form.get('gigiD')?.patchValue(rikkes.gigiD);
            this.form.get('gigiM')?.patchValue(rikkes.gigiM);
            this.form.get('gigiF')?.patchValue(rikkes.gigiF);
            this.form.get('karang')?.patchValue(rikkes.karang);
            this.form.get('protesa')?.patchValue(rikkes.protesa);
            this.form.get('penyMulut')?.patchValue(rikkes.penyMulut);
            this.form.get('hidung')?.patchValue(rikkes.hidung);
            this.form.get('tenggorokan')?.patchValue(rikkes.tenggorokan);
            this.form.get('thoraxPernafasan')?.patchValue(rikkes.thoraxPernafasan);
            this.form.get('thoraxBentuk')?.patchValue(rikkes.thoraxBentuk);
            this.form.get('cor')?.patchValue(rikkes.cor);
            this.form.get('pulmo')?.patchValue(rikkes.pulmo);
            this.form.get('abdomen')?.patchValue(rikkes.abdomen);
            this.form.get('lien')?.patchValue(rikkes.lien);
            this.form.get('hepar')?.patchValue(rikkes.hepar);
            this.form.get('regioInguinalis')?.patchValue(rikkes.regioInguinalis);
            this.form.get('genitalia')?.patchValue(rikkes.genitalia);
            this.form.get('perineum')?.patchValue(rikkes.perineum);
            this.form.get('angGerakAtas')?.patchValue(rikkes.angGerakAtas);
            this.form.get('angGerakBawah')?.patchValue(rikkes.angGerakBawah);
            this.form.get('kulit')?.patchValue(rikkes.kulit);
            this.form.get('refleks')?.patchValue(rikkes.refleks);
            this.form.get('kesimpulanPemeriksaan')?.patchValue(rikkes.kesimpulanPemeriksaan);
            this.form.get('U')?.patchValue(rikkes.U);
            this.form.get('A')?.patchValue(rikkes.A);
            this.form.get('B')?.patchValue(rikkes.B);
            this.form.get('D')?.patchValue(rikkes.D);
            this.form.get('L')?.patchValue(rikkes.L);
            this.form.get('G')?.patchValue(rikkes.G);
            this.form.get('J')?.patchValue(rikkes.J);
            this.form.get('stakes')?.patchValue(rikkes.stakes);
            this.form.get('hasil')?.patchValue(rikkes.hasil);
            this.form.get('hasilLab')?.patchValue(rikkes.hasilLab);
            this.form.get('hasilEkg')?.patchValue(rikkes.hasilEkg);
            this.form.get('hasilRadiologi')?.patchValue(rikkes.hasilRadiologi);
            this.form.get('hasilAudiometri')?.patchValue(rikkes.hasilAudiometri);
            this.form.get('hasilKeswaKode')?.patchValue(rikkes.hasilKeswaKode);
            this.form.get('hasilKeswaKeterangan')?.patchValue(rikkes.hasilKeswaKeterangan);
            this.form.get('hasilKeswaPleton')?.patchValue(rikkes.hasilKeswaPleton);
            this.form.get('odontogramIdentifikasi')?.patchValue(rikkes.odontogramIdentifikasi);

            this.hitungBmi();
            this.odontogram = data.odontogram;
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
        this.form.value.odontogram = this.odontogram;
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
        data.idx = idx;
        data.location = location;
        this.selectedOdontogram = data;
        this.dialogSimbolOdontogram = true;
    }

    public setSimbolOdontogram(simbol: string){
        let idx = this.selectedOdontogram.idx;

        if( this.selectedOdontogram.location == 'atas' ){
            this.odontogram[idx].atas = simbol;
        }else if( this.selectedOdontogram.location == 'bawah' ){
            this.odontogram[idx].bawah = simbol;
        }

        this.dialogSimbolOdontogram = false;
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

    public exportExcelAllData() {
        let iframe = '<iframe src="' + config.api_url('rikkes/exportAllData') + '" style="height:calc(100% - 4px);width:calc(100% - 4px)"></iframe>';
        let win: any = window.open("", "", "width=1024,height=510,toolbar=no,menubar=no,resizable=yes");
        win.document.write(iframe);
    }


}
