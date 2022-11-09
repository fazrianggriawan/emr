import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';

@Injectable({
    providedIn: 'root'
})
export class EditBillingService {

    dialog = new BehaviorSubject<boolean>(false);
    billing = new BehaviorSubject<any>('');

    constructor(
        private http: HttpClient
    ) { }

    getBillingById(id: any){
        this.http.get<any>( config.api_url('billing/billingById/'+id) )
            .subscribe(data => {
                this.billing.next(data.data);
            })
    }

    openDialog(status: boolean){
        this.dialog.next(status)
    }
}
