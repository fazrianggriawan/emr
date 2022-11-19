import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';
import { AppService } from 'src/app/services/app.service';
import { TarifService } from '../tarif.service';

@Injectable({
    providedIn: 'root'
})
export class DetailTarifService {

    dialog = new BehaviorSubject<boolean>(false);
    detailTarif = new BehaviorSubject<any>('');

    constructor(
        private http: HttpClient,
        private appService: AppService,
        private tarifService: TarifService
    ) { }

    getDetailTarif(id: any){
        this.http.get<any>(config.api_url('master/detailTarif/'+id))
            .subscribe(data => {
                this.detailTarif.next(data.data);
            })
    }

    save(data: any){
        this.http.post<any>(config.api_url('master/tarif/save'), data)
            .subscribe(data => {
                if(data.code == 200){
                    this.tarifService.getDataTarif();
                    this.openDialog(false);
                    this.appService.setNotification('success', data.message)
                }else{
                    this.appService.setNotification('error', data.message)
                }
            })
    }

    openDialog(status: boolean){
        this.dialog.next(status);
    }
}
