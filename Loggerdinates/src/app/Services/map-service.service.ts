import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MapServiceService {
  apiKey : string = "AIzaSyBjynIWZP9jgf_gRgnXUevNBEg2A1YQOP4";
  private apiLoaded : Observable<boolean> = new Observable<boolean>();
  constructor(private httpService : HttpClient) { }

    LoadMap() : Observable<boolean> {
        this.apiLoaded = this.httpService.jsonp('https://maps.googleapis.com/maps/api/js?key='+this.apiKey,'callback')
            .pipe(
                map(() => true),
                catchError(() => of(false))
            );
        return this.apiLoaded;
    }
}
