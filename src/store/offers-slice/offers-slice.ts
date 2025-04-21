import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addToFavorite, fetchOffersAction } from '../api-actions';
import { OfferType } from '../../types';
import { City } from '../../types';
import { cities } from '../../consts/cities';

export type OffersStateType = {
  offers: OfferType[];
  isLoading: boolean;
  city: City;
  isError: boolean;
  isEmpty: boolean;
};

const initialState: OffersStateType = {
  offers: [],
  isLoading: false,
  city: cities.Paris,
  isError: false,
  isEmpty: true,
};

const offersSlice = createSlice({
  name: 'OFFERS',
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<City>) => {
      state.city = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isEmpty = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isLoading = false;
        state.isError = false;
        if (state.offers.length === 0){
          state.isEmpty = true;
        } else {
          state.isEmpty = false;
        }
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isEmpty = false;
      })
      .addCase(addToFavorite.fulfilled, (state, action) => {
        const favoriteOffer = action.payload;
        const index = state.offers.findIndex((offer) => offer.id === favoriteOffer.id);
        if (index !== -1) {
          state.offers[index].isFavorite = favoriteOffer.isFavorite;
        }
      });
  }
});

export const { changeCity } = offersSlice.actions;
export default offersSlice.reducer;
