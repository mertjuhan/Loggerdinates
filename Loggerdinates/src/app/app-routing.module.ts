import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MapComponent} from "./Google-Maps/map/map.component";



const routes: Routes = [
  { path: 'maps', component: MapComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
