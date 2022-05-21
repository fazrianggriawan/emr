import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { ObatService } from 'src/app/services/obat.service';
import { TabletFarmasiService } from 'src/app/services/tablet-farmasi.service';

@Component({
    selector: 'app-farmasi',
    templateUrl: './farmasi.component.html',
    styleUrls: ['./farmasi.component.css'],
    providers: [ConfirmationService, MessageService],
    animations: [
        trigger('fadeIn', [
            transition(':enter', [
                style({ opacity: '0' }),
                animate('.5s ease-out', style({ opacity: '1' })),
            ]),
        ]),
    ],
})

export class FarmasiComponent implements OnInit {
    @ViewChildren("itemObat") itemObat!: QueryList<ElementRef>;
    @ViewChild('dtObat') dt!: Table;

    masterObat: any[] = [];
    loading: boolean = true;
    filterObat: string = '';
    dataResep: any[] = [];
    dataPasien: any = {};
    selectedDaftarObat = { id: 'all', name: 'Daftar Obat' };
    optionDaftarObat: any[] = [
        { id: 'all', name: 'Daftar Obat' },
        { id: 'fav', name: 'Favorit' },
        { id: 'history', name: 'History Resep' },
    ];
    checked: boolean = false;

    private _testName: string = '';

    get testName(): string {
        return this._testName;
    }

    set testName(value: string) {
        this._testName = value;
        if (value == 'test') {
            console.log('ini cuma test');
        }
    }



    gantiDaftarObat(e: any) {
        if (e.value.id == 'all') {
            this.getDataMasterObat();
        } else if (e.value.id == 'fav') {
            this.obatService.getObatFavoritSalak().subscribe(data => this.masterObat = data)
            this.testName = 'test'
        }
    }

    getDataMasterObat() {
        this.loading = true;
        this.tabletFarmasiService.getMasterObat().subscribe(data => {
            this.masterObat = data;
        })
        this.loading = false;
    }

    applyFilterGlobal($event: any) {
        const value = ($event.target as HTMLInputElement).value;
        const element = ($event.target as Element);

        if ($event.keyCode == 13) {
            this.doFilterObat(value);
            element.setAttribute('readonly', 'readonly'); // Force keyboard to hide on input field.
            element.setAttribute('disabled', 'true'); // Force keyboard to hide on textarea field.
            setTimeout(function () {
                element.removeAttribute('readonly');
                element.removeAttribute('disabled');
            }, 100);
        }
        if (value.length == 0) {
            this.doFilterObat('');
            this.setToAll();
        }
    }

    doFilterObat(value: string) {
        this.dt!.filterGlobal(value, 'startsWith');
    }

    setToAll() {
        this.transparentAllChildren();
        (document.getElementById('allFilter') as HTMLElement).style.backgroundColor = 'orange';
    }

    transparentAllChildren() {
        const elements = document.getElementsByClassName('filterByLetter');
        for (var i = 0; i < elements.length; i++) {
            (elements[i] as HTMLElement).style.backgroundColor = 'transparent';
        }
    }

    filterByLetter(s: string, e: any) {
        this.transparentAllChildren();
        (e.target as HTMLElement).style.backgroundColor = 'Orange';
        if (e.target.innerText == 'ALL') {
            this.filterObat = '';
            this.doFilterObat('');
        } else {
            this.filterObat = e.target.innerText;
            this.doFilterObat(this.filterObat);
        }
    }

    openDialogJumlah(data: any) {
        const selectedObat = Object.assign({}, data)
        this.tabletFarmasiService.panelJumlah.next(true);
        this.tabletFarmasiService.obatSelected.next(selectedObat);
        this.tabletFarmasiService.editMode.next(false);
        this.tabletFarmasiService.firstNumber.next(true);
    }

    openPanelPasien() {
        this.tabletFarmasiService.panelPasien.next(true);
    }

    openPanelRacikan() {
        this.tabletFarmasiService.panelRacikan.next(true);
    }

    editResep(item: any, idx: number) {
        const selectedObat = Object.assign({}, item)
        this.tabletFarmasiService.editIndex.next(idx);
        this.tabletFarmasiService.editMode.next(true);
        this.tabletFarmasiService.obatSelected.next(selectedObat.obat);
        this.tabletFarmasiService.sigData.next(item.signa);
        this.tabletFarmasiService.panelJumlah.next(true);
        this.tabletFarmasiService.firstNumber.next(true);
    }

    print() {
        var printWin = window.open('Printatestpage.com', 'Printatestpage.com', 'left=0,top=0,width=744,height=1052,toolbar=0,status =0');
        printWin?.document.writeln("<h1>Hallo</h1>")
        printWin?.print();
        printWin?.close();
    }

    sendOrder() {
        this.tabletFarmasiService.panelSendOrder.next(true);
    }

    listenDataResep() {
        this.tabletFarmasiService.dataResep.subscribe((data) => {
            this.dataResep = data;
        })
    }

    listenDataPasien() {
        this.tabletFarmasiService.dataPasien.subscribe(data => {
            this.dataPasien = data;
        })
    }

    currentItem = 'Television';

    addItem(value: any) {
        console.log(value)
    }

    constructor(
        private obatService: ObatService,
        private tabletFarmasiService: TabletFarmasiService
    ) { }

    ngOnInit(): void {
        this.getDataMasterObat();
        this.setToAll();
        this.listenDataResep();
        this.listenDataPasien();
    }

    ngAfterViewInit() {
        this.itemObat.changes.subscribe(() => {
            if (this.itemObat && this.itemObat.last) {
                this.itemObat.last.nativeElement.scrollIntoView();
            }
        });
    }

}
