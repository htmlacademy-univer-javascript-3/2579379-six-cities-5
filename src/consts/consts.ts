export const REVIEW_MIN_LENGTH = 50;

export const MainComponentProps = {
  cardsCount: 5
};

export const ratingObject = {
  'terrible': 1,
  'bad': 2,
  'not bad': 3,
  'good': 4,
  'perfect': 5,
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
