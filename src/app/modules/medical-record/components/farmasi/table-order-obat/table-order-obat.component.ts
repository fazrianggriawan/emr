import { Component, OnInit, ViewChild } from '@angular/core';
import { Accordion, AccordionTab } from 'primeng/accordion';
import { FarmasiService } from '../../../../farmasi/services/farmasi.service';

@Component({
    selector: 'app-table-order-obat',
    templateUrl: './table-order-obat.component.html',
    styleUrls: ['./table-order-obat.component.css']
})
export class TableOrderObatComponent implements OnInit {

    @ViewChild('accordion') ac!: Accordion;

    tabIndex: number = 0;
    jenisResep: string = '';
    dataObatBiasa: any[] = [];
    dataObatRacikan: any[] = [];
    dataResepRacikan: any[] = [];
    selectedResepRacikan: any;

    constructor(
        private farmasiService: FarmasiService
    ) { }

    ngOnInit(): void {
        this.farmasiService.jenisResep.subscribe(data => this.jenisResep = data)
        this.farmasiService.orderObat.subscribe(data => this.handleDataObat(data));
    }

    public handleDataObat(data: any) {
        if (data) {
            console.log(this.jenisResep);
            if (this.jenisResep == 'biasa') this.dataObatBiasa.push(data);
            if (this.jenisResep == 'racikan') this.dataObatRacikan.push(data);

        }
    }

    public selectResepRacikan(idx: any) {
        this.selectedResepRacikan = idx;
    }

    public change(e: any) {
        this.dataResepRacikan.push({});
        this.ac.initTabs();
        console.log(this.ac);
        console.log(this.ac.tabs);
    }

    public test() {
        alert('haskdhajksd');
    }

    public changingTab(e: any) {
        if (e.index == 0) this.farmasiService.jenisResep.next('biasa');
        if (e.index == 1) this.farmasiService.jenisResep.next('racikan');
    }

}
