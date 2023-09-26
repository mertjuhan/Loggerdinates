import { Component, OnInit } from '@angular/core';
import {catchError, map, Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  apiLoaded : Observable<boolean>;
  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 4;
  display: google.maps.LatLngLiteral | undefined;

  moveMap(event: google.maps.MapMouseEvent) {
    if(event && event.latLng)
    this.center = (event.latLng.toJSON());
  }

  move(event: google.maps.MapMouseEvent) {
    if(event && event.latLng)
    this.display = event.latLng.toJSON();
  }
  constructor( httpClient : HttpClient) {
    const apiKey = 'AIzaSyBjynIWZP9jgf_gRgnXUevNBEg2A1YQOP4';
  this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key='+apiKey,'callback')
    .pipe(
      map(() => true),
      catchError(() => of(false))
    );

  }

  ngOnInit(): void {

  }

}
