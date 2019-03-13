export interface Response {
    id: number;
    name: string;
    sys: {country: string};
    weather: [
        {id: number, main: string, description: string, icon: string} ];
    main: {temp: number, humidity: number};
    wind: {speed: number};
    clouds: {all: number};

}
