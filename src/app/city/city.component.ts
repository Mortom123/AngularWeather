import { Component, OnInit, Input } from '@angular/core';
import { City } from '../classes/city';
import { CityWeatherService } from '../services/city-weather.service';



@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  @Input() city: City;
  constructor(private cityWeatherService: CityWeatherService) { 
  }

  ngOnInit() {
  }

  getStyles() {
      const cityStyle =  {
          'background-image': 'url(\'assets/images/' + this.city.weather.background + '.png\')'
          };
      return cityStyle;
  }

  getButtonStyle() {
      let buttonStyle;

      let isFavorite;
      isFavorite  = this.cityWeatherService.isFavorite(this.city)
      console.log(isFavorite)
      
      if (isFavorite) {
        buttonStyle = {
            'color' : 'red'
        };
      } else {
        buttonStyle = {
            'color' : ''
        };
      }
      return buttonStyle;
  }

  getIcon() {
      return 'http://openweathermap.org/img/w/' + this.city.weather.iconid + '.png';
  }

  switchFavorite(): void {
      this.cityWeatherService.switchFavorite(this.city);
  }

}
