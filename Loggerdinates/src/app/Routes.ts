import {Route} from "@angular/router";
import {MapComponent} from "./Google-Maps/map/map.component";

export const routes: Route[] = [
    {
        path: 'maps',
        component: MapComponent,
    },
    {
        path: '**',
        redirectTo: '',
    },
];
