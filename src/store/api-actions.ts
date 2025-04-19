import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, StoreType } from './types';
import { AxiosInstance } from 'axios';
import { OfferType } from '../types';
import { errorHandler } from './error-slice/error-slice';
import { removeToken, setToken } from '../services/token';
import { AuthData, User } from '../types';
import {StatusCodes} from 'http-status-codes';

type ThunkType = {
  dispatch: AppDispatch;
  state: StoreType;
  extra: {api: AxiosInstance};
};

export const checkAuthStatus = createAsyncThunk<User, void, ThunkType>(
  'AUTH/authorization',
  async (_arg, {dispatch, extra, rejectWithValue}) => {
    try {
      const {api} = extra;
      const {data} = await api.get<User>('/login');
      setToken(data.token);
      return data;
    } catch (err) {
      if (err instanceof Error) {
        dispatch(errorHandler(err.message));
      }
      return rejectWithValue(err);
    }
  },
);

export const login = createAsyncThunk<User, AuthData, ThunkType>(
  'USER/login',
  async ({email, password}, {dispatch, extra, rejectWithValue}) => {
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
        dispatch(errorHandler(err.message));
      }
      return rejectWithValue(err);
    }
  },
);

export const fetchOffersAction = createAsyncThunk<OfferType[], void, ThunkType>(
  'CITY/changeCity',
  async (_arg, {dispatch, extra, rejectWithValue}) => {
    try {
      const {api} = extra;
      const {data} = await api.get<OfferType[]>('/oflfers');
      return data;
    } catch(err) {
      if (err instanceof Error) {
        dispatch(errorHandler(err.message));
        return rejectWithValue(err.message);
      }
      return rejectWithValue(err);
    }
  }
);

export const fetchFavorites = createAsyncThunk<OfferType[], void, ThunkType>(
  'FAVORITES/setFavorites',
  async (_arg, {dispatch, extra, rejectWithValue}) => {
    try {
      const {api} = extra;
      const {data} = await api.get<OfferType[]>('/favorite');
      return data;
    } catch(err) {
      if (err instanceof Error) {
        dispatch(errorHandler(err.message));
      }
      return rejectWithValue(err);
    }
  }
);

export const logout = createAsyncThunk<void, undefined, ThunkType>(
  'USER/logout',
  async (_arg, {dispatch, extra, rejectWithValue}) => {
    try {
      const {api} = extra;
      await api.delete('/logout');
      removeToken();
    } catch (err) {
      if (err instanceof Error) {
        dispatch(errorHandler(err.message));
      }
      return rejectWithValue(err);
    }
  },
);
