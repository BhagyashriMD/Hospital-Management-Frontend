import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AdauthService } from './adauth.service';
@Injectable({
  providedIn: 'root'
})
export class AdminauthguardService implements CanActivate {

  constructor(private adauthService: AdauthService, private router: Router) { }
  canActivate() {
    if (this.adauthService.isUserLoggedIn()) {
      return true;
    }

    else {
      this.router.navigate(['adlogin'])
      return false;
    }
  }
}
