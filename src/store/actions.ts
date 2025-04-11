import {createAction} from '@reduxjs/toolkit';
import {City, OfferType} from '../types.ts';

export const changeCity = createAction<City>('CITY/changeCity');
export const setOffers = createAction<OfferType[]>('OFFERS/setOffers');
export const setLoading = createAction<boolean>('LOADING/setLoading');
export const setError = createAction<string | null>('ERROR/setError');
