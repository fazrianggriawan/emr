import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';
import { AppService } from 'src/app/services/app.service';

@Injectable({
    providedIn: 'root'
})
export class DataSepService {

    dataHistory = new BehaviorSubject<any[]>([]);

    constructor(
        private http: HttpClient,
        private appService: AppService
    ) { }

    getDataHistory(nomorKartu: string, from: string, to: string) {
        this.http.get<any>( config.api_vclaim('history/nomorKartu/'+nomorKartu+'/from/'+from+'/to/'+to) )
            .subscribe( data => {
                if( data.metaData.code == '200' ){
                    this.dataHistory.next(data.response.histori)
                }else{
                    this.appService.setNotification('error', data.metaData.message)
                }
            })
    }

    deleteSep(data: any) {
        this.http.post<any>( config.api_vclaim('sep/delete'), data )
            .subscribe(data => {
                if( data.metaData.code == '200' ){
                    this.appService.setNotification('success', data.metaData.message)
                }else{
                    this.appService.setNotification('error', data.metaData.message)
                }
            })
    }

}
