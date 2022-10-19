import { Component, OnInit } from '@angular/core';
import { LogRegTabsService } from '../services/log-reg-tabs.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {

  constructor(
    public tabsService: LogRegTabsService,
  ) { }

  ngOnInit(): void {
  }

}
