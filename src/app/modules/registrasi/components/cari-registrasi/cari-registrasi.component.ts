import { Component, OnInit, OnDestroy, ViewChild, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AutoComplete } from 'primeng/autocomplete';
import { Subscription } from 'rxjs';
import { RegistrasiService } from '../../services/registrasi.service';
import { DataPasienService } from '../data-pasien/data-pasien.service';

@Component({
    selector: 'app-cari-registrasi',
    templateUrl: './cari-registrasi.component.html',
    styleUrls: ['./cari-registrasi.component.css']
})
export class CariRegistrasiComponent implements OnInit {

    @ViewChild('acSearch') acSearch!: AutoComplete;
    @Input() showTable: Boolean = true;
    @Input() showForm: Boolean = true;

    selectedPasien: any;

    subs: Subscription[] = [];
    selectedSearch: any;
    searchOptions: any[] = [];
    dialogDataRegistrasi: boolean = false;
    form!: FormGroup;

    constructor(
        public registrasiService: RegistrasiService,
        private fb: FormBuilder
    ) { }

    ngOnInit(): void {
        this.subs.push(this.registrasiService.dataRegistrasi.subscribe(data => {
            if(data.length == 1){
                this.registrasiService.registrasi.next(data[0]);
            }else if(data.length > 1){
                this.registrasiService.showDialog(true);
            }
        }))
        this.registrasiService.dialog.subscribe(data => this.dialogDataRegistrasi = data);
        this.initForm();
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.subs.forEach(element => element.unsubscribe())
    }

    initForm(){
        this.form = this.fb.group(this.registrasiService.formFilter());
    }

    clear(){
        this.registrasiService.showDialog(false);
        this.registrasiService.dataRegistrasi.next([]);
    }

    filterData(e: any) {
        let key = e.query;
        this.searchOptions = [
            { id: 'norm', name: 'No. RM', key: key },
            { id: 'nama', name: 'Nama', key: key },
            { id: 'noreg', name: 'No. Registrasi', key: key }
        ]
    }

    filterBy(value: any) {
        if (value) {
            this.form.get(value.id)?.patchValue(value.key);
            this.form.get('tanggal')?.patchValue([]);
            this.registrasiService.filterDataRegistrasi(this.form.value);
        }
        this.acSearch.clear();
    }

}
