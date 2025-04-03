import { Header } from '../../components/header/Header';
import { City } from '../../types';
import { OffersList } from '../../components/offers-list/OffersList';
import { Map } from '../../components/map/Map';
import { useEffect, useState } from 'react';
import { CitiesList } from '../../components/cities-list/CitiesList';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { changeCity, setOffers } from '../../store/actions';
import { Offers } from '../../mock/offers-mock';
import 'leaflet/dist/leaflet.css';

export const Main = () => {
  const [activeCardId, setHoveredCardById] = useState<string | null>(null);

  const dispatch = useAppDispatch();

  const offers = useAppSelector((state) => state.offers);
  const currentCity = useAppSelector((state) => state.city);

  const selectedOffer = offers.find((offer) => offer.id === activeCardId);

  const handleCityChange = (city: City) => {
    dispatch(changeCity(city));
  };

  useEffect(()=>{
    dispatch(setOffers(Offers.filter((offer) => offer.city.name === currentCity.name)));
  },[currentCity, dispatch]);

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
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <OffersList cardType='cities' offers={offers} onItemMouseHover={setHoveredCardById}
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
