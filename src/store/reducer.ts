import { createReducer } from '@reduxjs/toolkit';
import { changeCity, setOffers, setLoading } from './actions.ts';
import { cities } from '../consts/cities.ts';
import { City, OfferType } from '../types.ts';

type State = {
  city: City;
  offers: OfferType[];
  isLoading: boolean;
}

const initialState: State = {
  city: cities.Paris,
  offers: [],
  isLoading: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.city = action.payload;
  }).addCase(setOffers, (state, action) => {
    state.offers = action.payload;
  }).addCase(setLoading, (state, action) => {
    state.isLoading = action.payload;
  });
});

