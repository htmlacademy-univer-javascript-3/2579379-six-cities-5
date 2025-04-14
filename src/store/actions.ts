import {createAction} from '@reduxjs/toolkit';
import {City, OfferType, User} from '../types.ts';
import { AuthorizationStatus } from '../consts/consts.ts';

export const changeCity = createAction<City>('CITY/changeCity');
export const setOffers = createAction<OfferType[]>('OFFERS/setOffers');
export const setLoading = createAction<boolean>('LOADING/setLoading');
export const setError = createAction<string | null>('ERROR/setError');
export const setFavorites = createAction<OfferType[]>('(FAVORITES/setFavorites');
export const setAuthStatus = createAction<AuthorizationStatus>('AUTH/authorization');
export const setUser = createAction<User | null>('USER/login');
