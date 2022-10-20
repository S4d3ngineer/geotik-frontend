import { Component } from '@angular/core';
import { LogRegTabsService } from '../../services/log-reg-tabs.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent {

  constructor(
    public tabsService: LogRegTabsService,
  ) { }

}
