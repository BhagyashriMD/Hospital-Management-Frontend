import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdauthService {

  constructor() { }

  authenticate(username: string, password: string) {

    if (username == "admin" && password == "123456") {
      sessionStorage.setItem('username', username)
      return true
    }
    else {
      return false;
    }
  }
}
