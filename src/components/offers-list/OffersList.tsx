import { Card } from '../card/Card';
import { OfferType, CardClass, CardSize } from '../../types';

type OffersListProps = {
  offers: OfferType[];
  onItemMouseHover?: (offerId: string) => void;
  onItemMouseLeave?: () => void;
  cardType: CardClass;
  size: CardSize;
}

export const OffersList = ({offers, onItemMouseHover, onItemMouseLeave, cardType, size}: OffersListProps) => (
  <div className="cities__places-list places__list tabs__content">
    {offers.map((item) => (
      <Card
        key={item.id}
        offer={item}
        cardType={cardType}
        size={size}
        onMouseHover={() => onItemMouseHover?.(item.id)}
        onMouseLeave={() => onItemMouseLeave?.()}
      />)
    )}
  </div>
);
