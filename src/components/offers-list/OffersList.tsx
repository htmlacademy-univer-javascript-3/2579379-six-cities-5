import { Card } from '../card/Card';
//import { Offers } from '../../mock/offers-mock';
import { OfferType } from '../../consts/consts';
import { useState } from 'react';

type OffersListProps = {
  offers: OfferType[];
}

export const OffersList = ({offers}: OffersListProps) => {
  const [, setHover] = useState<string>(); //[hover, setHover]
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((item) => (
        <Card
          key={item.id}
          offer={item}
          onMouseHover={() => setHover(item.id)}
          onMouseLeave={() => setHover(undefined)}
        />)
      )}
    </div>
  );
};
