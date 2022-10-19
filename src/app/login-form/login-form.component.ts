import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http'; 

interface User {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  private loginUrl = 'http://localhost:9090/auth/login'

  user: User = {
    email: '',
    password: ''
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

  ngOnInit(): void {
  }

  login(user: User): void {
    console.log(user);
    this.http.post<{msg: string}>(this.loginUrl, user, this.httpOptions)
      .subscribe({
        next: response => this.message = response.msg,
        error: e => {
          console.error(e);
          this.message = e.error.msg;
        }
      });
  }

}
