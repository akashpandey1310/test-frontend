import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private tokenservice: TokenStorageService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("Check Auth" + this.tokenservice.getToken());
      //checking if session storage have any token if yes then only profile route will be allowed to access.
      if(!this.tokenservice.getToken())
        {
          console.log('Unauthorized')
          this.router.navigateByUrl('/login');
        }
        return true
  }

}
