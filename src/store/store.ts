import {configureStore} from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import authSlice from './auth-slice/auth-slice.ts';
import offersSlice from './offers-slice/offers-slice.ts';
import errorSlice from './error-slice/error-slice.ts';
import favoriteSlice from './favorite-slice/favorite-slice.ts';
import { configureAPI } from '../api/api.ts';

const api = configureAPI();

export const rootReducer = combineReducers({
  auth: authSlice,
  error: errorSlice,
  favorite: favoriteSlice,
  offers: offersSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {api}
      },
    })
});
