import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';

@Injectable({
    providedIn: 'root'
})
export class AddFormEmrService {

    dataParent = new BehaviorSubject<any>([]);
    dataControlType = new BehaviorSubject<any>([]);
    save = new BehaviorSubject<boolean>(false);

    constructor(
        private http: HttpClient
    ) { }

    getDataParent(id_form: number) {
        this.http.get<any>(config.api_url('emr/parent/' + id_form))
            .subscribe(data => {
                this.dataParent.next(data.data);
            })
    }

    getDataControlType() {
        this.http.get<any>(config.api_url('emr/controltype'))
            .subscribe(data => {
                this.dataControlType.next(data.data);
            })
    }

    saveFormRuangan(data: any){
        this.http.post<any>(config.api_url('emr/save/emr-form-ruangan'), data)
            .subscribe(data => {
                if(data.code == 200){
                    this.save.next(true);
                }
            })
    }

}
