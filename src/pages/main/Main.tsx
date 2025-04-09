import { Header } from '../../components/header/Header';
import { City, OfferType } from '../../types';
import { OffersList } from '../../components/offers-list/OffersList';
import { Map } from '../../components/map/Map';
import { useEffect, useState, useMemo, useCallback } from 'react';
import { CitiesList } from '../../components/cities-list/CitiesList';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { changeCity, setOffers } from '../../store/actions';
import { Offers } from '../../mock/offers-mock';
import 'leaflet/dist/leaflet.css';
import { Sorts } from '../../consts/sorts';
import { getSortedOffers } from './sorting';
import { Sorting } from '../../components/sorting/Sorting';

export const Main = () => {
  const [activeCardId, setHoveredCardById] = useState<string | null>(null);

  const dispatch = useAppDispatch();

  const offers = useAppSelector((state) => state.offers);
  const currentCity = useAppSelector((state) => state.city);

  const selectedOffer = offers.find((offer) => offer.id === activeCardId);

  useEffect(()=>{
    dispatch(setOffers(Offers.filter((offer) => offer.city.name === currentCity.name)));
  },[currentCity, dispatch]);

  const [currentFilter, setCurrentFilter] = useState<Sorts>(Sorts.Popular);

  const handleFilterChange = useCallback((filter: Sorts) => {
    setCurrentFilter(filter);
  }, []);

  const sortedOffers = useMemo<OfferType[]>(() =>
    getSortedOffers(offers, currentFilter),
  [offers, currentFilter]
  );

  const handleCityChange = (city: City) => {
    dispatch(changeCity(city));
    setCurrentFilter(Sorts.Popular);
  };

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList currentCity={currentCity} onChange={handleCityChange}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {currentCity.name}</b>
              <Sorting currentSort={currentFilter} onSortChange={handleFilterChange}/>
              <div className="cities__places-list places__list tabs__content">
                <OffersList cardType='cities' offers={sortedOffers} onItemMouseHover={setHoveredCardById}
                  onItemMouseLeave={() => setHoveredCardById(null)} size={'medium'}
                />
              </div>
            </section>
            <div className="cities__right-section">
              <Map city={currentCity} points={offers} selectedPoint={selectedOffer} mapType='cities'/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
