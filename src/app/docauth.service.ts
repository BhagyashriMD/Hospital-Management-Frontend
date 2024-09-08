import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocauthService {

  constructor() { }
  authenticate(username: string, password: string) {

    if (username == "doctor" && password == "123456") {
      sessionStorage.setItem('username', username)
      return true
    }
    else {
      return false;
    }
  }

}
