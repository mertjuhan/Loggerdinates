import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import * as oidc from "oidc-client";
import {Router} from "@angular/router";
import {AuthHttpService} from "../../../Services/Auth/auth-http.service";

@Component({
  selector: 'app-callback',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit{

  constructor(private  route : Router,private  auth : AuthHttpService) {
  }
  ngOnInit() {
    new oidc.UserManager({response_mode : "query"}).signinRedirectCallback().then(user => {
      if(user){
        this.auth.isLogged$.next(true);
        this.auth.currentUserValue$.next(user);
        this.route.navigate(["/maps"]);
      }
    })
  }

}
