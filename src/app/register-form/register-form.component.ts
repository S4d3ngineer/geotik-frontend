import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import User from '../user';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  private registerUrl = 'http://localhost:9090/users';

  user: User = {
    id: null,
    email: null,
    password: null,
  }

  repPassword = null;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  register(): void {
    this.user.id = 'user_' + Math.floor(Math.random() * 10000000);
    const newUser = JSON.stringify(this.user);
    console.log(this.user);
    console.log(newUser);
    this.http.post<User>(this.registerUrl, newUser, this.httpOptions)
      .subscribe({
        next: response => console.log(response),
        error: e => console.error(e)
      })
  }

}
