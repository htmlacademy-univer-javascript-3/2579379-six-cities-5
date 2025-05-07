export const REVIEW_MIN_LENGTH = 50;

export const mainComponentProps = {
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

export enum CityName {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}

export enum Status {
  Idle = 'idle',
  Loading = 'loading',
  Error = 'error',
  Empty = 'empty',
  Ready = 'ready'
}
