import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';

@Injectable({
    providedIn: 'root'
})
export class BillingService {

    tarif = new BehaviorSubject<any>('');
    categoryTarif = new BehaviorSubject<any>('');
    dataBilling = new BehaviorSubject<any>('');
    dataPembayaran = new BehaviorSubject<any>('');
    saveStatus = new BehaviorSubject<boolean>(false);
    deleteStatus = new BehaviorSubject<boolean>(false);
    updateStatus = new BehaviorSubject<boolean>(false);
    addDiscountStatus = new BehaviorSubject<boolean>(false);
    addPembayaranStatus = new BehaviorSubject<boolean>(false);
    deletePembayaranStatus = new BehaviorSubject<boolean>(false);
    totalBilling = new BehaviorSubject<any>('');

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

    public getBillingDetailByUnit(noreg: string, unit: string){
        this.http.get<any>(config.api_url('billing/billingDetailByUnit/'+noreg+'/'+unit))
            .subscribe(data => {
                this.dataBilling.next(data.data);
            })
    }

    public getBillingByHead(idBillingHead: string) {
        this.http.get<any>( config.api_url('billing/billingByHead/'+idBillingHead) )
            .subscribe(data => {
                this.dataBilling.next(data.data);
            })
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

    public getBillingByNoreg(noreg: string, status: string) {
        if (noreg) {
            this.http.get<any>(config.api_url('billing/billingByNoreg/' + noreg +'/'+status))
                .subscribe(data => {
                    this.dataBilling.next(data.data);
                    this.getTotalBilling(data.data);
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

    public hitungTotalBilling(item: any) {
        let total = 0;
        total = (parseInt(item.r_tarif_harga.harga) * parseInt(item.qty));
        if (parseInt(item.discount_percent) > 0) {
            total = total - (total * (parseInt(item.discount_percent) / 100))
        }
        return total;
    }

    public getTotalBilling(dataBilling: any) {
        if (dataBilling.length > 0) {
            let totalBilling = 0;
            dataBilling.forEach((item: any) => {
                totalBilling = totalBilling + this.hitungTotalBilling(item)
            });
            this.totalBilling.next(totalBilling);
        }else{
            this.totalBilling.next('0');
        }

    }

}
