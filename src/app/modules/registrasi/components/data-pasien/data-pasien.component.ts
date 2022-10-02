import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataPasienService } from './data-pasien.service';
import { Subscription } from 'rxjs';
import { AutoComplete } from 'primeng/autocomplete';

@Component({
    selector: 'app-data-pasien',
    templateUrl: './data-pasien.component.html',
    styleUrls: ['./data-pasien.component.css']
})
export class DataPasienComponent implements OnInit, OnDestroy {

    @ViewChild('acSearch') acSearch!: AutoComplete;

    showDialog: boolean = true;
    dataPasien: any[] = [];
    selectedPasien: any;
    form!: FormGroup;

    subs: Subscription[] = [];
    selectedSearch: any;
    searchOptions: any[] = [];

    constructor(
        private fb: FormBuilder,
        private dataPasienService: DataPasienService
    ) { }

    ngOnInit(): void {
        this.initForm();
        this.dataPasienService.dataPasien.subscribe(data => this.dataPasien = data)
        this.subs.push(this.dataPasienService.dialog.subscribe(data => this.handleDialog(data)))
    }

    filterData(e: any){
        let key = e.query;
        this.searchOptions = [
            {id: 'norm', name: 'No. RM', key: key},
            {id: 'nama', name: 'Nama', key: key},
            {id: 'alamat', name: 'Alamat', key: key},
            {id: 'tlp', name: 'No. Telepon', key: key},
            {id: 'noaskes', name: 'No. BPJS / Asuransi', key: key},
        ]
    }

    filterBy(value: any){
        if(value){
            this.dataPasienService.searchBy(value.id, value.key)
        }else{
            this.dataPasienService.getAllDataPasien();
        }
        this.acSearch.clear();
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.subs.forEach(element => element.unsubscribe())
    }

    handleDialog(data: boolean){
        this.showDialog = data
        if( data ){
            if( this.dataPasienService.dataPasien.value.length == 0 ){
                this.dataPasienService.getAllDataPasien();
            }
        }
    }

    public initForm() {
        this.form = this.fb.group({
            norm: [''],
            nama: [''],
            tglLahir: [''],
            alamat: [''],
            tlp: [''],
            noAsuransi: ['']
        })
    }

    public sorting(e: KeyboardEvent) {
        if( e.code == 'Enter' ){
            var tglLahir = this.form.value.tglLahir;
            if( tglLahir ) {
                var lahir = tglLahir.substr(6, 4) + '-' + tglLahir.substr(3, 2) + '-' + tglLahir.substr(0, 2);
                this.form.get('tglLahir')?.patchValue(lahir);
            }

            this.dataPasienService.getDataPasien(this.form.value);

            this.form.get('tglLahir')?.patchValue(tglLahir);
        }
    }

    public onSelectPasien() {
        this.dataPasienService.pasien.next(this.selectedPasien);
        this.closeDialog()
    }

    public closeDialog() {
        this.dataPasienService.dataPasien.next([]);
        this.dataPasienService.dialog.next(false);
        this.form.reset();
    }

}
