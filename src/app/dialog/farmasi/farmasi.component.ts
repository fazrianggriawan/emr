import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ObatService } from 'src/app/services/obat.service';
import { AutoComplete } from "primeng/autocomplete/autocomplete";
import { OverlayPanel } from "primeng/overlaypanel";
import { RegistrasiService } from 'src/app/services/registrasi.service';
import { TreeNode } from 'primeng/api';
import { FarmasiService } from 'src/app/services/farmasi.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { Table } from 'primeng/table';

@Component({
    selector: 'app-farmasi',
    templateUrl: './farmasi.component.html',
    styleUrls: ['./farmasi.component.css'],
    animations: [
        trigger('fadeInOut', [
            transition(':enter', [
                style({ opacity: '0' }),
                animate('400ms ease-in-out', style({ opacity: '1' }))
            ])
        ])
    ]
})

export class FarmasiComponent implements OnInit {

    now: Date = new Date();
    dialogSig: boolean = false;
    dialogAdd: boolean = false;
    dataObat: any;
    filterDataObat: any;
    filterDataObatRacikan: any;
    masterObat: any[] = [];
    selectedObat: any;
    selectedObatRacikan: any;
    dataResepNonRacikan: any[] = [];
    satuanObat: any[] = [
        { id: 'tc', name: 'tab' },
        { id: 'sdkm', name: 'C' },
        { id: 'sdkt', name: 'Cth' }
    ]
    signaSatuan: any = { id: 'tc', name: 'tab' };

    jumlahHari: number = 1;
    signa1: number = 1;
    signa2: number = 1;
    signa3: number = 1;
    jumlahObat: number = 1;
    petunjuk: string = '';
    dataObatNonRacikan: any[] = [];
    dataDosis !: TreeNode[];
    alertSaveTemplate: boolean = false;
    sig: string = '';
    dataAlergiObat: string[] = [];

    formFarmasi = this.FormBuilder.group({
        obat: [null],
        sig: [null],
        jumlahHari: [null],
        jumlahObat: [null]
    })

    alergiObatText: string = '';

    updateAlergiObat() {
        var a = '';
        this.dataAlergiObat.forEach(element => {
            a = a + element + ', '
        });
        this.alergiObatText = a;
    }

    hitungTotalObat() {
        this.jumlahObat = (this.signa1 * this.signa2 * this.jumlahHari);
        this.petunjuk = this.signa1 + ' ' + this.signa2 + ' ' + this.signaSatuan.name + ' ' + this.signa3 + ' ';
    }

    dataRegistrasi: any;

    sendOrderFarmasi() {
        console.log(this.dataObatNonRacikan);
        this.registrasiservice.getDataRegistrasi().subscribe(data => {
            console.log(data)
        })
    }

    romanize(num: any) {
        if (!+num)
            return false;
        var digits: any[] = String(+num).split(""),
            key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
                "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
                "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
            roman = "",
            i = 3;
        while (i--)
            roman = (key[+digits.pop() + (i * 10)] || "") + roman;
        return Array(+digits.join("") + 1).join("M") + roman;
    }

    selectedDosis: any[] = [];
    selectedSatuan: any;
    selectedCaraPakai: any;
    dataFrekuensi: any[] = [];
    selectedFrekuensi: any;

    public filterKeyObat: string = '';

    // @ViewChild('dtObat') dt!: Table;

    constructor(
        private obatService: ObatService,
        private farmasiService: FarmasiService,
        private FormBuilder: FormBuilder,
        private registrasiservice: RegistrasiService,
    ) { }

    ngOnInit(): void {
        this.farmasiService.masterObat.subscribe(data => this.masterObat = data);
        this.farmasiService.filterObat.subscribe(data => this.filteringObat(data))

        this.farmasiService.getMasterObat();
    }

    public onSelectObat() {
        alert( JSON.stringify(this.selectedObat) );
    }

    public filteringObat(value: string) {
        if (value) {
            // if (value == 'ALL')
            //     // this.dt!.filterGlobal('', 'startsWith');
            // else
                // this.dt!.filterGlobal(value, 'startsWith');

        }
    }

    public filterByLetter(e: any) {
        this.farmasiService.filterObat.next(e.target.innerText);
    }

    public listenFilteringObat(e: KeyboardEvent) {
        if (e.code == 'Enter') {
            // this.dt.filterGlobal(this.filterKeyObat, 'contains')
        }
    }

}
