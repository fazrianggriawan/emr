import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AutoComplete } from 'primeng/autocomplete';
import { RegistrasiService } from '../../../registrasi/services/registrasi.service';
import { DiagnosaProsedurService } from './diagnosa-prosedur.service';

@Component({
    selector: 'app-diagnosa-prosedur',
    templateUrl: './diagnosa-prosedur.component.html',
    styleUrls: ['./diagnosa-prosedur.component.css']
})
export class DiagnosaProsedurComponent implements OnInit {

    dataTable: any[] = [];
    dataTable2: any[] = [];
    dataIcd10: any[] = [];
    dataIcd9: any[] = [];
    selectedData: any[] = [];
    filteredIcd10: any[] = [];
    filteredIcd9: any[] = [];
    now: Date = new Date();

    constructor(
        private diagnosaProsedurService: DiagnosaProsedurService,
        private fb: FormBuilder,
        private registrasiService: RegistrasiService
    ) { }

    ngOnInit(): void {
        this.diagnosaProsedurService.icd10.subscribe(data => this.dataIcd10 = data.data)
        this.diagnosaProsedurService.icd9.subscribe(data => this.dataIcd9 = data.data)
    }

    form = this.fb.group({
        noreg: ['', Validators.required],
        tanggal: ['', Validators.required],
        icd: ['']
    })

    save() {
        this.form.patchValue({ icd: this.dataTable });
        // this.diagnosaService.save(this.form.value).subscribe(data => {
        //     if (data.status) {
        //         alert(data.message);
        //     }
        // });
    }

    search(event: any) {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        let filtered: any[] = [];
        let query = event.query;

        for (let i = 0; i < this.dataIcd10.length; i++) {
            let data = this.dataIcd10[i];
            if (data.deskripsi.toLowerCase().indexOf(query.toLowerCase()) == 0 || data.icd10code.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(data);
            }
        }
        this.filteredIcd10 = filtered;
    }

    searchIcd9(event: any) {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        let filtered: any[] = [];
        let query = event.query;

        for (let i = 0; i < this.dataIcd9.length; i++) {
            let data = this.dataIcd9[i];
            if (data.deskripsi.toLowerCase().indexOf(query.toLowerCase()) == 0 || data.icd9code.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(data);
            }
        }
        this.filteredIcd9 = filtered;
    }

    deleteIcd10(i:number){
        this.dataTable.splice(i, 1);
    }

    deleteIcd9(i:number){
        this.dataTable2.splice(i, 1);
    }

    setAsPrimary() {
        let i = this.dataTable.indexOf(this.selectedData);
        this.dataTable[i] = this.dataTable[0];
        this.dataTable[0] = this.selectedData;
        this.selectedData = [];
    }

    selected(e: any, ac: AutoComplete) {
        if (this.dataTable.indexOf(e) < 0) {
            this.dataTable.push(e)
        }
        this.filteredIcd10 = [];
        ac.inputEL.nativeElement.value = null;
    }

    selectedIcd9(e: any, ac: AutoComplete) {
        if (this.dataTable2.indexOf(e) < 0) {
            this.dataTable2.push(e)
        }
        this.filteredIcd9 = [];
        ac.inputEL.nativeElement.value = null;
    }

}
