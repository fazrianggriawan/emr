import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { config } from 'src/app/config';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';

@Injectable({
    providedIn: 'root'
})
export class AssessmentAwalService {

    dataForm = new BehaviorSubject<any>([]);

    constructor(
        private http: HttpClient,
        private errorHandle: ErrorHandlerService
    ) {}

    getFormRuangan(){
        this.http.get<any>(config.api_url('emr/question'))
            .subscribe(data => this.dataForm.next(data));
    }


}
