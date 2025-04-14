import { Header } from '../../components/header/Header';
import { City, OfferType } from '../../types';
import { OffersList } from '../../components/offers-list/OffersList';
import { Map } from '../../components/map/Map';
import { useState, useMemo, useCallback } from 'react';
import { CitiesList } from '../../components/cities-list/CitiesList';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { changeCity } from '../../store/actions';
import 'leaflet/dist/leaflet.css';
import { Sorts } from '../../consts/sorts';
import { getSortedOffers } from './sorting';
import { Sorting } from '../../components/sorting/Sorting';
import { Spinner } from '../../components/spinner/spinner';
import { ErrorMessage } from '../../components/error/ErrorMessage';
import { AppRoute, AuthorizationStatus } from '../../consts/consts';
import { Navigate } from 'react-router-dom';

export const Main = () => {
  const [activeCardId, setHoveredCardById] = useState<string | null>(null);

  const dispatch = useAppDispatch();

  const offers = useAppSelector((state) => state.offers);
  const currentCity = useAppSelector((state) => state.city);
  const isLoading = useAppSelector((state) => state.isLoading);
  const isError = useAppSelector((state) => state.error);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  const selectedOffer = offers.find((offer) => offer.id === activeCardId);

  const OffersByCity = offers.filter((offer) => offer.city.name === currentCity.name);

  const [currentFilter, setCurrentFilter] = useState<Sorts>(Sorts.Popular);

  const handleFilterChange = useCallback((filter: Sorts) => {
    setCurrentFilter(filter);
  }, []);

  const sortedOffers = useMemo<OfferType[]>(() =>
    getSortedOffers(OffersByCity, currentFilter),
  [OffersByCity, currentFilter]
  );

  const handleCityChange = (city: City) => {
    dispatch(changeCity(city));
    setCurrentFilter(Sorts.Popular);
  };

  if(authorizationStatus === AuthorizationStatus.NoAuth) {
    return <Navigate to={AppRoute.Login} />;
  }

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
              <b className="places__found">{sortedOffers.length} places to stay in {currentCity.name}</b>
              <Sorting currentSort={currentFilter} onSortChange={handleFilterChange}/>
              {isError ? <ErrorMessage/> :
                <div className="cities__places-list places__list tabs__content">
                  {isLoading ? <Spinner/> : <OffersList cardType='cities' offers={sortedOffers} onItemMouseHover={setHoveredCardById} onItemMouseLeave={() => setHoveredCardById(null)} size={'medium'}/>}
                </div>}
            </section>
            <div className="cities__right-section">
              <Map city={currentCity} points={sortedOffers} selectedPoint={selectedOffer} mapType='cities'/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
