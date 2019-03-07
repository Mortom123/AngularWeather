import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';
import { ControlComponent } from './control/control.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { SearchComponent } from './search/search.component';
import { FavoritesComponent } from './favorites/favorites.component';




@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    ControlComponent,
    SearchComponent,
    FavoritesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
