import { Injectable } from '@angular/core';

import { CITIES } from '../mock-cities-weathers';
import { City } from '../classes/city';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityWeatherService {

  constructor() { }

  getFavorites(): Observable<City[]>  {
      return of(CITIES.filter(x => x.favorite === true));
  }

  findCity(searchedCity: string): Observable<City> {
    return of(CITIES.find(x => x.name.toUpperCase() === searchedCity.toUpperCase()));
  }
}
