import { Link } from 'react-router-dom';
import { getLocationFaivoritesMap } from './utils';
import { LocationFavorites } from '../../components/location-favorites/LocationFavorites';
import { AppRoute, AuthorizationStatus } from '../../consts/consts';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchFavorites } from '../../store/api-actions';
import { useMemo, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

export const Favorites = () => {

  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorite.offers);
  const LocationsFavorites = useMemo(() =>
    getLocationFaivoritesMap(favorites), [favorites]);
  const authorizationStatus = useAppSelector((state) => state.auth.authorizationStatus);

  const LocationsFavoritesObject = Object.fromEntries(LocationsFavorites.entries());
  const LocationsFavoritesArray = Object.entries(LocationsFavoritesObject);

  useEffect(() => {
    dispatch(fetchFavorites());
  }, []);

  if(authorizationStatus === AuthorizationStatus.NoAuth) {
    return <Navigate to={AppRoute.Login} />;
  }

  return (
    <div className="page">
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {LocationsFavoritesArray.map((lf) => <LocationFavorites key={lf[0]} city={lf[0]} favoriteOffers={lf[1]}/>)}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link to={AppRoute.Main} className="footer__logo-link">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
};

