import { createSlice } from '@reduxjs/toolkit';
import { addToFavorite, fetchFavorites, removeFavorite } from '../api-actions';
import { addOfferToFavorites, removeOfferFromFavorites } from './favorites-utils';
import { OfferType } from '../../types';

export type OffersType = {
  offers: OfferType[];
};

const initialState: OffersType = {
  offers: [],
};

export const favoriteSlice = createSlice({
  name: 'FAVORITES',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.offers = action.payload;
      })
      .addCase(addToFavorite.fulfilled, (state, action) => {
        addOfferToFavorites(state, action.payload);
      })
      .addCase(removeFavorite.fulfilled, (state, action) => {
        removeOfferFromFavorites(state, action.payload.id);
      });
  }
});

export default favoriteSlice.reducer;
