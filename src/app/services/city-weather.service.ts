import { Injectable } from '@angular/core';

import { CITIES } from '../mock-cities-weathers';
import { City } from '../classes/city';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Response } from './response';
@Injectable({
    providedIn: 'root'
})
export class CityWeatherService {
    private weatherURL = 'https://api.openweathermap.org/data/2.5/weather';  // URL to web api

    constructor(private http: HttpClient) { }

    /* getFavorites(): Observable<City[]>  {
         return of(CITIES.filter(x => x.favorite === true));
     }

     findCity(searchedCity: string): Observable<City> {
       return of(CITIES.find(x => x.name.toUpperCase() === searchedCity.toUpperCase()));
     }*/
    getFavorites(): Observable<City[]> {
        return of(CITIES.filter(x => x.favorite === true));
    }
    findCity(searchedCity: string): Observable<City> {
        return of(this.fetchCityData(searchedCity));
    }

    fetchCityData(search: string): City {
        let requestUrl: string;
        let city: City;
        requestUrl = this.weatherURL + '?q=' + search + '&appid=31f87b80354a3eedf05635056e1ea893';

         this.waitData(requestUrl).then(data => {
            city = data;
        });
        return city;

    }

    async waitData(request: string) {

        let result;
        result = await this.http.get<Response>(request)
            .toPromise<Response>().then( data => {
                return data;
            });

        return City.parseCity(result);
    }

}
