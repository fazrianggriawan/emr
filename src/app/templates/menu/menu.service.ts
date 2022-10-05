import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { config } from '../../config';

@Injectable({
    providedIn: 'root'
})
export class MenuService {

    public menuData = new BehaviorSubject<any>('');

    constructor(
        private http: HttpClient,
        private router: Router
    ) { }

    public GetMenu(username: string) {
        this.http.get<any>( config.api_url('app/getMenu/'+username) ).subscribe(data =>  {
            if(data.code == 200){
                this.menuData.next(data.data);
            }
        } )
    }

}
