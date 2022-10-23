import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AutoComplete } from 'primeng/autocomplete';
import { AppService } from 'src/app/services/app.service';
import { DiagnosaProsedurService } from '../diagnosa-prosedur/diagnosa-prosedur.service';
import { CpptService } from './cppt.service';

@Component({
    selector: 'app-cppt',
    templateUrl: './cppt.component.html',
    styleUrls: ['./cppt.component.css']
})
export class CpptComponent implements OnInit {

    tplKeluhan: any = [];
    asalKunjungan: any = [];
    dataKeluhan: any = [];
    keteranganKeluhan: any;
    dataTable: any[] = [];
    filteredIcd10: any[] = [];
    dataIcd10: any[] = [];
    sideBar: boolean = false;

    form!: FormGroup;

    subjective: any = '';
    objective: string = '';
    assessment: string = '';
    plan: string = '';
    instruksi: string = '';

    constructor(
        private fb: FormBuilder,
        private cpptService: CpptService,
        private diagnosaProsedurService: DiagnosaProsedurService,
        private appService: AppService
    ) { }

    ngOnInit(): void {
        this.initForm();
        this.cpptService.keluhan.subscribe(data => this.tplKeluhan = data)
        this.cpptService.asalKunjungan.subscribe(data => this.asalKunjungan = data)
        this.diagnosaProsedurService.icd10.subscribe(data => this.dataIcd10 = data.data)
        this.keteranganKeluhan = [
            {id: 1, name: 'utama'},
            {id: 2, name: 'sekunder 1'},
            {id: 3, name: 'sekunder 2'},
            {id: 4, name: 'sekunder 3'},
            {id: 5, name: 'sekunder 4'},
            {id: 6, name: 'sekunder 5'},
        ]
    }

    public initForm() {
        this.form = this.fb.group({
            asalKunjungan: [null],
            keluhanUtama: [null],
            keluhanUtamaSejak: [null],
            keluhanTambahan: [null],
            keluhanTambahanSejak: [null],
            bb: [null],
            tb: [null],
            td: [null],
            nadi: [null],
            p: [null],
            suhu: [null],
            riwayatPenyakitSkrg: [null],
            riwayatPenyakitDulu: [null],
            anamnesaPerawat: [null],
            diagnosaRujukan: [null],
            alergiObat: [null],
            alergiMakanan: [null],
        })

    }

    listenTambahKeluhan(e: any) {
        if (e.code == 'Enter') {
            if (e.srcElement.value) {
                let id = this.tplKeluhan.length + 1;
                this.tplKeluhan.push({ id: id, name: e.srcElement.value });
                this.selectKeluhan({ name: e.srcElement.value })
                e.srcElement.value = '';
            }
        }
    }

    selectKeluhan(data: any) {
        let keterangan = '';
        if (this.dataKeluhan.length == 0) {
            keterangan = 'utama'
        }
        let item = {
            nama: data.name,
            lamaKeluhan: '',
            keterangan: keterangan,
            user: sessionStorage.getItem('login'),
        }
        console.log(item);
        this.dataKeluhan.push(item);
    }

    updateKeluhan() {
        this.appService.setLocalStorage('keluhan', JSON.stringify(this.dataKeluhan));
    }

    timer: any = 2000;

    updateSubjective(e:any) {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            this.appService.setLocalStorage('subjective', this.subjective);
        }, (4000));
    }

    deleteDataKeluhan(i:number){
        this.dataKeluhan.splice(i, 1);
    }

    save() {

    }

    isPasienBaru() {
    }

    selected(e: any, ac: AutoComplete) {
        if (this.dataTable.indexOf(e) < 0) {
            this.dataTable.push(e)
        }
        this.filteredIcd10 = [];
        ac.inputEL.nativeElement.value = null;
    }

    deleteIcd10(i:number){
        this.dataTable.splice(i, 1);
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


}
