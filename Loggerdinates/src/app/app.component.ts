import {Component, HostListener, ViewChild} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {SidebarComponent} from "./Pages/sidebar/sidebar.component";
import {ToolbarComponent} from "./Pages/toolbar/toolbar.component";
import {NgIf} from "@angular/common";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenav, MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {CustomSidebarComponent} from "./Pages/custom-sidebar/custom-sidebar.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    RouterOutlet,
    SidebarComponent,
    ToolbarComponent,
    NgIf,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    CustomSidebarComponent,
  ],
  standalone: true
})
export class AppComponent {
  title = 'Loggerdinates';
  @ViewChild('sideNav') sidenav! : MatSidenav;
  showSidebar: boolean = true; // Başlangıçta sidebar'ı görünür yapabilirsiniz.
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    // Pencere boyutunu kontrol edin
    this.showSidebar = window.innerWidth > 768;
  }
  toggleSidebar() {
      this.sidenav.toggle();
  }
}
