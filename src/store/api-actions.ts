import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, StoreType } from './types';
import { AxiosInstance } from 'axios';
import { OfferType } from '../types';
import { setError, setFavorites, setLoading, setOffers } from './actions';
import { store } from './store';
import { errorHandler } from '../api/api';

const ERROR_TIMEOT = 20000;
type thunkType = {
  dispatch: AppDispatch;
  state: StoreType;
  extra: {api: AxiosInstance};
};

export const fetchOffersAction = createAsyncThunk<void, undefined, thunkType>(
  'CITY/changeCity',
  async (_arg, {dispatch, extra: extra}) => {
    try {
      const {api} = extra;
      dispatch(setLoading(true));
      const {data} = await api.get<OfferType[]>('/offers');
      dispatch(setOffers(data));
    } catch(err) {
      if (err instanceof Error) {
        errorHandler(err.message);
      }
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const fetchFavorites = createAsyncThunk<void, undefined, thunkType>(
  'FAVORITES/setFavorites',
  async (_arg, {dispatch, extra: extra}) => {
    try {
      const {api} = extra;
      const {data} = await api.get<OfferType[]>('/favorite');
      dispatch(setFavorites(data));
    } catch(err) {
      if (err instanceof Error) {
        errorHandler(err.message);
      }
    }
  }
);

export const removeErrorAction = createAsyncThunk<void, undefined, thunkType>(
  'ERROR/setError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      ERROR_TIMEOT,
    );
  },
);
