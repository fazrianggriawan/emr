import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msgFailedLogin: string = '';

  formLogin = this.form.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
  })

  listenLogin(e:any){
    if( e.keyCode == 13 ){
      this.doLogin();
    }
  }

  doLogin(){
    this.loginService.doLogin(this.formLogin.value).subscribe(data=>{
      if( data.auth == true ){
        var a = JSON.stringify(data);
        localStorage.setItem('login', a);
        this.router.navigateByUrl('urologi');
      }else{
        this.msgFailedLogin = 'Username atau password anda salah.'
      }
    })
  }

  constructor(
    private form: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

}
