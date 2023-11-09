import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
    imports: [
        MatToolbarModule,
        MatIconModule,
        NgIf,
    ],
  standalone: true
})
export class ToolbarComponent {
@Input() data :boolean = false;
@Output() isOpenedChanged: EventEmitter<string> = new EventEmitter<string>();

toggleSidebar() {
    this.isOpenedChanged.emit(); // Sidebar bileşenine olayı gönder
  }
}
