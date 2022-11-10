import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { config } from 'src/app/config';
import { DataBillingPenunjangService } from 'src/app/modules/billing/components/data-billing-penunjang/data-billing-penunjang.service';
import { DataPasienService } from 'src/app/modules/registrasi/components/data-pasien/data-pasien.service';
import { RegistrasiService } from 'src/app/modules/registrasi/services/registrasi.service';
import { AppService } from 'src/app/services/app.service';
import { HasilLaboratoriumService } from './hasil-laboratorium.service';

@Component({
    selector: 'app-hasil-laboratorium',
    templateUrl: './hasil-laboratorium.component.html',
    styleUrls: ['./hasil-laboratorium.component.css']
})
export class HasilLaboratoriumComponent implements OnInit, OnDestroy {

    @Input() showButton: Boolean = true;

    registrasi: any = {};

    hasilLab: any[] = [];
    groupNilaiRujukan: any[] = [];
    peserta: any;
    keterangan: any = {catatan: '', pemeriksa: ''};
    subs: Subscription[] = [];
    formatHasilOptions: any[] = [];
    selectedGroup: string = '';
    selectedBilling: any;
    dialog: boolean = false;
    billingHead: any;

    constructor(
        public laboratoriumService: HasilLaboratoriumService,
        private registrasiService: RegistrasiService,
        public hasilLaboratoriumService: HasilLaboratoriumService,
        public appService: AppService,
        private dataBillingPenunjangService: DataBillingPenunjangService
    ) { }

    ngOnInit(): void {
        this.registrasiService.registrasi.subscribe(data => this.registrasi = data);
        this.hasilLaboratoriumService.dataNilaiRujukan.subscribe(data => this.hasilLab = data);
        this.hasilLaboratoriumService.selectedBilling.subscribe(data => this.selectedBilling = data)
        this.subs.push(this.hasilLaboratoriumService.dialog.subscribe(data => this.handleDialog(data)))
        this.subs.push(this.dataBillingPenunjangService.inputHasil.subscribe(data => this.handleInputHasil(data)))
        this.subs.push(this.dataBillingPenunjangService.billingHead.subscribe(data => this.handleBillingHead(data)))
        this.subs.push(this.dataBillingPenunjangService.printHasil.subscribe(data => this.handlePrintHasil(data)))

        this.groupNilaiRujukan = [
            {id: 'L', name: 'LAKI-LAKI'},
            {id: 'P', name: 'PEREMPUAN'},
            {id: 'AN', name: 'ANAK'},
            {id: 'BY', name: 'BAYI'},
        ]

        this.formatHasilOptions = [
            {id: 'normal', name: 'REGULAR'},
            {id: 'pcr', name: 'PCR'},
        ]
    }

    ngOnDestroy(): void {
        this.unsubs();
        this.dataBillingPenunjangService.printHasil.next('');
        this.dataBillingPenunjangService.inputHasil.next(false);
    }

    handlePrintHasil(data: any){
        if(data){
            this.appService.print(config.api_url('print/hasilLab/'+data.noreg+'/'+data.idBillingHead))
        }
    }

    handleBillingHead(data: any){
        this.billingHead = data;
        if(data){
            this.hasilLaboratoriumService.getNilaiRujukan(this.registrasi.pasien.jns_kelamin, this.billingHead.id);
        }
    }

    unsubs(){
        this.subs.forEach(element => {
            element.unsubscribe();
        });
    }

    handleInputHasil(data: boolean){
        if(data){
            this.hasilLaboratoriumService.openDialog(true);
        }
    }

    handleDialog(data: boolean){
        this.dialog = data;
    }

    changeGroup(e: any){
        this.hasilLaboratoriumService.getNilaiRujukan(e, this.registrasi.noreg);
    }

    public save() {
        let data = {
            noreg: this.registrasi.noreg,
            idBillingHead: this.billingHead.id,
            data: this.hasilLab
        }
        this.hasilLaboratoriumService.save(data);
    }

}
