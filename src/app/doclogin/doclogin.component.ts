import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';

@Component({
  selector: 'app-doclogin',
  templateUrl: './doclogin.component.html',
  styleUrl: './doclogin.component.css'
})
export class DocloginComponent {

  username: string = "";
  password: string = "";
  inValidLogin = false;

  constructor(private router: Router, private docauth: DocauthService) { }
  //constructor(private router: Router) { }
  checkLogin() {

    if (this.docauth.authenticate(this.username, this.password)) {

      this.router.navigate(['docdash'])
      this.inValidLogin = false;

    }

    // if (this.username == "admin" && this.password == "123456") {
    //   console.log("correct credentials")
    //   sessionStorage.setItem('username', this.username);

    //   this.router.navigate(['docdash']);
    //   return true;

    // }
    else {
      this.inValidLogin = true
      alert("Wrong Credintials")
      this.router.navigate(['home'])

    }

    // else {
    //   console.log("Incorrect credentials")
    //   alert("Wrong credentials")
    //   this.router.navigate(['home'])
    //   return false;


    // }
  }
}
