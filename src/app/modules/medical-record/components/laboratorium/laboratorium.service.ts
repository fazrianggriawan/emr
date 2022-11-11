import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';

@Injectable({
    providedIn: 'root'
})
export class LaboratoriumService {

    dataLab = new BehaviorSubject<any>('');

    constructor(
        private http: HttpClient
    ) {
        this.getDataLab();
    }

    getDataLab(){
        this.http.get<any>(config.api_url('master_lab')).subscribe(data => this.dataLab.next(data));
    }

}
