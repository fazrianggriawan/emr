import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';
import { AppService } from 'src/app/services/app.service';

@Injectable({
    providedIn: 'root'
})
export class EditRegistrasiService {

    dialog = new BehaviorSubject<boolean>(false);

    constructor(
        private http: HttpClient,
        private appService: AppService
    ) { }

    cancelRegistrasi(data: any){
        this.http.post<any>(config.api_url('registrasi/cancel'), data)
            .subscribe(data => {
                if(data.code == 200){
                    this.appService.setNotification('success', data.message);
                }else{
                    this.appService.setNotification('error', data.message);
                }
            })
    }

    updateRegistrasi(data: any){
        this.http.post<any>(config.api_url('registrasi/update'), data)
            .subscribe(data => {
                if(data.code == 200){
                    this.appService.setNotification('success', data.message);
                }else{
                    this.appService.setNotification('error', data.message);
                }
            })
    }

    openDialog(status: boolean){
        this.dialog.next(status);
    }
}
