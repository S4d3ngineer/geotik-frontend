import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum Tabs {
  Login = 0,
  Register = 1,
}

@Injectable({
  providedIn: 'root'
})
export class TabsService {

  // Default tab index of login-register component
  private tabIndexSubject = new BehaviorSubject<Tabs>(0);

  // Exposing loginRegisterTabIndex as plain observable
  tabIndex = this.tabIndexSubject.asObservable();

  // Public method to alter loginRegisterTabIndex value
  setTabIndex(index: Tabs) {
    this.tabIndexSubject.next(index);
  }

}
