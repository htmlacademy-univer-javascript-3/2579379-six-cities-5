import { CityName } from './consts/consts';

export type OfferType = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

export type City = {
  name: CityName;
  location: Location;
}

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type Review = {
  id: string;
  date: Date;
  user: HostOrUser;
  comment: string;
  rating: number;
}

  type HostOrUser = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type AuthData = {
  email: string;
  password: string;
}

export type User = HostOrUser & {
  email: string;
  token: string;
}

export type FormData = {
  rating: number;
  review: string;
}

export type Point = {
  id: string;
  title: string;
  location: Location;
}

export type MapType = 'cities' | 'offer';

export type CardType = 'near-places' | 'cities' | 'favorites';

export type CardSize = 'small' | 'medium';
