import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { config } from 'src/app/config';

@Injectable({
    providedIn: 'root'
})
export class RikkesService {

    constructor(
        private http: HttpClient
    ) { }

    public save(data: any) {
        this.http.post<any>( config.api_url('rikkes/save'), data )
            .subscribe(data => console.log(data))
    }

}
