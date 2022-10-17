import { Component, OnInit } from '@angular/core';
import { DataPasienService } from 'src/app/modules/registrasi/components/data-pasien/data-pasien.service';
import { RegistrasiService } from 'src/app/modules/registrasi/services/registrasi.service';
import { HasilLaboratoriumService } from './hasil-laboratorium.service';

@Component({
    selector: 'app-hasil-laboratorium',
    templateUrl: './hasil-laboratorium.component.html',
    styleUrls: ['./hasil-laboratorium.component.css']
})
export class HasilLaboratoriumComponent implements OnInit {

    registrasi: any = {};

    hasilLab: any[] = [];
    peserta: any;
    keterangan: any = {catatan: '', pemeriksa: ''};

    golDarah: any = [
        {name: 'A'},
        {name: 'B'},
        {name: 'AB'},
        {name: 'O'}
    ]

    positiveNegative: any = [
        {name: 'NEGATIF'},
        {name: 'POSITIF'}
    ]

    reactive: any = [
        {name: 'REAKTIF'},
        {name: 'NON REAKTIF'}
    ]

    positiveNegative2: any = [
        {name: 'NEGATIF'},
        {name: 'POSITIF'},
        {name: 'POSITIF 2'},
        {name: 'POSITIF 3'},
    ]

    normalAbnormal: any = [
        {name: 'NORMAL'},
        {name: 'ABNORMAL'}
    ]

    constructor(
        public laboratoriumService: HasilLaboratoriumService,
        private registrasiService: RegistrasiService
        // private dataPesertaService: DataPesertaService,
        // private messageService: MessageService
    ) { }

    ngOnInit(): void {
        this.initHasilLab();
        this.registrasiService.registrasi.subscribe(data => this.registrasi = data);
        // this.dataPesertaService.peserta.subscribe(data => this.peserta = data)
        // this.laboratoriumService.hasilLab.subscribe(data => this.handleHasilLab(data))
        // this.laboratoriumService.dialog.subscribe(data => {
        //     if( data ){
        //         this.laboratoriumService.getHasilLab(this.peserta.id)
        //     }else{
        //         this.initHasilLab();
        //         this.keterangan = {catatan: '', pemeriksa: ''};
        //     }
        // })
        // this.laboratoriumService.saveStatus.subscribe(data => {
        //     if( data ){
        //         this.messageService.add({ severity: 'success', summary: 'Sukses !', detail: 'Data Berhasil Disimpan.' });
        //     }
        // })
    }

    public handleHasilLab(data: any) {
        if( data.hasil ){
            if( data.hasil.length > 0 ){
                this.hasilLab = data.hasil;
            }
        }else{
            this.initHasilLab();
        }

        if( data.keterangan ){
            if( data.keterangan[0] ){
                this.keterangan = {catatan: data.keterangan[0].catatan, pemeriksa: data.keterangan[0].pemeriksa};
            }
        }else{
            this.keterangan = {catatan: '', pemeriksa: ''};
        }

    }

    public initHasilLab() {
        this.hasilLab = [
            { name: 'HEMOGLOBIN', hasil: '', nilaiRujukan: 'P (13.0 -17.0 GR/DL)', group: 'hematologi' },
            { name: 'HEMATOKRIT', hasil: '', nilaiRujukan: 'P (40 - 48 GR %)', group: 'hematologi' },
            { name: 'ERITROSIT', hasil: '', nilaiRujukan: 'DWS (4.0-5.9JUTA/UL)', group: 'hematologi' },
            { name: 'LEKOSIT', hasil: '', nilaiRujukan: 'DWS ( 4-10 RIBU/UL)', group: 'hematologi' },
            { name: 'LED I', hasil: '', nilaiRujukan: 'P (0 - 15 MM/JAM)', group: 'hematologi' },
            { name: 'TROMBOSIT', hasil: '', nilaiRujukan: 'DWS (150-440 RIBU/UL)', group: 'hematologi' },
            { name: 'GOLONGAN DARAH', hasil: '', nilaiRujukan: '', group: 'hematologi' },
            { name: 'RH', hasil: '', nilaiRujukan: '', group: 'hematologi' },
            { name: 'GULA DARAH SEWAKTU', hasil: '', nilaiRujukan: '( < 140 MG/DL )', group: 'kimia darah'},
            { name: 'UREUM', hasil: '', nilaiRujukan: '( 20 - 50 MG/DL )', group: 'kimia darah'},
            { name: 'KREATININ', hasil: '', nilaiRujukan: '( 0.5 - 1.5 MG/DL )', group: 'kimia darah'},
            { name: 'SGOT', hasil: '', nilaiRujukan: '( <41 U/I)', group: 'kimia darah'},
            { name: 'SGPT', hasil: '', nilaiRujukan: '( <41 U/I)', group: 'kimia darah'},
            { name: 'WARNA', hasil: '', nilaiRujukan: '', group: 'urin' },
            { name: 'PH', hasil: '', nilaiRujukan: '5.0 - 8.0', group: 'urin' },
            { name: 'BERAT', hasil: '', nilaiRujukan: '1.000 - 1.030', group: 'urin' },
            { name: 'PROTEIN', hasil: '', nilaiRujukan: 'NEGATIF', group: 'urin' },
            { name: 'BILIRUBIN', hasil: '', nilaiRujukan: 'NEGATIF', group: 'urin' },
            { name: 'REDUKSI', hasil: '', nilaiRujukan: 'NEGATIF', group: 'urin' },
            { name: 'UROBILINOGEN', hasil: '', nilaiRujukan: 'NORMAL', group: 'urin' },
            { name: 'NITRIT', hasil: '', nilaiRujukan: 'NEGATIF', group: 'urin' },
            { name: 'KETON', hasil: '', nilaiRujukan: 'NEGATIF', group: 'urin' },
            { name: 'DARAH', hasil: '', nilaiRujukan: 'NEGATIF', group: 'urin' },
            { name: 'LEKOSIT', hasil: '', nilaiRujukan: '/LPB', group: 'urin' },
            { name: 'ERITROSIT', hasil: '', nilaiRujukan: '/LPB', group: 'urin' },
            { name: 'SILINDER', hasil: '', nilaiRujukan: '', group: 'urin' },
            { name: 'EPITEL', hasil: '', nilaiRujukan: '/LPK', group: 'urin' },
            { name: 'KRISTAL', hasil: '', nilaiRujukan: '', group: 'urin' },
            { name: 'BAKTERI', hasil: '', nilaiRujukan: '', group: 'urin' },
            { name: 'ANTI - HIV (RAPID T)', hasil: 'NON REAKTIF', nilaiRujukan: 'NON REAKTIF', group: 'serologi'},
            { name: 'AMPHETAMINE', hasil: 'NEGATIF', nilaiRujukan: 'NEGATIF', group: 'tes narkoba'},
            { name: 'METAMPHETAMINE', hasil: 'NEGATIF', nilaiRujukan: 'NEGATIF', group: 'tes narkoba'},
            { name: 'THC', hasil: 'NEGATIF', nilaiRujukan: 'NEGATIF', group: 'tes narkoba'},
            { name: 'BENZODIAZEPINES', hasil: 'NEGATIF', nilaiRujukan: 'NEGATIF', group: 'tes narkoba'},
            { name: 'MORPHINE', hasil: 'NEGATIF', nilaiRujukan: 'NEGATIF', group: 'tes narkoba'},
            { name: 'ANTIGEN SARS COV-2', hasil: 'NEGATIF', nilaiRujukan: 'NEGATIF', group: 'imunologi'},
            { name: 'HBSAG', hasil: 'NEGATIF', nilaiRujukan: '', group: 'tes'},
            { name: 'TES KEHAMILAN', hasil: '', nilaiRujukan: '', group: 'tes'},
        ]
    }

    public save() {
        let data = {
            idPeserta: this.peserta.id,
            data: this.hasilLab,
            keterangan: this.keterangan
        }
        // this.laboratoriumService.save(data);
    }

    public print(){
        // let iframe = '<iframe src="' + config.api_url('rikkes/printHasilLab/idPeserta/' + this.peserta.id) + '" style="height:calc(100% - 4px);width:calc(100% - 4px)"></iframe>';
        // let win: any = window.open("", "", "width="+screen.availWidth+",height="+screen.availHeight+",toolbar=no,menubar=no,resizable=yes");
        // win.document.write(iframe);
    }

}
