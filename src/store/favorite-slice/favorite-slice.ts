import { createSlice } from '@reduxjs/toolkit';
import { fetchFavorites } from '../api-actions';
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
      });
  }
});

export default favoriteSlice.reducer;
