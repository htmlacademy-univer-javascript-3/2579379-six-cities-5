export const REVIEW_MIN_LENGTH = 50;

export const MainComponentProps = {
  cardsCount: 5
};

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  BaseOffer = '/offer',
  NotFound = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

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
  name: string;
  location: Location;
}

export type Location = {
  latitude: number;
  longtitude: number;
  zoom: number;
}

export type Comment = {
  id: string;
  date: string;
  user: HostOrUser;
  comment: string;
  rating: number;
}

export type HostOrUser = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type FormData = {
  rating: number;
  review: string;
}

//export { MainComponentProps, AppRoute, AuthorizationStatus };
