import { Weather } from './weather';
import { Response } from '../services/response';



export class City {

    id: number;
    name: string;
    ccode: string;
    weather: Weather;

    static parseCity(response: Response): City {
        if (response === undefined) { return null; }
        let city: City;
        let weather: Weather;
        let background: string;
        let iconid: string;
        let description: string;

            switch (response.weather[0].main) {
                case ('Rain'): {
                    background = 'rain';
                    break;
                }
                 case ('Drizzle'): {
                     background = 'drizzle';
                    break;
                }
                 case ('Thunderstorm'): {
                     background = 'thunderstorm';
                    break;
                }
                 case ('Mist'): {
                     background = 'mist';
                    break;
                }
                 case ('Clear'): {
                     background = 'clear';
                    break;
                }
                 case ('Clouds'): {
                     background = 'clouds';
                    break;
                }
                 case ('Snow'): {
                     background = 'snow';
                    break;
                }
                 default : {
                     background = 'other';
                     break;
                 }


            }

       iconid = response.weather[0].icon.replace('n', 'd');
       description = response.weather[0].description;
       description = description.charAt(0).toUpperCase() + description.slice(1);

        weather = {id: response.weather[0].id, description: description,
         windspeed: response.wind.speed, temp: Math.round(response.main.temp - 273) ,
         humidity: response.main.humidity, clouds: response.clouds.all,
         iconid: iconid, background: background};

        city =
         new City(response.id, response.name, response.sys.country, weather);
        return city;
    }

    static parseCities(response: Response[]): City[] {
        let cities: City[] = [];
        for (let x of response) {
            cities.push(this.parseCity(x));
        }
        return cities;
    }

    constructor(id: number, name: string, ccode: string, weather: Weather) {
        this.id = id;
        this.name = name;
        this.ccode = ccode;
        this.weather = weather;
    }

}


