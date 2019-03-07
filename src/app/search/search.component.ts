import { Component, OnInit } from '@angular/core';
import { City } from '../classes/city';
import { CityWeatherService } from '../services/city-weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchedCity: string;

  foundCity: City;
  constructor(private cityWeatherService: CityWeatherService ) { }

  ngOnInit() {
  }

  findCity(): void {
   this.cityWeatherService.findCity(this.searchedCity)
            .subscribe(city => this.foundCity = city);
  }

  clearSearch(): void {
      this.searchedCity = '';
      this.foundCity = null;
  }

}
