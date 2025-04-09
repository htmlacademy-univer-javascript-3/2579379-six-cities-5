import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, StoreType } from './types';
import { AxiosInstance } from 'axios';
import { OfferType } from '../types';
import { setLoading, setOffers } from './actions';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: StoreType;
  extra: AxiosInstance;
}
>(
  'CITY/changeCity',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setLoading(true));
    const {data} = await api.get<OfferType[]>('/offers');
    dispatch(setOffers(data));
    dispatch(setLoading(false));
  }
);
