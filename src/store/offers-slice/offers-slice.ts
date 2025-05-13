import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addToFavorite, fetchOffersAction, removeFavorite } from '../api-actions';
import { OfferType } from '../../types';
import { City } from '../../types';
import { cities } from '../../consts/cities';
import { addOfferToFavorites, updateOfferFavoriteStatus } from '../favorite-slice/favorites-utils';
import { Status } from '../../consts/consts';

export type OffersStateType = {
  offers: OfferType[];
  city: City;
  status: Status;
};

const initialState: OffersStateType = {
  offers: [],
  city: cities.Paris,
  status: Status.Idle,
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
        state.status = Status.Loading;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        if (state.offers.length === 0){
          state.status = Status.Empty;
        } else {
          state.status = Status.Ready;
        }
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.status = Status.Error;
      })
      .addCase(addToFavorite.fulfilled, (state, action) => {
        addOfferToFavorites(state, action.payload);
      })
      .addCase(removeFavorite.fulfilled, (state, action) => {
        updateOfferFavoriteStatus(state, action.payload);
      });
  }
});

export const { changeCity } = offersSlice.actions;
export default offersSlice.reducer;
