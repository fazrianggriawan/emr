import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';
import { AppService } from 'src/app/services/app.service';

@Injectable({
    providedIn: 'root'
})
export class HasilRadiologiService {

    dialog = new BehaviorSubject<boolean>(false)
    hasil = new BehaviorSubject<any>('')

    constructor(
        private http: HttpClient,
        private appService: AppService
    ) { }

    saveHasil(data: any) {
        this.http.post<any>(config.api_url('radiologi/saveHasil'), data)
            .subscribe(data => {
                if (data.code == 200) {
                    this.appService.setNotification('success', data.message);
                    this.openDialog(false);
                } else {
                    this.appService.setNotification('error', data.message);
                }
            })
    }

    getHasil(idBillingHead: any) {
        this.http.get<any>(config.api_url('radiologi/getHasil/' + idBillingHead))
            .subscribe(data => {
                if (data.code == 200) {
                    this.hasil.next(data.data)
                }

            })
    }

    openDialog(status: boolean) {
        this.dialog.next(status)
    }
}
