import { OfferType } from '../../types';
import { OffersList } from '../offers-list/OffersList';

type LocationFavoritesProps = {
  city: string;
  favoriteOffers: OfferType[];
}

export const LocationFavorites = ({city, favoriteOffers}: LocationFavoritesProps) => (
  <li className="favorites__locations-items">
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <a className="locations__item-link" href="#">
          <span>{city}</span>
        </a>
      </div>
    </div>
    <div className="favorites__places">
      <OffersList offers={favoriteOffers} cardType='favorites' size={'small'}/>
    </div>
  </li>
);
