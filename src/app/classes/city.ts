import { Weather } from './weather';

export class City {
    favorite = false;
    id: number;
    name: string;
    ccode: string;
    weather: Weather;

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
