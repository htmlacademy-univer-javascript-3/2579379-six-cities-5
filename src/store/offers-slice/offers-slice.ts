import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchOffersAction } from '../api-actions';
import { OfferType } from '../../types';
import { City } from '../../types';
import { cities } from '../../consts/cities';

export type OffersStateType = {
  offers: OfferType[];
  isLoading: boolean;
  city: City;
};

const initialState: OffersStateType = {
  offers: [],
  isLoading: false,
  city: cities.Paris,
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
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isLoading = false;
      });
  }
});

export const { changeCity } = offersSlice.actions;
export default offersSlice.reducer;
