import { Component, OnInit } from '@angular/core';
import { CityWeatherService } from '../services/city-weather.service';
import { City } from '../classes/city';


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  cities: City[];
  detailedCity: City;
  constructor(private cityWeatherService: CityWeatherService) { }

  ngOnInit() {
      this.getCities();
  }

  getCities(): void {
   this.cityWeatherService.getCities()
        .subscribe(cities => this.cities = cities);
  }

  detail(city: City): void {
      this.detailedCity = city;
  }

  overview(): void {
      this.detailedCity = null;
  }

  getStyles(city: City) {
      const cityStyle =  {
          'background-image': 'url(\'assets/images/' + city.weather.iconid + '.jpg\')'
          };
      return cityStyle;
  }

}
