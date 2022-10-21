import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TabsService, Tabs } from '../../services/tabs.service';

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

  user: User = {
    id: null,
    email: null,
    password: null,
  }

  // Store value form confirm password field
  repPassword = null;

  // Regular expression for validating regex
  passwordRegex = new RegExp(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}/);

  // Variable for storing error response messages
  message: string | null = null;

  private registerUrl = 'http://localhost:9090/users';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private http: HttpClient,
    private tabsService: TabsService
  ) { }

  onSubmit(registerform: NgForm): void {
    // Generate id for new user
    this.user.id = 'user_' + Math.floor(Math.random() * 10000000);
    const newUser = JSON.stringify(this.user);
    this.http.post<User | {msg: string}>(this.registerUrl, newUser, this.httpOptions)
      .subscribe({
        next: response => {
          console.log(response);
          registerform.resetForm();
          this.tabsService.setTabIndex(Tabs.Login);
        },
        error: e => {
          console.error(e);
          this.message = e.error.msg;
        }
      })
  }

}
