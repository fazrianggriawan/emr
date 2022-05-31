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
    dataIcd10: any[] = [];
    selectedData: any[] = [];
    filteredIcd10: any[] = [];
    now: Date = new Date();

    constructor(
        private diagnosaProsedurService: DiagnosaProsedurService,
        private fb: FormBuilder,
        private registrasiService: RegistrasiService
    ) { }

    ngOnInit(): void {
        this.diagnosaProsedurService.icd10.subscribe(data => this.dataIcd10 = data)
        this.diagnosaProsedurService.getIcd10();
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
            if (data.name.toLowerCase().indexOf(query.toLowerCase()) == 0 || data.id.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(data);
            }
        }
        this.filteredIcd10 = filtered;
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

}