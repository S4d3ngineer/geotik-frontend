import { Component } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http'; 
import { NgForm } from '@angular/forms';

interface User {
  email: string | null;
  password: string | null; 
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  user: User = {
    email: null,
    password: null
  }

  // Variable for storing error response messages
  message: string | null = null;

  private loginUrl = 'http://localhost:9090/auth/login'

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 

  constructor(
    private http: HttpClient,
  ) { }

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
