import { OfferType } from '../../types';
import { OffersType } from './favorite-slice';

export const addOfferToFavorites = (state: OffersType, offer: OfferType): void => {
  const index = state.offers.findIndex((o) => o.id === offer.id);
  if (index === -1) {
    state.offers.push(offer);
  } else {
    state.offers[index] = offer;
  }
};

export const removeOfferFromFavorites = (state: OffersType, offerId: string): void => {
  state.offers = state.offers.filter((o) => o.id !== offerId);
};

export const updateOfferFavoriteStatus = (offers: OfferType[], updatedOffer: OfferType): OfferType[] =>
  offers.map((offer) =>
    offer.id === updatedOffer.id ? { ...offer, isFavorite: updatedOffer.isFavorite } : offer
  );
