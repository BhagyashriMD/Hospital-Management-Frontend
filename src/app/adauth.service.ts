import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdauthService {

  constructor() { }

  authenticate(username2: string, password2: string) {


    if (username2 == "admin" && password2 == "123456") {
      sessionStorage.setItem('username2', username2)
      return true;
    }
    else {
      return false;
    }
  }

  isUserLoggedIn() {

    console.log("User is logged in:");
    let user = sessionStorage.getItem('username2');
    return !(user == null)

  }

  logout() {
    sessionStorage.removeItem('username2');
  }
}
