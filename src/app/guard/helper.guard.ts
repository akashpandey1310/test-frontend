import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class HelperGuard implements CanActivate {

  constructor(private tokenservice: TokenStorageService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("Check Auth" + this.tokenservice.getToken());
      if(this.tokenservice.getToken())
        {
          console.log('authorized')
          this.router.navigateByUrl('/profile');
        }
        return true
  }

}
