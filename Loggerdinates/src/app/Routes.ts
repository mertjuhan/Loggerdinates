import {Route} from "@angular/router";
import {MapComponent} from "./Google-Maps/map/map.component";
import {LoginComponent} from "./Pages/Auth/login/login.component";
import {AuthGuardService} from "./Services/Auth/auth.guard.service";
import {CallbackComponent} from "./Pages/Auth/callback/callback.component";
import {LayoutComponent} from "./Pages/layout/layout.component";
import {UserinformationsComponent} from "./Pages/userinformations/userinformations.component";
import {FlightsComponent} from "./Pages/flights/flights.component";
import {CoordinatesComponent} from "./Pages/coordinates/coordinates.component";
import {SignupComponent} from "./Pages/Auth/signup/signup.component";

export const routes: Route[] = [
  {
    path: 'login',
    component : LoginComponent,
  },
  {
    path: 'callback',
    component : CallbackComponent,
  },
  {
    path: 'signup',
    component : SignupComponent,
  },
  {
    path: '',
    canActivate: [AuthGuardService],
    component : LayoutComponent,
    children : [
      {
      path : 'maps',
      component : MapComponent
      },
      {
        path : 'userinformation',
        component : UserinformationsComponent
      },
      {
        path : 'flights',
        component : FlightsComponent
      },
      {
        path : 'coordinates',
        component : CoordinatesComponent
      }
    ]
  }
];
