import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { config } from '../../config';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    public userData = new BehaviorSubject<any>(null);
    public errorMessage = new BehaviorSubject<string>('');
    public loginData = new BehaviorSubject<any>(null);

    constructor(
        private http: HttpClient
    ) { }

    public login() {
        this.http.post<any>(config.api_url('do_login'), this.userData.value)
            .subscribe( data => {
                if( data.auth ){
                    this.loginData.next(data);
                }else{
                    this.errorMessage.next('Username atau Password anda salah.');
                }
            })
    }

}
