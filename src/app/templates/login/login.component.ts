import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public loginData: any;
    public messageErrorLogin: string = '';
    public formLogin: any;

    constructor(
        private form: FormBuilder,
        private loginService: LoginService,
        private router: Router
    ) { }

    ngOnInit(): void {
        // this.loginService.loginData.subscribe(data => this.handleLogin(data))
        // this.loginService.errorMessage.subscribe(data => this.messageErrorLogin = data)

        this.formLogin = this.form.group({
            username: [null, Validators.required],
            password: [null, Validators.required]
        })
    }

    public listenLogin(e: KeyboardEvent) {
        if (e.code == 'Enter') {
            this.doLogin();
        }
    }

    public doLogin() {
        if( this.formLogin.value.username == 'admin' && this.formLogin.value.password == '440699' ){
            sessionStorage.setItem('login', 'admin')
            this.gotoDashboarPage();
        }

        if( this.formLogin.value.username == 'admin2' && this.formLogin.value.password == 'admin2' ){
            sessionStorage.setItem('login', 'admin2')
            this.gotoDashboarPage();
        }
    }

    public handleLogin(responseLogin: any) {
        if (responseLogin && responseLogin.auth) {
            localStorage.setItem('login', JSON.stringify(responseLogin))
            this.gotoDashboarPage();
        }
    }

    public gotoDashboarPage() {
        this.router.navigateByUrl('rikkes');
    }

}
