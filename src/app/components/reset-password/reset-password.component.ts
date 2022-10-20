import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  
  email: string | null = null;

  submitted = false;

  message: string | null = null;

  private resetPasswordUrl = 'http://localhost:9090/users/resetPassword';

  // private httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   })
  // } 

  constructor(
    private http: HttpClient,
  ) { }

  onSubmit(): void {
    this.http.post<{msg: string}>(this.resetPasswordUrl, this.email)
      .subscribe({
        next: () => {
          this.submitted = true;
        },
        error: e => {
          console.error(e);
          this.message = e.error.msg;
        }
      });
  }

}
