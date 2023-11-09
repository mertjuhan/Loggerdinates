import {Component, OnInit, ViewChild} from '@angular/core';
import { Observable} from "rxjs";
import {MatToolbarModule} from "@angular/material/toolbar";
import {GoogleMapsModule, MapInfoWindow, MapMarker} from "@angular/google-maps";
import {AsyncPipe, CommonModule, NgIf} from "@angular/common";
import {MapServiceService} from "../../Services/map-service.service";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {SidebarComponent} from "../../Pages/sidebar/sidebar.component";
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import * as mgrs from "mgrs";
import {CoordinateValidatorDirective} from "../../Directives/coordinate-valide-directive.directive";
import {MatFormFieldModule} from "@angular/material/form-field";

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
    MatButtonModule,
    MatInputModule,
    SidebarComponent,
    ReactiveFormsModule,
    CoordinateValidatorDirective,
    MatFormFieldModule
  ],
  standalone: true
})
export class MapComponent implements OnInit {
  apiLoaded : Observable<boolean>;
  selectedMarker : any;
  center: google.maps.LatLngLiteral = {lat: 38.5184, lng: 27.13824};
  zoom = 12;
  coordinateControl : FormControl = new FormControl<any>('',{
    updateOn: 'blur' })
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
  searchCoordinatInMap(data:any) {
    let marsCoordinate : any;
    if(this.coordinateControl.valid && data){
      const newData = data.trim().split(',')
      if(newData.length > 1) {
        marsCoordinate = mgrs.forward([Number(newData[0]),Number(newData[1])])
        this.center = {lat : Number(newData[0]),lng : Number(newData[1])};
        this.markerPositions.push( this.center)
        this.display = this.center;
        this.zoom = 14;
      }else {
        marsCoordinate = mgrs.toPoint(newData[0]);
        this.center = {lat : marsCoordinate[0],lng : marsCoordinate[1]};
        this.markerPositions.push( this.center);
        this.display = this.center;
        this.zoom = 14;
      }
    }
    // const latitude = 40.7128;
    // const longitude = -74.0060;
    //const marsCoordinate : [number,number] = mgrs.toPoint('37CET5267186535');
    // this.center = {lat : marsCoordinate[0],lng : marsCoordinate[1]};
    // this.display = this.center;
    console.log(marsCoordinate)
  }

  ngOnInit(): void {
    this.coordinateControl.valueChanges.subscribe((value) => {
      this.searchCoordinatInMap(value)
    })
    if (navigator.geolocation && this.apiLoaded) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          let pos: { lng: number; lat: number };
          pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          this.markerPositions.push(pos)
          this.center = pos;
        });
    }
  }
}
