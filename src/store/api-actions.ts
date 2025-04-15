import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, StoreType } from './types';
import { AxiosInstance } from 'axios';
import { OfferType } from '../types';
import { setError, setFavorites, setLoading, setOffers, setAuthStatus, setUser } from './actions';
import { store } from './store';
import { errorHandler } from '../api/api';
import { removeToken, setToken } from '../services/token';
import { AuthorizationStatus } from '../consts/consts';
import { AuthData, User } from '../types';
import {StatusCodes} from 'http-status-codes';

const ERROR_TIMEOT = 20000;
type thunkType = {
  dispatch: AppDispatch;
  state: StoreType;
  extra: {api: AxiosInstance};
};

export const checkAuthStatus = createAsyncThunk<void, undefined, thunkType>(
  'AUTH/authorization',
  async (_arg, {dispatch, extra: extra}) => {
    try {
      const {api} = extra;
      const {data} = await api.get<User>('/login');
      dispatch(setAuthStatus(AuthorizationStatus.Auth));
      dispatch(setUser(data));
      setToken(data.token);
    } catch {
      dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
      dispatch(setUser(null));
    }
  },
);

export const login = createAsyncThunk<void, AuthData, thunkType>(
  'USER/login',
  async ({email, password}, {dispatch, extra: extra}) => {
    try {
      const {api} = extra;
      const {status, data} = await api.post<User>('/login', {email, password});

      if (status === Number(StatusCodes.CREATED)) {
        dispatch(setAuthStatus(AuthorizationStatus.Auth));
        dispatch(setUser(data));
        setToken(data.token);
      } else {
        dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
        dispatch(setUser(null));
      }
    } catch (err) {
      if (err instanceof Error) {
        errorHandler(err.message);
      }
    }
  },
);

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

export const logout = createAsyncThunk<void, undefined, thunkType>(
  'USER/logout',
  async (_arg, {dispatch, extra: extra}) => {
    try {
      const {api} = extra;
      await api.delete('/logout');
      dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
      dispatch(setUser(null));
      removeToken();
    } catch (err) {
      if (err instanceof Error) {
        errorHandler(err.message);
      }
    }
  },
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
