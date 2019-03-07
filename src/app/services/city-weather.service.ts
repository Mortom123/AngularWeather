import { Injectable } from '@angular/core';

import { CITIES } from '../mock-cities-weathers';
import { City } from '../classes/city';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityWeatherService {

  constructor() { }

  getCities(): Observable<City[]>  {
      return of(CITIES);
  }
}
