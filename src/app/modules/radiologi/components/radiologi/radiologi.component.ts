import { Component, OnInit } from '@angular/core';
import { RegistrasiService } from 'src/app/modules/registrasi/services/registrasi.service';
import { RadiologiService } from './radiologi.service';
import { Subscription } from "rxjs";
import { AppService } from 'src/app/services/app.service';

@Component({
    selector: 'app-radiologi',
    templateUrl: './radiologi.component.html',
    styleUrls: ['./radiologi.component.css']
})
export class RadiologiComponent implements OnInit {

    tanggal = new Date();
    dataOrder: any;
    registrasi: any;
    filter: any;
    selectedFilter: string = 'waiting';
    selectedPemeriksaan: any;
    uploadedFiles: any;
    loading: boolean = false;
    dialogHasilRadiologi: boolean = false;

    subs: Subscription[] = [];

    constructor(
        private radiologiService: RadiologiService,
        private registrasiService: RegistrasiService,
        private appService: AppService
    ) { }

    ngOnInit(): void {
        this.subs.push(this.registrasiService.registrasi.subscribe(data => this.handleRegistrasi(data)))
        this.radiologiService.dataOrder.subscribe(data => this.dataOrder = data)
        this.radiologiService.getDataOrder(this.appService.reformatDate(this.tanggal), this.selectedFilter);

        this.filter = [
            {id: 'waiting', name: 'Waiting'},
            {id: 'completed', name: 'Completed'},
        ];
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.subs.forEach(element => {
            element.unsubscribe()
        });
    }

    handleRegistrasi(data: any){
        this.registrasi = data;
        if(data){
            let tanggal : string = this.appService.reformatDate(this.tanggal);
        }
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
