import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

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
        this.loginService.loginData.subscribe(data => this.handleLogin(data))
        this.loginService.errorMessage.subscribe(data => this.messageErrorLogin = data)

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
        this.loginService.userData.next(this.formLogin.value);
        this.loginService.login();
    }

    public handleLogin(responseLogin: any) {
        if (responseLogin && responseLogin.auth) {
            localStorage.setItem('login', JSON.stringify(responseLogin))
            this.gotoDashboarPage();
        }
    }

    public gotoDashboarPage() {
        this.router.navigateByUrl('urologi');
    }

}
