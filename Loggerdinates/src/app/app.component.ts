import {Component,OnInit} from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    RouterOutlet
  ],
  standalone: true
})
export class AppComponent implements OnInit{
  title = 'Loggerdinates';
  constructor() {

  }
  ngOnInit() {

  }

}
