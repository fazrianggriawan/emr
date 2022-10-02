import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AutoComplete } from 'primeng/autocomplete';
import { RegistrasiService } from 'src/app/modules/registrasi/services/registrasi.service';
import { RadiologiService } from './radiologi.service';

@Component({
    selector: 'app-radiologi',
    templateUrl: './radiologi.component.html',
    styleUrls: ['./radiologi.component.css'],
    providers: [ConfirmationService, MessageService]
})
export class RadiologiComponent implements OnInit {

    dataRadiologi: any;
    dataOrder: any = [];
    hasil: any = '';
    registrasi: any;
    uploadedFiles: any;
    loading: boolean = false;

    results: any = [];

    constructor(
        private radiologiService: RadiologiService,
        private registrasiService: RegistrasiService,
        private confirmationService: ConfirmationService,
    ) { }

    ngOnInit(): void {
        this.radiologiService.dataRadiologi.subscribe(data => this.dataRadiologi = data)
        this.registrasiService.registrasi.subscribe(data => this.handleRegistrasi(data))
        this.radiologiService.dataOrder.subscribe(data => this.dataOrder = data)
    }

    handleRegistrasi(data: any){
        this.registrasi = data;
        if(data){
            this.radiologiService.getDataOrder(this.registrasi.noreg);
        }
    }

    search(event: any) {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        let filtered: any[] = [];
        let query = event.query;

        for (let i = 0; i < this.dataRadiologi.length; i++) {
            let data = this.dataRadiologi[i];
            if (data.name.toLowerCase().indexOf(query.toLowerCase()) == 0 || data.category.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(data);
            }
        }
        this.results = filtered;
    }

    selectPemeriksaan(e: any, ac: AutoComplete){
        this.dataOrder.push(e);
        ac.inputEL.nativeElement.value = null;

        let data = {
            noreg : this.registrasi.noreg,
            unit : 'rad',
            tipeId : 'nonCito',
            tipeName : 'Non Cito',
            order : e
        }

        this.radiologiService.saveOrder(data);

    }

    deleteOrder(event: any, i:number){
        this.confirmationService.confirm({
            target: event.target,
            message: 'Yakin ingin menghapus data ini?',
            icon: 'pi pi-exclamation-triangle',
            acceptLabel: 'Ya',
            rejectLabel: 'Tidak',
            accept: () => {
                //confirm action
                this.radiologiService.deleteOrder(this.dataOrder[i])
            },
            reject: () => {
                //reject action
            }
        });
    }

    onUpload(event: any){

    }

    deleteImage(data: any){

    }

    getImage(file: any){
        return '';
    }

    openFile(file: string){

    }

}
