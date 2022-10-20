import { Component } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http'; 
import { NgForm } from '@angular/forms';
import User from '../user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  private loginUrl = 'http://localhost:9090/auth/login'

  user: User = {
    email: null,
    password: null
  }

  message: string | null = null;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 

  constructor(
    private http: HttpClient,
  ) { }

 // onSubmit(loginForm: NgForm) {
  //   this.login();
  //   loginForm.resetForm();
  // }

  login(loginForm: NgForm): void {
    this.http.post<{msg: string}>(this.loginUrl, this.user, this.httpOptions)
      .subscribe({
        next: response => {
          this.message = response.msg;
          loginForm.resetForm();
        },
        error: e => {
          console.error(e);
          this.message = e.error.msg;
        }
      });
  }

}
