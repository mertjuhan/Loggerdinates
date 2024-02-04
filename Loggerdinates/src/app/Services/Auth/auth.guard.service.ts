import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot} from "@angular/router";
import {AuthHttpService} from "./auth-http.service";
import {firstValueFrom, from} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService : AuthHttpService,private router : Router) { }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = await firstValueFrom(from(this.authService.userManager.getUser()))
    console.log(user)
    if (user) {
      // logged in so return true
      return true;
    }
    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'])
    return false;
  }
}
