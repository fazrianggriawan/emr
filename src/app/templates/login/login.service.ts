import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { config } from '../../config';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    public errorMessage = new BehaviorSubject<string>('');
    public loginData = new BehaviorSubject<any>(null);
    public defaultRuangan = new BehaviorSubject<any>(null);

    constructor(
        private http: HttpClient,
        private router: Router
    ) { }

    public login(data: any) {
        this.http.post<any>( config.api_url('do_login'), data ).subscribe(data =>  {
            if(data.code == 200){
                this.loginData.next(data.data);
            }else{
                this.errorMessage.next('Username atau password anda salah.')
            }
        } )
    }

    public getDefaultRuanganByUsername(username: string) {
        this.http.get<any>( config.api_url('app/ruanganByUsername/'+username) ).subscribe(data =>  {
            if(data.code == 200){
                this.defaultRuangan.next(data.data);
            }
        } )
    }

}
