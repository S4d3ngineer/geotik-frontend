import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogRegTabsService {

  // Default tab index of login-register component
  private loginRegisterTabIndex = new BehaviorSubject<number>(0);

  // Exposing loginRegisterTabIndex as plain observable
  tabIndex = this.loginRegisterTabIndex.asObservable();

  // Public method to alter loginRegisterTabIndex value
  setLoginRegisterTabIndex(index: number) {
    this.loginRegisterTabIndex.next(index);
  }

}
