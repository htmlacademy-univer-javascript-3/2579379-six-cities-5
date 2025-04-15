import { createReducer } from '@reduxjs/toolkit';
import { changeCity, setOffers, setLoading, setError, setFavorites, setAuthStatus, setUser } from './actions.ts';
import { cities } from '../consts/cities.ts';
import { City, OfferType, User } from '../types.ts';
import { AuthorizationStatus } from '../consts/consts.ts';

type State = {
  city: City;
  offers: OfferType[];
  isLoading: boolean;
  error: string | null;
  favorites: OfferType[];
  authorizationStatus: AuthorizationStatus;
  user: User | null;
}

const initialState: State = {
  city: cities.Paris,
  offers: [],
  isLoading: false,
  error: null,
  favorites: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.city = action.payload;
  }).addCase(setOffers, (state, action) => {
    state.offers = action.payload;
  }).addCase(setLoading, (state, action) => {
    state.isLoading = action.payload;
  }).addCase(setError, (state, action) => {
    state.error = action.payload;
  }).addCase(setFavorites, (state, action) => {
    state.favorites = action.payload;
  }).addCase(setAuthStatus, (state, action) => {
    state.authorizationStatus = action.payload;
  }).addCase(setUser, (state, action) => {
    state.user = action.payload;
  });
});
