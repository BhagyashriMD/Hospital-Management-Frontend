import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';
import { AdauthService } from '../adauth.service';

@Component({
  selector: 'app-adlogin',
  templateUrl: './adlogin.component.html',
  styleUrl: './adlogin.component.css'
})
export class AdloginComponent {


  username: string = "";
  password: string = "";
  inValidLogin = false;

  constructor(private router: Router, private adauth: AdauthService) { }

  checkLogin() {

    if (this.adauth.authenticate(this.username, this.password)) {

      this.router.navigate(['admin'])
      this.inValidLogin = false;

    }
    else {
      this.inValidLogin = true
      alert("Wrong Credintials")
      this.router.navigate(['home'])

    }
  }

}
