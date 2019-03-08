import { Component, OnInit } from '@angular/core';
import { CityWeatherService } from '../services/city-weather.service';
import { City } from '../classes/city';


@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

    cities: City[];
    constructor(private cityWeatherService: CityWeatherService) { }

    ngOnInit() {
        this.getFavorites();
    }



    getFavorites(): void {
        this.cityWeatherService.getFavorites()
            .subscribe(cities => this.cities = cities);
    }

}
