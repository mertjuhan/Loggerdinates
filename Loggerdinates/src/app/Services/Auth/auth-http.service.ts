import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import * as oidc from "oidc-client";
import {BehaviorSubject, Observable} from "rxjs";
import {UserCreateModel} from "../../Models/userCreateModel";
import {HttpClient} from "@angular/common/http";

const API_USERS_URL = `${environment.userApiUrl}`;
@Injectable({
  providedIn : "root"
})
export class AuthHttpService {
  config: oidc.UserManagerSettings = {
    authority: API_USERS_URL,
    client_id: "angular-client",
    redirect_uri: "http://localhost:4200/callback",
    post_logout_redirect_uri: "http://localhost:4200/login",
    response_type: "code",
    scope: "api1.write api1.read api1.update profile openid",
  };
  isLogged$ : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  isLogged  :Observable<boolean> = this.isLogged$.asObservable();
  userManager: oidc.UserManager;
  currentUserValue$ : BehaviorSubject<any> = new BehaviorSubject<any>({})
  constructor(private http : HttpClient) {
  this.userManager = new oidc.UserManager(this.config);
 this.userManager.getUser().then(x=>console.log(x))
  }

   async login() {
    await this.userManager.signinRedirect();
  }
  signUp(model : UserCreateModel) {
    return this.http.post<UserCreateModel>(API_USERS_URL,model);
  }
  async logout() {
    await this.userManager.signoutRedirect();
  }
}
