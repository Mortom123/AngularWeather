import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';
import { ControlComponent } from './control/control.component';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { SearchComponent, SnackBarComponent } from './search/search.component';
import { FavoritesComponent } from './favorites/favorites.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    ControlComponent,
    SearchComponent,
    FavoritesComponent,
    SnackBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
