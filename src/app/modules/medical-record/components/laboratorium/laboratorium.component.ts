import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AutoComplete } from 'primeng/autocomplete';
import { RegistrasiService } from 'src/app/modules/registrasi/services/registrasi.service';
import { LaboratoriumService } from './laboratorium.service';

@Component({
    selector: 'app-laboratorium',
    templateUrl: './laboratorium.component.html',
    styleUrls: ['./laboratorium.component.css'],
    providers: [ConfirmationService, MessageService]
})
export class LaboratoriumComponent implements OnInit {

    dataLab: any;
    dataOrder: any;
    hasil: any;
    registrasi: any;

    results: any = [];

    constructor(
        private laboratoriumService: LaboratoriumService,
        private registrasiService: RegistrasiService,
        private confirmationService: ConfirmationService,
    ) { }

    ngOnInit(): void {
        this.laboratoriumService.dataLab.subscribe(data => this.dataLab = data)
        this.laboratoriumService.dataOrder.subscribe(data => this.dataOrder = data)
        this.registrasiService.registrasi.subscribe(data => this.handleRegistrasi(data))
        this.hasil = [
            {
              "name": "HEMOGLOBIN",
              "hasil": "12.9",
              "nilaiRujukan": "P (13.0 -17.0 GR/DL)",
              "group": "hematologi"
            },
            {
              "name": "HEMATOKRIT",
              "hasil": "38",
              "nilaiRujukan": "P (40 - 48 GR %)",
              "group": "hematologi"
            },
            {
              "name": "ERITROSIT",
              "hasil": "4.2",
              "nilaiRujukan": "DWS (4.0-5.9JUTA/UL)",
              "group": "hematologi"
            },
            {
              "name": "LEKOSIT",
              "hasil": "8.200",
              "nilaiRujukan": "DWS ( 4-10 RIBU/UL)",
              "group": "hematologi"
            },
            {
              "name": "LED I",
              "hasil": "10",
              "nilaiRujukan": "P (0 - 15 MM/JAM)",
              "group": "hematologi"
            },
            {
              "name": "TROMBOSIT",
              "hasil": "275.000",
              "nilaiRujukan": "DWS (150-440 RIBU/UL)",
              "group": "hematologi"
            },
            {
              "name": "GOLONGAN DARAH",
              "hasil": "AB",
              "nilaiRujukan": "",
              "group": "hematologi"
            },
            {
              "name": "RH",
              "hasil": "POSITIF",
              "nilaiRujukan": "",
              "group": "hematologi"
            },
            {
              "name": "ANTIGEN SARS COV-2",
              "hasil": "NEGATIF",
              "nilaiRujukan": "NEGATIF",
              "group": "imunologi"
            },
            {
              "name": "GULA DARAH SEWAKTU",
              "hasil": "78",
              "nilaiRujukan": "( < 140 MG/DL )",
              "group": "kimia darah"
            },
            {
              "name": "UREUM",
              "hasil": "16",
              "nilaiRujukan": "( 20 - 50 MG/DL )",
              "group": "kimia darah"
            },
            {
              "name": "KREATININ",
              "hasil": "0.7",
              "nilaiRujukan": "( 0.5 - 1.5 MG/DL )",
              "group": "kimia darah"
            },
            {
              "name": "SGOT",
              "hasil": "12",
              "nilaiRujukan": "( <41 U/I)",
              "group": "kimia darah"
            },
            {
              "name": "SGPT",
              "hasil": "13",
              "nilaiRujukan": "( <41 U/I)",
              "group": "kimia darah"
            },
            {
              "name": "ANTI - HIV (RAPID T)",
              "hasil": "NON REAKTIF",
              "nilaiRujukan": "NON REAKTIF",
              "group": "serologi"
            },
            {
              "name": "HBSAG",
              "hasil": "NON REAKTIF",
              "nilaiRujukan": "",
              "group": "tes"
            },
            {
              "name": "TES KEHAMILAN",
              "hasil": "NEGATIF",
              "nilaiRujukan": "",
              "group": "tes"
            },
            {
              "name": "AMPHETAMINE",
              "hasil": "NEGATIF",
              "nilaiRujukan": "NEGATIF",
              "group": "tes narkoba"
            },
            {
              "name": "METAMPHETAMINE",
              "hasil": "NEGATIF",
              "nilaiRujukan": "NEGATIF",
              "group": "tes narkoba"
            },
            {
              "name": "THC",
              "hasil": "NEGATIF",
              "nilaiRujukan": "NEGATIF",
              "group": "tes narkoba"
            },
            {
              "name": "BENZODIAZEPINES",
              "hasil": "NEGATIF",
              "nilaiRujukan": "NEGATIF",
              "group": "tes narkoba"
            },
            {
              "name": "MORPHINE",
              "hasil": "NEGATIF",
              "nilaiRujukan": "NEGATIF",
              "group": "tes narkoba"
            },
            {
              "name": "WARNA",
              "hasil": "KUNING JERNIH",
              "nilaiRujukan": "",
              "group": "urin"
            },
            {
              "name": "PH",
              "hasil": "6.0",
              "nilaiRujukan": "5.0 - 8.0",
              "group": "urin"
            },
            {
              "name": "BERAT",
              "hasil": "1.005",
              "nilaiRujukan": "1.000 - 1.030",
              "group": "urin"
            },
            {
              "name": "PROTEIN",
              "hasil": "NEGATIF",
              "nilaiRujukan": "NEGATIF",
              "group": "urin"
            },
            {
              "name": "BILIRUBIN",
              "hasil": "NEGATIF",
              "nilaiRujukan": "NEGATIF",
              "group": "urin"
            },
            {
              "name": "REDUKSI",
              "hasil": "NEGATIF",
              "nilaiRujukan": "NEGATIF",
              "group": "urin"
            },
            {
              "name": "UROBILINOGEN",
              "hasil": "NORMAL",
              "nilaiRujukan": "NORMAL",
              "group": "urin"
            },
            {
              "name": "NITRIT",
              "hasil": "NEGATIF",
              "nilaiRujukan": "NEGATIF",
              "group": "urin"
            },
            {
              "name": "KETON",
              "hasil": "NEGATIF",
              "nilaiRujukan": "NEGATIF",
              "group": "urin"
            },
            {
              "name": "DARAH",
              "hasil": "NEGATIF",
              "nilaiRujukan": "NEGATIF",
              "group": "urin"
            },
            {
              "name": "LEKOSIT",
              "hasil": "0-1",
              "nilaiRujukan": "/LPB",
              "group": "urin"
            },
            {
              "name": "ERITROSIT",
              "hasil": "0-1",
              "nilaiRujukan": "/LPB",
              "group": "urin"
            },
            {
              "name": "SILINDER",
              "hasil": "NEGATIF",
              "nilaiRujukan": "",
              "group": "urin"
            },
            {
              "name": "EPITEL",
              "hasil": "0-2",
              "nilaiRujukan": "/LPK",
              "group": "urin"
            },
            {
              "name": "KRISTAL",
              "hasil": "NEGATIF",
              "nilaiRujukan": "",
              "group": "urin"
            },
            {
              "name": "BAKTERI",
              "hasil": "NEGATIF",
              "nilaiRujukan": "",
              "group": "urin"
            }
        ];
    }

    handleRegistrasi(data: any){
        this.registrasi = data;
        if(data){
            this.laboratoriumService.getDataOrder(this.registrasi.noreg);
        }
    }

    search(event: any) {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        let filtered: any[] = [];
        let query = event.query;

        for (let i = 0; i < this.dataLab.length; i++) {
            let data = this.dataLab[i];
            if (data.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(data);
            }
        }
        this.results = filtered;
    }

    selectPemeriksaan(e: any, ac: AutoComplete){
        ac.inputEL.nativeElement.value = null;

        let data = {
            noreg : this.registrasi.noreg,
            unit : 'lab',
            tipeId : 'nonCito',
            tipeName : 'Non Cito',
            order : e
        }

        this.laboratoriumService.saveOrder(data);

    }

    deleteOrder(event: any, i:number){
        this.confirmationService.confirm({
            target: event.target,
            message: 'Yakin ingin menghapus data ini?',
            icon: 'pi pi-exclamation-triangle',
            acceptLabel: 'Ya',
            rejectLabel: 'Tidak',
            accept: () => {
                //confirm action
                this.laboratoriumService.deleteOrder(this.dataOrder[i])
            },
            reject: () => {
                //reject action
            }
        });
    }
}
