import {enableProdMode, importProvidersFrom} from '@angular/core';

import { environment } from './environments/environment';
import {bootstrapApplication, BrowserModule} from "@angular/platform-browser";
import {provideAnimations} from "@angular/platform-browser/animations";
import {provideHttpClient, withInterceptorsFromDi, withJsonpSupport} from "@angular/common/http";
import {AppComponent} from "./app/app.component";
import {provideRouter} from "@angular/router";
import {routes} from "./app/Routes";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers : [
      importProvidersFrom(BrowserModule),
      provideAnimations(),
      provideHttpClient(withInterceptorsFromDi()),
      provideRouter(routes),
      withJsonpSupport().ɵproviders
  ],
})
  .catch(err => console.error(err));
