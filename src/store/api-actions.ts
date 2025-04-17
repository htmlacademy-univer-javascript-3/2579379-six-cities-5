import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, StoreType } from './types';
import { AxiosInstance } from 'axios';
import { OfferType } from '../types';
import { errorHandler } from './error-slice/error-slice';
import { removeToken, setToken } from '../services/token';
import { AuthData, User } from '../types';
import {StatusCodes} from 'http-status-codes';

type thunkType = {
  dispatch: AppDispatch;
  state: StoreType;
  extra: {api: AxiosInstance};
};

export const checkAuthStatus = createAsyncThunk<User, void, thunkType>(
  'AUTH/authorization',
  async (_arg, {extra: extra, rejectWithValue}) => {
    try {
      const {api} = extra;
      const {data} = await api.get<User>('/login');
      setToken(data.token);
      return data;
    } catch (err) {
      if (err instanceof Error) {
        errorHandler(err.message);
      }
      return rejectWithValue(err);
    }
  },
);

export const login = createAsyncThunk<User, AuthData, thunkType>(
  'USER/login',
  async ({email, password}, {extra: extra, rejectWithValue}) => {
    try {
      const {api} = extra;
      const {status, data} = await api.post<User>('/login', {email, password});

      if (status === Number(StatusCodes.CREATED)) {
        setToken(data.token);
        return data;
      } else {
        return rejectWithValue('Неверный статус');
      }
    } catch (err) {
      if (err instanceof Error) {
        errorHandler(err.message);
      }
      return rejectWithValue(err);
    }
  },
);

export const fetchOffersAction = createAsyncThunk<OfferType[], void, thunkType>(
  'CITY/changeCity',
  async (_arg, {extra, rejectWithValue}) => {
    try {
      const {api} = extra;
      const {data} = await api.get<OfferType[]>('/offers');
      return data;
    } catch(err) {
      if (err instanceof Error) {
        errorHandler(err.message);
        return rejectWithValue(err.message);
      }
      return rejectWithValue(err);
    }
  }
);

export const fetchFavorites = createAsyncThunk<OfferType[], void, thunkType>(
  'FAVORITES/setFavorites',
  async (_arg, {extra: extra, rejectWithValue}) => {
    try {
      const {api} = extra;
      const {data} = await api.get<OfferType[]>('/favorite');
      return data;
    } catch(err) {
      if (err instanceof Error) {
        errorHandler(err.message);
      }
      return rejectWithValue(err);
    }
  }
);

export const logout = createAsyncThunk<void, undefined, thunkType>(
  'USER/logout',
  async (_arg, {extra: extra, rejectWithValue}) => {
    try {
      const {api} = extra;
      await api.delete('/logout');
      removeToken();
    } catch (err) {
      if (err instanceof Error) {
        errorHandler(err.message);
      }
      return rejectWithValue(err);
    }
  },
);
