import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from 'src/app/config';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FormEmrService {

    data = new BehaviorSubject<any>('');
    selectedForm  = new BehaviorSubject<any>('');

    constructor(
        private http: HttpClient
    ) { }

    getData(){
        this.http.get<any>(config.api_url('setting/emr/form-ruangan'))
            .subscribe(data => {
                this.data.next(data);
            })
    }

}
