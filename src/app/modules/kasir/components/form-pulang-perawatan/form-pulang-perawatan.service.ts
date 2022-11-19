import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';
import { AppService } from 'src/app/services/app.service';

@Injectable({
    providedIn: 'root'
})
export class FormPulangPerawatanService {

    dialog = new BehaviorSubject<boolean>(false);
    pulangPerawatan = new BehaviorSubject<any>('');

    constructor(
        private http: HttpClient,
        private appService: AppService
    ) { }

    save(data: any){
        this.http.post<any>(config.api_url('registrasi/pulangPerawatan'), data)
            .subscribe(data => {
                if(data.code == 200){
                    this.openDialog(false);
                    this.appService.setNotification('success', data.message);
                }else{
                    this.appService.setNotification('error', data.message);
                }
            })
    }

    getPulangPerawatan(noreg: string){
        this.http.get<any>(config.api_url('registrasi/tanggalPulang/'+noreg))
            .subscribe(data => {
                if(data.code == 200){
                    this.pulangPerawatan.next(data.data);
                }else{
                    this.appService.setNotification('error', data.message);
                }
            })
    }

    openDialog(status: boolean){
        this.dialog.next(status);
    }
}
