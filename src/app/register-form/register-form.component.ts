import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { LogRegTabsService } from '../services/log-reg-tabs.service';
import User from '../user';

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

  repPassword = null;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  register(): void {
    // Generate id for new user
    this.user.id = 'user_' + Math.floor(Math.random() * 10000000);
    const newUser = JSON.stringify(this.user);
    console.log(this.user);
    console.log(newUser);
    this.http.post<User | {msg: string}>(this.registerUrl, newUser, this.httpOptions)
      .subscribe({
        next: response => {
          console.log(response);
          this.tabsService.setLoginRegisterTabIndex(0);
        },
        error: e => console.error(e)
      })
  }

}
