import { Component, OnInit, OnDestroy, ViewChild, Input } from '@angular/core';
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

    @Input() showButton: boolean = true;

    @ViewChild('acSearch') acSearch!: AutoComplete;

    dialog: boolean = true;
    dataPasien: any[] = [];
    selectedPasien: any;
    form!: FormGroup;
    loading: boolean = false;

    subs: Subscription[] = [];
    selectedSearch: any;
    searchOptions: any[] = [];

    constructor(
        private fb: FormBuilder,
        public dataPasienService: DataPasienService
    ) { }

    ngOnInit(): void {
        this.initForm();
        this.dataPasienService.dataPasien.subscribe(data => {this.dataPasien = data; this.loading = false;})
        this.subs.push(this.dataPasienService.dialog.subscribe(data => this.handleDialog(data)))
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.subs.forEach(element => element.unsubscribe())
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

    handleDialog(data: boolean){
        this.dialog = data
        if( !data ){
            this.dataPasienService.dataPasien.next([]);
        }
    }

    initForm() {
        this.form = this.fb.group({
            norm: [''],
            nama: [''],
            tglLahir: [''],
            alamat: [''],
            tlp: [''],
            noAsuransi: ['']
        })
    }

    sorting(e: KeyboardEvent) {
        if( e.code == 'Enter' ){
            this.loading = true;
            var tglLahir = this.form.value.tglLahir;
            if( tglLahir ) {
                var lahir = tglLahir.substr(6, 4) + '-' + tglLahir.substr(3, 2) + '-' + tglLahir.substr(0, 2);
                this.form.get('tglLahir')?.patchValue(lahir);
            }

            this.dataPasienService.getDataPasien(this.form.value);

            this.form.get('tglLahir')?.patchValue(tglLahir);
        }
    }

    onSelectPasien() {
        this.dataPasienService.pasien.next(this.selectedPasien);
        this.dataPasienService.openDialog(false);
    }

}
