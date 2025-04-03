import {createAction} from '@reduxjs/toolkit';
import {City, OfferType} from '../types.ts';

export const changeCity = createAction<City>('CITY/fetch');
export const setOffers = createAction<OfferType[]>('OFFERS/fetch');
