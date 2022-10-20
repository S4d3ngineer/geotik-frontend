import { Component } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  
  email: string | null = null;
  
  constructor() { }

  sendLink() {
    console.log("It works");
  }

}
