import { Component, OnInit } from '@angular/core';
import { backendURL_login } from '../../api-routes/login-route';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginInvalid = false;

  constructor(private router: Router) { }

  ngOnInit() {
    document.getElementById("loginForm").addEventListener("click", (e) => {
      e.preventDefault();
    })
  }

  submitLogin(event) {

    let form_datas = new FormData(<HTMLFormElement>document.getElementById("loginForm"));
    console.log(form_datas.get("password"));

    fetch(backendURL_login, {
      method: "POST",
      body: form_datas
    }).then(resolved => resolved.text())
      .then(resolved => {
        console.log(resolved);
        if (!resolved) {
          // alert("Login failed \n Check back your password of officer_code");
          this.loginInvalid = true;
        } else {
          // localStorage.setItem('officer_code_true', resolved);
          localStorage.setItem('official_code', form_datas.get('officer_code').toString());
          localStorage.setItem('password', form_datas.get('password').toString());
          this.loginInvalid = false;
          this.router.navigate(['/dashboard']);
        }
      })

  }

}
