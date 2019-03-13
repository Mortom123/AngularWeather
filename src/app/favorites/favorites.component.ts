import { Component, OnInit } from '@angular/core';
import { CityWeatherService } from '../services/city-weather.service';
import { City } from '../classes/city';
import { Observable } from 'rxjs';


@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

    cities: Observable<City[]>;
    constructor(private cityWeatherService: CityWeatherService) { }

    ngOnInit() {
        this.getFavorites();
    }



    getFavorites(): void {
      this.cities = this.cityWeatherService.getFavorites();
    }

}
