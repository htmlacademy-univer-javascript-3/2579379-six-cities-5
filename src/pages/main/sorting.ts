import { OfferType } from '../../types';
import { Sorts } from '../../consts/sorts';

export const getSortedOffers = (offers: OfferType[], sortType: Sorts): OfferType[] => {
  const sortVariants = {
    [Sorts.LowToHigh]: (a: OfferType, b: OfferType) => a.price - b.price,
    [Sorts.HighTolow]: (a: OfferType, b: OfferType) => b.price - a.price,
    [Sorts.TopRated]: (a: OfferType, b: OfferType) => b.rating - a.rating,
    [Sorts.Popular]: () => 0
  };

  return sortType === Sorts.Popular
    ? offers
    : [...offers].sort(sortVariants[sortType]);
};
