import { createSlice } from '@reduxjs/toolkit';
import { addToFavorite, fetchFavorites } from '../api-actions';
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
        const updatedOffer = action.payload;
        const index = state.offers.findIndex((offer) => offer.id === updatedOffer.id);
        if (updatedOffer.isFavorite) {
          if (index === -1) {
            state.offers.push(updatedOffer);
          } else {
            state.offers[index] = updatedOffer;
          }
        } else {
          if (index !== -1) {
            state.offers.splice(index, 1);
          }
        }
      });
  }
});

export default favoriteSlice.reducer;
