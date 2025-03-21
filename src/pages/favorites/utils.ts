import { OfferType } from '../../consts/consts';

export const getLocationFaivoritesMap = (offersArray: OfferType[]): Map<string, OfferType[]> => {
  const faivoritesMap: Map<string, OfferType[]> = new Map();

  for (let i = 0; i < offersArray.length; i++) {
    if (!faivoritesMap.has(offersArray[i].city.name) && offersArray[i].isFavorite) {
      faivoritesMap.set(offersArray[i].city.name, []);
    }
    if(offersArray[i].isFavorite) {
      const a = faivoritesMap.get(offersArray[i].city.name);
      if (a !== undefined) {
        a.push(offersArray[i]);
      }
    }
  }
  return faivoritesMap;
};
