import { City } from './classes/city';
import { Weather } from './classes/weather';


const WEATHERS: Weather[] = [
    {id: 1, description: 'test1', windspeed: 10, temp: 10, humidity: 10, clouds: 5, iconid: '4', background: 'clear'},
    {id: 2, description: 'test2', windspeed: 10, temp: 10, humidity: 10, clouds: 5, iconid: '2', background: 'clear'},
    {id: 3, description: 'test3', windspeed: 10, temp: 10, humidity: 10, clouds: 5, iconid: '3', background: 'clear'},
];

export const CITIES: City[] = [
    new City(1, 'Berlin', 'DE', WEATHERS[0]),
    new City(2, 'Frankfurt', 'DE', WEATHERS[1]),
    new City(3, 'Mulsen', 'DE', WEATHERS[2]),
];
