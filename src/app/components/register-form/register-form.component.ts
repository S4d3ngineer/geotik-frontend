import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LogRegTabsService, Tabs } from '../../services/log-reg-tabs.service';

interface User {
  id: string | null;
  email: string | null;
  password: string | null;
}

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {

  constructor(
    private http: HttpClient,
    private tabsService: LogRegTabsService
  ) { }

  private registerUrl = 'http://localhost:9090/users';

  user: User = {
    id: null,
    email: null,
    password: null,
  }

  // Store value form confirm password field
  repPassword = null;

  passwordRegex = new RegExp(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}/);

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  register(registerform: NgForm): void {
    // Generate id for new user
    this.user.id = 'user_' + Math.floor(Math.random() * 10000000);
    const newUser = JSON.stringify(this.user);
    this.http.post<User | {msg: string}>(this.registerUrl, newUser, this.httpOptions)
      .subscribe({
        next: response => {
          console.log(response);
          registerform.resetForm();
          this.tabsService.setLoginRegisterTabIndex(Tabs.Login);
        },
        error: e => console.error(e)
      })
  }

}