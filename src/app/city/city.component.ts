import { Component, OnInit, Input } from '@angular/core';
import { City } from '../classes/city';



@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  @Input() city: City;
  constructor() { }

  ngOnInit() {
  }

  getStyles() {
      const cityStyle =  {
          'background-image': 'url(\'assets/images/' + this.city.weather.iconid + '.jpg\')'
          };
      return cityStyle;
  }

  getButtonStyle() {
      let buttonStyle;
      if (this.city.favorite) {
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

  switchFavorite(): void {
      this.city.switchFavorite();
  }

}
