import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin = this.form.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
  })

  doLogin(){
    console.log(this.formLogin.value);
  }

  constructor(
    private form: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
