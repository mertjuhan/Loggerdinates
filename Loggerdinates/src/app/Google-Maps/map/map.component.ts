import {Component, OnInit, ViewChild} from '@angular/core';
import {findIndex, Observable} from "rxjs";
import {MatToolbarModule} from "@angular/material/toolbar";
import {GoogleMapsModule, MapInfoWindow, MapMarker} from "@angular/google-maps";
import {AsyncPipe, CommonModule, NgIf} from "@angular/common";
import {MapServiceService} from "../../Services/map-service.service";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  imports: [
    MatToolbarModule,
    GoogleMapsModule,
    NgIf,
    AsyncPipe,
    CommonModule,
    MatButtonModule
  ],
  standalone: true
})
export class MapComponent implements OnInit {
  apiLoaded : Observable<boolean>;
  selectedMarker : any;
  center: google.maps.LatLngLiteral = {lat: 38.5184, lng: 27.13824};
  zoom = 12;
  markerPositions: google.maps.LatLngLiteral[] = [];
  display: google.maps.LatLngLiteral | undefined;
  markerOptions: google.maps.MarkerOptions = {draggable: true};
  @ViewChild(MapInfoWindow) infoWindow! : MapInfoWindow;
  // moveMap(event: google.maps.MapMouseEvent) {
  //   if(event && event.latLng)
  //   this.center = (event.latLng.toJSON());
  // }
  openInfoWindow(marker: MapMarker) {
    this.selectedMarker = marker;
    this.infoWindow.open(marker);
  }

  move(event: google.maps.MapMouseEvent) {
    if(event && event.latLng)
    this.display = event.latLng.toJSON();
  }
  addMarker(event: google.maps.MapMouseEvent) {
    if(event && event.latLng)
    this.markerPositions.push(event.latLng.toJSON());
  }
  constructor( private mapService : MapServiceService) {
   this.apiLoaded = this.mapService.LoadMap();
  }
  deleteMarker() : void {
    //this.markerPositions
    console.log(this.markerPositions)
   const data = this.markerPositions.find(x=> x.lat === this.selectedMarker.getPosition().lat() && x.lng === this.selectedMarker.getPosition().lng())
    if(data) {
      const dataIndex = this.markerPositions.indexOf(data)
      this.markerPositions.splice(dataIndex,1);
    }

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
