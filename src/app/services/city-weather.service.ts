import { Injectable } from '@angular/core';

import { City } from '../classes/city';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Response } from './response';
import { StoredData } from './storeddata';
import { ResponseList } from './responselist';

@Injectable({
    providedIn: 'root'
})
export class CityWeatherService {
    private weatherURL = 'https://api.openweathermap.org/data/2.5/';  // URL to web api
    private apiKey = '&appid=31f87b80354a3eedf05635056e1ea893'; // API Key

    constructor(private http: HttpClient) { }

    getStoredFavorites(): StoredData {
        return JSON.parse(localStorage.getItem('favorites')) as StoredData;
    }

    findCity(searchedCity: string): Observable<City> {
        let requestUrl: string;
        requestUrl = this.weatherURL + 'weather?q=' + searchedCity + this.apiKey;
        let fetchedData: Observable<City>;

        fetchedData = this.fetchCityData(requestUrl).pipe(
            map((res: Response) => City.parseCity(res) as City));
        return fetchedData;
    }

    fetchCityData(search: string): Observable<Response> {
        return this.http.get<Response>(search).pipe(
            catchError(this.dataFetchingError<Response>())
        );
    }

     private dataFetchingError<T> (result?: T) {
        return (error: any): Observable<T> => {
                     return of(result as T);
                    };
    }

    getFavorites(): Observable<City[]> {
        let favoriteResponse;
        favoriteResponse = this.getFavoritesResponse()
        .pipe(
            map((res: Response[]) => City.parseCities(res) as City[])
            );

        return favoriteResponse;
    }

    getFavoritesResponse(): Observable<Response[]> {
        let favorites: StoredData;
        favorites = this.getStoredFavorites();
        if (favorites === null) {
            return of([] as Response[]);
        } else {
            if (favorites.cities === undefined || favorites.cities.length === 0) {
                return of([] as Response[]);
            } else {
                let favoriteString = '';
                for (let favorite of favorites.cities) {
                    favoriteString += favorite.id.toString() + ',';
                }
                favoriteString = favoriteString.slice(0, -1);
                let cities: Observable<ResponseList>;
                cities = this.fetchFavorites(favoriteString);
                return cities.pipe(
                    map((res: ResponseList) =>
                        res.list as Response[]
                        ));

            }
        }
    }

    fetchFavorites(search: string): Observable<ResponseList> {
        return this.http.get<ResponseList>(this.weatherURL + 'group?id=' + search + this.apiKey);
    }

    isFavorite(city: City): boolean {
        if (city === null) {
            return false
        }
        let favorites;
        favorites = this.getStoredFavorites();
        if (favorites === null || favorites.cities === null) {
            return false
        }
        return (favorites.cities.find( (x:City) => x.id === city.id)) ?
            true : false;
    }

    switchFavorite(city: City): void {
        this.isFavorite(city) ?
        this.removeFavorite(city) : this.addFavorite(city);
    }

    addFavorite(city: City): void {
        let favorites: StoredData;
        favorites = this.getStoredFavorites();
        if (favorites === null) {
            favorites = {
                cities: [{
                    name: city.name, id: city.id,
                }]
            };
        } else {
            if (favorites.cities === undefined) {
                let saveCity: [{ name: string, id: number }];
                saveCity[0] = { name: city.name, id: city.id };
                favorites.cities = saveCity;
            } else {
                if (favorites.cities.find(x => x.id === city.id)) {
                    return;
                }
                favorites.cities.push({ name: city.name, id: city.id });
            }
        }
        this.saveFavorites(favorites);
    }

    removeFavorite(city: City): void {
        let favorites: StoredData;
        favorites = this.getStoredFavorites();
        favorites.cities = favorites.cities.filter(x => x.id !== city.id);
        this.saveFavorites(favorites);
    }



    saveFavorites(favorites: StoredData): void {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }



}
