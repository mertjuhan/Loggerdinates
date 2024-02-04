import {Component, HostListener, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomSidebarComponent} from "../custom-sidebar/custom-sidebar.component";
import {MatSidenav, MatSidenavModule} from "@angular/material/sidenav";
import {RouterOutlet} from "@angular/router";
import {ToolbarComponent} from "../toolbar/toolbar.component";

@Component({
  selector: 'app-layout',
  standalone: true,
    imports: [CommonModule, CustomSidebarComponent, MatSidenavModule, RouterOutlet, ToolbarComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
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
