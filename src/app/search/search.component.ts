import { Component, OnInit } from '@angular/core';
import { City } from '../classes/city';
import { CityWeatherService } from '../services/city-weather.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';



@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    $searchedCity: string;

    foundCity: Observable<City>;

    constructor(private cityWeatherService: CityWeatherService, private snackBar: MatSnackBar) { }

    ngOnInit() {
    }

    findCity(): void {
        this.foundCity = this.cityWeatherService.findCity(this.$searchedCity).pipe(
            tap(x => {
                if (x === null) {
                    this.openSnackBar();
                }
            })
        );
    }

    clearSearch(): void {
        this.$searchedCity = '';
        this.foundCity = null;
    }

    openSnackBar() {
        this.snackBar.open('Sorry, the city couldn\'t be found', 'Close' , {
            duration: 3000
        });
    }

}

