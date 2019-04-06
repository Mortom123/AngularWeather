import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppRoutingModule } from './app-routing/app-routing.module.tns';
import { AppComponent } from './app.component';



// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper

import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
import { CityComponent } from './city/city.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ControlComponent } from './control/control.component';
import { SearchComponent } from './search-mobile/search.component.tns'

@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    FavoritesComponent,
    ControlComponent,
    SearchComponent
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptHttpClientModule,
    NativeScriptFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
