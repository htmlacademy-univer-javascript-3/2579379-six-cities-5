import { StoreType } from './types';

export const authStatus = (state: StoreType) => state.auth.authorizationStatus;
export const errorStatus = (state: StoreType) => state.error;
export const userSelector = (state: StoreType) => state.auth.user;
export const favoritesSelector = (state: StoreType) => state.favorite.offers;
export const offersSelector = (state: StoreType) => state.offers.offers;
export const currentCitySelector = (state: StoreType) => state.offers.city;
export const statusSelector = (state: StoreType) => state.offers.status;
