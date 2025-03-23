import { Card } from '../card/Card';
import { OfferType } from '../../types';
import { useState } from 'react';

type OffersListProps = {
  offers: OfferType[];
}

export const OffersList = ({offers}: OffersListProps) => {
  const [, setHover] = useState<string | null>(null); //[hover, setHover]
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((item) => (
        <Card
          key={item.id}
          offer={item}
          onMouseHover={() => setHover(item.id)}
          onMouseLeave={() => setHover(null)}
        />)
      )}
    </div>
  );
};
