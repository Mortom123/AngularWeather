import { TestBed } from '@angular/core/testing';

import { CityWeatherServiceService } from './city-weather-service.service';

describe('CityWeatherServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CityWeatherServiceService = TestBed.get(CityWeatherServiceService);
    expect(service).toBeTruthy();
  });
});
