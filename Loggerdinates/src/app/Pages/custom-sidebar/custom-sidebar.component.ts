import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {AuthHttpService} from "../../Services/Auth/auth-http.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-custom-sidebar',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterLink],
  templateUrl: './custom-sidebar.component.html',
  styleUrls: ['./custom-sidebar.component.scss']
})
export class CustomSidebarComponent {

  constructor(private auth : AuthHttpService) {
  }

  logout(){
    this.auth.logout();
  }
}
