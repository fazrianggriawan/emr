import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CariObatService } from '../../cari-obat/cari-obat.service';
import { DataStokService } from './data-stok.service';

@Component({
    selector: 'app-data-stok',
    templateUrl: './data-stok.component.html',
    styleUrls: ['./data-stok.component.css']
})
export class DataStokComponent implements OnInit {

    @ViewChild('batchNumber') batchNumber!: ElementRef;

    selectedObat: any;
    dataStokOpname: any[] = [];
    dataStok: any[] = [];
    formStok: any;
    totalStok: any = 0;

    constructor(
        private cariObatService: CariObatService,
        private dataStokService: DataStokService
    ) { }

    ngOnInit(): void {
        this.cariObatService.selectedObat.subscribe(data => this.handleSelectedObat(data))
        this.dataStokService.getDataStokObat(1);
        this.dataStokService.dataStokObat.subscribe(data => this.dataStok = data);
    }

    initFormStok(){
        this.formStok = {
            nomorBatch: '',
            stok: '',
            satuan: '',
            expiredDate: ''
        }
    }

    hitungTotalStok(){
        this.totalStok = 0;
        this.dataStokOpname.forEach(element => {
            this.totalStok = this.totalStok + parseInt(element.stok);
        });
    }

    addStock(){
        this.dataStokOpname.push(this.formStok);
        this.hitungTotalStok();
        setTimeout(() => {
            this.initFormStok();
        }, 100);
        this.batchNumber.nativeElement.focus();
    }

    listenEnter(e: KeyboardEvent){
        if( e.ctrlKey && e.keyCode == 13 ){
            this.addStock();
        }
    }

    handleSelectedObat(data: any){
        this.selectedObat = data;
        this.initFormStok();
    }

}
