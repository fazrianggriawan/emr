import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrasiService } from 'src/app/modules/registrasi/services/registrasi.service';
import { LoginService } from './login.service';
import { Subscription } from "rxjs";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

    public loginData: any;
    public messageErrorLogin: string = '';
    public formLogin: any;

    subs: Subscription[] = [];

    constructor(
        private form: FormBuilder,
        private loginService: LoginService,
        private router: Router,
        private registrasiService: RegistrasiService
    ) { }

    ngOnInit(): void {
        sessionStorage.clear();
        this.subs.push(this.loginService.loginData.subscribe(data => this.handleLogin(data)))

        this.registrasiService.registrasi.next('');

        this.formLogin = this.form.group({
            username: [null, Validators.required],
            password: [null, Validators.required]
        })
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.subs.forEach(element => {
            element.unsubscribe();
        });
    }

    public listenLogin(e: KeyboardEvent) {
        if (e.code == 'Enter') {
            this.doLogin();
        }
    }

    public doLogin() {
        this.loginService.login(this.formLogin.value)
    }

    public handleLogin(responseLogin: any) {
        if (responseLogin) {
            if (responseLogin.auth) {
                localStorage.setItem('login', JSON.stringify(responseLogin))
                this.gotoDashboarPage();
            }
        }
    }

    public gotoDashboarPage() {
        this.router.navigateByUrl('registrasi');
    }

}
