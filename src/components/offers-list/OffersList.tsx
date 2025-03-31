import { Card } from '../card/Card';
import { OfferType } from '../../types';

type OffersListProps = {
  offers: OfferType[];
  onItemMouseHover?: (offerId: string) => void;
  onItemMouseLeave?: () => void;
}

export const OffersList = ({offers, onItemMouseHover, onItemMouseLeave}: OffersListProps) => (
  <div className="cities__places-list places__list tabs__content">
    {offers.map((item) => (
      <Card
        key={item.id}
        offer={item}
        onMouseHover={() => onItemMouseHover?.(item.id)}
        onMouseLeave={() => onItemMouseLeave?.()}
      />)
    )}
  </div>
);
