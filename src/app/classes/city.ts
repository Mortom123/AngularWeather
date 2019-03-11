import { Weather } from './weather';
import { Response } from '../services/response';

export class City {

    favorite = false;
    id: number;
    name: string;
    ccode: string;
    weather: Weather;

    static parseCity(response: Response): City {
        let city: City;
        let weather: Weather;

        weather = {id: response.weather.id, description: response.weather.description,
         windspeed: response.wind.speed, temp: response.main.temp,
         humidity: response.main.humidity, clouds: response.clouds.all,
         iconid: response.weather.icon};

        city =
         new City(response.id, response.name, response.sys.country, weather);




        return city;
    }

    constructor(id: number, name: string, ccode: string, weather: Weather) {
        this.id = id;
        this.name = name;
        this.ccode = ccode;
        this.weather = weather;
    }

    switchFavorite() {
        this.favorite = !this.favorite;
    }

}


