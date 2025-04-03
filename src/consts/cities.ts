import { CityName } from './consts';
import { City } from '../types';

export const cities: Record<CityName, City> = {
  Paris: {
    name: CityName.Paris,
    location: {
      latitude: 48.864716,
      longitude: 2.349014,
      zoom: 8,
    }
  },
  Cologne: {
    name: CityName.Cologne,
    location: {
      latitude: 50.935173,
      longitude: 6.953101,
      zoom: 8,
    }
  },
  Brussels: {
    name: CityName.Brussels,
    location: {
      latitude: 50.85045000,
      longitude: 4.34878000,
      zoom: 8,
    }
  },
  Amsterdam: {
    name: CityName.Amsterdam,
    location: {
      latitude: 52.377956,
      longitude: 4.897070,
      zoom: 8,
    }
  },
  Hamburg: {
    name: CityName.Hamburg,
    location: {
      latitude: 53.551086,
      longitude: 9.993682,
      zoom: 8,
    }
  },
  Dusseldorf: {
    name: CityName.Dusseldorf,
    location: {
      latitude: 51.233334,
      longitude: 6.783333,
      zoom: 8,
    }
  },
};
