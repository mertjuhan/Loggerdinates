import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgScrollbarModule } from 'ngx-scrollbar';
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {AuthHttpService} from "../../Services/Auth/auth-http.service";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,
    NgScrollbarModule,
    BsDropdownModule, MatSidenavModule, MatButtonModule, MatIconModule],
    animations: [
        trigger('slide', [
            state('up', style({ height: 0 })),
            state('down', style({ height: '*' })),
            transition('up <=> down', animate(200))
        ])
    ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  //mode = new FormControl('push' as MatDrawerMode);
  @Input() data : boolean = true;
  @Input() mode : any;
  constructor() {
  }

  ngOnInit() {
  }



}
