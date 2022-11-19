import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';
import { AppService } from 'src/app/services/app.service';

@Injectable({
    providedIn: 'root'
})
export class EKlaimService {

    sep = new BehaviorSubject<any>('');
    billing = new BehaviorSubject<any>('');
    klaim = new BehaviorSubject<any>('');

    constructor(
        private http: HttpClient,
        private appService: AppService
    ) { }

    newKlaim(data: any){
        this.http.post<any>(config.api_url('eklaim/newKlaim'), data)
            .subscribe(data => {
                if( data.code == 200 ){
                    this.appService.setNotification('success', data.message);
                }else{
                    this.appService.setNotification('error', data.message);
                }
            })
    }

    getBillingGroupEklaim(noreg: string){
        this.http.get<any>(config.api_url('eklaim/billingGroupEklaim/'+noreg))
            .subscribe(data => {
                if( data.code == 200 ){
                    this.billing.next(data.data);
                }else{
                    this.appService.setNotification('error', data.message);
                }

            })
    }

    save(data: any){
        this.http.post<any>(config.api_url('eklaim/save'), data)
            .subscribe(data => {
                if( data.code == 200 ){
                    this.klaim.next(data.data);
                    this.appService.setNotification('success', data.message);
                }else{
                    this.appService.setNotification('error', data.message);
                }
            })
    }

    groupingStage1(data: any){
        this.http.post<any>(config.api_url('eklaim/grouping/1'), data)
            .subscribe(data => {
                if( data.code == 200 ){
                    this.appService.setNotification('success', data.message);
                }else{
                    this.appService.setNotification('error', data.message);
                }
            })
    }

    editUlang(data: any){
        this.http.post<any>(config.api_url('eklaim/edit'), data)
            .subscribe(data => {
                if( data.code == 200 ){
                    this.appService.setNotification('success', data.message);
                }else{
                    this.appService.setNotification('error', data.message);
                }
            })
    }

    finalisasi(data: any){
        this.http.post<any>(config.api_url('eklaim/finalisasi'), data)
            .subscribe(data => {
                if( data.code == 200 ){
                    this.appService.setNotification('success', data.message);
                }else{
                    this.appService.setNotification('error', data.message);
                }
            })
    }

    getSepByNoreg(noreg: string){
        this.http.get<any>(config.api_url('eklaim/sepByNoreg/'+noreg))
            .subscribe(data => {
                if( data.code == 200 ){
                    this.sep.next(data.data);
                }else{
                    this.appService.setNotification('error', data.message)
                }
            })
    }

    updateSep(data: any){
        this.http.post<any>(config.api_url('eklaim/updateSep'), data)
            .subscribe(data => {
                if( data.code == 200 ){
                    this.getSepByNoreg(data.data.noreg);
                    this.appService.setNotification('success', data.message);
                }else{
                    this.appService.setNotification('error', data.message);
                }
            })
    }

}
