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

type City = {
  name: string;
  location: Location;
}

  type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type Comment = {
  id: string;
  date: string;
  user: HostOrUser;
  comment: string;
  rating: number;
}

  type HostOrUser = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type FormData = {
  rating: number;
  review: string;
}

//export { MainComponentProps, AppRoute, AuthorizationStatus };
