import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';

@Injectable({
    providedIn: 'root'
})
export class DiagnosaProsedurService {

    public icd10 = new BehaviorSubject<any>('');
    public icd9 = new BehaviorSubject<any>('');

    constructor(
        private http: HttpClient
    ) {
        this.getIcd10();
        this.getIcd9();
    }

    getIcd10() {
        this.http.get<any>(config.api_url('icd10')).subscribe(data => this.icd10.next(data));
    }

    getIcd9() {
        this.http.get<any>(config.api_url('icd9')).subscribe(data => this.icd9.next(data));
    }

}
