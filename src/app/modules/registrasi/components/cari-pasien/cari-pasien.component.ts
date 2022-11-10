import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { AutoComplete } from 'primeng/autocomplete';
import { Subscription } from 'rxjs';
import { RegistrasiService } from '../../services/registrasi.service';
import { DataPasienService } from '../data-pasien/data-pasien.service';

@Component({
    selector: 'app-cari-pasien',
    templateUrl: './cari-pasien.component.html',
    styleUrls: ['./cari-pasien.component.css']
})
export class CariPasienComponent implements OnInit, OnDestroy {

    @ViewChild('acSearch') acSearch!: AutoComplete;

    selectedPasien: any;

    subs: Subscription[] = [];
    selectedSearch: any;
    searchOptions: any[] = [];

    constructor(
        private dataPasienService: DataPasienService,
        private registrasiService: RegistrasiService
    ) { }

    ngOnInit(): void {
        this.subs.push(this.dataPasienService.dataPasien.subscribe(data => {
            if(data.length >= 1){
                this.dataPasienService.openDialog(true);
            }
        }))
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.subs.forEach(element => element.unsubscribe())
        this.registrasiService.showDialog(false);
    }

    filterData(e: any) {
        let key = e.query;
        this.searchOptions = [
            { id: 'norm', name: 'No. RM', key: key },
            { id: 'nama', name: 'Nama', key: key },
            { id: 'alamat', name: 'Alamat', key: key },
            { id: 'tglLahir', name: 'Tgl.Lahir <br/> <span class="text-muted">dd-mm-yyyy</span>', key: key },
            { id: 'tlp', name: 'No. Telepon', key: key },
            { id: 'noaskes', name: 'No. BPJS / Asuransi', key: key },
        ]
    }

    filterBy(value: any) {
        if (value) {
            this.dataPasienService.searchBy(value.id, value.key)
        }
        this.acSearch.clear();
    }

}
