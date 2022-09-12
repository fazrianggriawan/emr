import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';

@Injectable({
    providedIn: 'root'
})
export class BillingService {

    tarif = new BehaviorSubject<any>([]);
    categoryTarif = new BehaviorSubject<any>([]);
    dataBilling = new BehaviorSubject<any>([]);
    dataPembayaran = new BehaviorSubject<any>([]);
    saveStatus = new BehaviorSubject<boolean>(false);
    deleteStatus = new BehaviorSubject<boolean>(false);
    updateStatus = new BehaviorSubject<boolean>(false);
    addDiscountStatus = new BehaviorSubject<boolean>(false);
    addPembayaranStatus = new BehaviorSubject<boolean>(false);
    deletePembayaranStatus = new BehaviorSubject<boolean>(false);

    constructor(
        private http: HttpClient
    ) {
        this.getCategory();
    }

    public getTarifByCategory(categoryId: string) {
        this.http.get<any>(config.api_url('tarif/byCategory/' + categoryId))
            .subscribe(data => this.tarif.next(data.data))
    }

    public getCategory() {
        this.http.get<any>(config.api_url('tarif/category'))
            .subscribe(data => this.categoryTarif.next(data.data))
    }

    public save(data: any) {
        this.http.post<any>(config.api_url('billing/save'), data)
            .subscribe(data => {
                if (data.code == 200) {
                    this.saveStatus.next(true);
                }else{
                    alert(data.message)
                }
            })
    }

    public deleteBilling(data: any) {
        this.http.post<any>(config.api_url('billing/delete'), data)
            .subscribe(data => {
                if( data.code == 200 ){
                    this.deleteStatus.next(true);
                }
            })
    }

    public getBillingByNoreg(noreg: string) {
        if (noreg) {
            this.http.get<any>(config.api_url('billing/billingByNoreg/' + noreg))
                .subscribe(data => {
                    this.dataBilling.next(data.data)
                })
        }
    }

    public addDiscount(data: any) {
        this.http.post<any>(config.api_url('billing/addDiscount'), data)
            .subscribe(data => {
                if( data.code == 200 ){
                    this.addDiscountStatus.next(true);
                }
            })
    }

    public updateJumlah(data: any) {
        this.http.post<any>(config.api_url('billing/updateJumlah'), data)
            .subscribe(data => {
                if(data.code == 200){
                    this.updateStatus.next(true);
                }
            })
    }

    public addPembayaran(data: any){
        this.http.post<any>(config.api_url('billing/addPembayaran'), data)
            .subscribe(data => {
                if(data.code == 200){
                    this.addPembayaranStatus.next(true);
                }
            })
    }

    public getDataPembayaran(noreg: string){
        this.http.get<any>(config.api_url('billing/dataPembayaran/'+noreg))
            .subscribe(data => {
                if(data.code == 200){
                    this.dataPembayaran.next(data.data);
                }
            })
    }

    public deletePembayaran(data: string){
        this.http.post<any>(config.api_url('billing/deletePembayaran'), data)
            .subscribe(data => {
                if(data.code == 200){
                    this.deletePembayaranStatus.next(true);
                }
            })
    }

}
