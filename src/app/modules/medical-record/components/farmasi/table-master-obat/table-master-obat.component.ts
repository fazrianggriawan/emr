import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { FarmasiService } from '../../../../farmasi/services/farmasi.service';

@Component({
    selector: 'app-table-master-obat',
    templateUrl: './table-master-obat.component.html',
    styleUrls: ['./table-master-obat.component.css']
})
export class TableMasterObatComponent implements OnInit, OnDestroy {

    public masterObat: any;
    public selectedObat!: any;
    public filterKeyObat: string = '';

    @ViewChild('dtObat') dt!: Table;

    constructor(
        private farmasiService: FarmasiService
    ) { }

    ngOnInit(): void {
        this.farmasiService.masterObat.subscribe(data => {
            this.masterObat = data
        });
        this.farmasiService.selectedObat.subscribe(data => this.selectedObat = data);

        this.farmasiService.filterObat.subscribe(data => this.filteringObat(data))

        this.farmasiService.getMasterObat();
    }

    ngOnDestroy(): void {
        this.farmasiService.selectedObat.next('');
    }

    public onSelectObat(item:any) {
        this.farmasiService.selectedObat.next(item);
    }

    public filteringObat(value: string) {
        if (value) {
            if (value == 'ALL')
                this.dt!.filterGlobal('', 'startsWith');
            else
                this.dt!.filterGlobal(value, 'startsWith');

        }
    }

    public filterByLetter(e: any) {
        this.farmasiService.filterObat.next(e.target.innerText);
    }

    public listenFilteringObat(e: KeyboardEvent) {
        if (e.code == 'Enter') {
            this.dt.filterGlobal(this.filterKeyObat, 'contains')
        }
    }

}
