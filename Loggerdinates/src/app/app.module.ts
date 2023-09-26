import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MapComponent } from './Google-Maps/map/map.component';
import {GoogleMapsModule} from "@angular/google-maps";
import { AppRoutingModule } from './app-routing.module';
import {HttpClientJsonpModule, HttpClientModule} from "@angular/common/http";
import {MatToolbarModule} from "@angular/material/toolbar";

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
