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
  center: google.maps.LatLngLiteral = {lat: 38.5184, lng: 27.13824};
  zoom = 12;
  display: google.maps.LatLngLiteral | undefined;
  //infoWindow : google.maps.InfoWindow = new google.maps.InfoWindow();
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
    if (navigator.geolocation && this.apiLoaded) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          let pos: { lng: number; lat: number };
          pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

         // this.infoWindow.setPosition(pos);
         // this.infoWindow.setContent("Location found.");
          //this.infoWindow.open(map);
          this.center = pos;
        });
    }
  }
}
