import { Component, OnInit } from '@angular/core';
import { City } from '../classes/city';
import { CityWeatherService } from '../services/city-weather.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';




@Component({
    selector: 'app-search-mob',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    $searchedCity: string;

    foundCity: Observable<City>;

    constructor(private cityWeatherService: CityWeatherService) { }

    ngOnInit() {
    }

    findCity(): void {
        this.foundCity = this.cityWeatherService.findCity(this.$searchedCity).pipe(
            tap(x => {
                if (x === null) {
                    console.log("TODO: migrate SEARCH");
                }
            })
        );
    }

    clearSearch(): void {
        this.$searchedCity = '';
        this.foundCity = null;
    }

}

