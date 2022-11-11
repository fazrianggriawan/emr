import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';
import { AppService } from 'src/app/services/app.service';

@Injectable({
    providedIn: 'root'
})
export class HistoryService {

    dataHistory = new BehaviorSubject<any>('');
    actionStatus = new BehaviorSubject<boolean>(false);
    sep = new BehaviorSubject<any>('');

    constructor(
        private http: HttpClient,
        private appService: AppService
    ) { }

    public getDataHistory(nomorKartu: string, from: Date, to: Date) {
        let filterFrom = this.appService.reformatDate(from);
        let filterTo = this.appService.reformatDate(to);

        this.http.get<any>( config.api_vclaim('history/nomorKartu/'+nomorKartu+'/from/'+filterFrom+'/to/'+filterTo) )
            .subscribe( data => this.dataHistory.next(data.response) )
    }

    public deleteSep(data: any) {
        this.http.post<any>( config.api_vclaim('sep/delete'), data )
            .subscribe(data => {
                if( data.metaData.code == '200' ){
                    this.actionStatus.next(true);
                    this.appService.setNotification('success', data.metaData.message)
                }else{
                    this.actionStatus.next(false);
                    this.appService.setNotification('error', data.metaData.message)
                }
            })
    }
}
