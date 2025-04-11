import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, StoreType } from './types';
import { AxiosInstance } from 'axios';
import { OfferType } from '../types';
import { setError, setLoading, setOffers } from './actions';
import { store } from './store';

const ERROR_TIMEOT = 20000;
type thunkType = {
  dispatch: AppDispatch;
  state: StoreType;
  extra: AxiosInstance;
};

export const fetchOffersAction = createAsyncThunk<void, undefined, thunkType>(
  'CITY/changeCity',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setLoading(true));
    const {data} = await api.get<OfferType[]>('/offers');
    dispatch(setOffers(data));
    dispatch(setLoading(false));
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
