import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { config } from 'src/app/config';
import { DataPasienService } from 'src/app/modules/registrasi/components/data-pasien/data-pasien.service';
import { RegistrasiService } from 'src/app/modules/registrasi/services/registrasi.service';
import { AppService } from 'src/app/services/app.service';
import { HasilLaboratoriumService } from './hasil-laboratorium.service';

@Component({
    selector: 'app-hasil-laboratorium',
    templateUrl: './hasil-laboratorium.component.html',
    styleUrls: ['./hasil-laboratorium.component.css']
})
export class HasilLaboratoriumComponent implements OnInit {

    registrasi: any = {};

    hasilLab: any[] = [];
    groupNilaiRujukan: any[] = [];
    peserta: any;
    keterangan: any = {catatan: '', pemeriksa: ''};
    subs: Subscription[] = [];
    formatHasilOptions: any[] = [];
    selectedGroup: string = '';
    selectedBilling: any;
    dialogHasilLab: boolean = false;

    constructor(
        public laboratoriumService: HasilLaboratoriumService,
        private registrasiService: RegistrasiService,
        public hasilLaboratoriumService: HasilLaboratoriumService,
        public appService: AppService,
        // private dataPesertaService: DataPesertaService,
        // private messageService: MessageService
    ) { }

    ngOnInit(): void {
        // this.initHasilLab();
        this.registrasiService.registrasi.subscribe(data => this.registrasi = data);
        this.hasilLaboratoriumService.dataNilaiRujukan.subscribe(data => this.hasilLab = data);
        this.hasilLaboratoriumService.selectedBilling.subscribe(data => this.selectedBilling = data)
        this.subs.push(this.hasilLaboratoriumService.dialog.subscribe(data => this.handleDialog(data)))

        this.groupNilaiRujukan = [
            {id: 'L', name: 'LAKI-LAKI'},
            {id: 'P', name: 'PEREMPUAN'},
            {id: 'AN', name: 'ANAK'},
            {id: 'BY', name: 'BAYI'},
        ]

        this.formatHasilOptions = [
            {id: 'normal', name: 'REGULAR'},
            {id: 'pcr', name: 'PCR'},
        ]

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

    unsubs(){
        this.subs.forEach(element => {
            element.unsubscribe();
        });
    }

    handleDialog(data: boolean){
        if( data ){
            this.selectedGroup = this.registrasi.pasien.jns_kelamin;
            this.hasilLaboratoriumService.getNilaiRujukan(this.registrasi.pasien.jns_kelamin, this.registrasi.noreg);
            this.hasilLaboratoriumService.getHasil(this.selectedBilling.r_billing_head.noreg);
        }else{
            this.unsubs();
        }
    }

    changeGroup(e: any){
        this.hasilLaboratoriumService.getNilaiRujukan(e, this.registrasi.noreg);
    }

    handleHasilLab(data: any) {
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
            noreg: this.registrasi.noreg,
            data: this.hasilLab
        }
        this.hasilLaboratoriumService.save(data);
        // this.laboratoriumService.save(data);
    }

    public print(){
        this.appService.print(config.api_url('print/hasilLab/'+this.registrasi.noreg));
    }

}
