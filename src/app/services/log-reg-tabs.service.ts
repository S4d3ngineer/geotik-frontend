import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum Tabs {
  Login = 0,
  Register = 1,
}

@Injectable({
  providedIn: 'root'
})
export class LogRegTabsService {

  // Default tab index of login-register component
  private loginRegisterTabIndex = new BehaviorSubject<Tabs>(0);

  // Exposing loginRegisterTabIndex as plain observable
  tabIndex = this.loginRegisterTabIndex.asObservable();

  // Public method to alter loginRegisterTabIndex value
  setLoginRegisterTabIndex(index: Tabs) {
    this.loginRegisterTabIndex.next(index);
  }

}
