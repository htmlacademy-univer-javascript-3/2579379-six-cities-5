import { Main } from '../../pages/main/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../consts/consts';
import { Favorites } from '../../pages/favorites/Favorites';
import { Login } from '../../pages/login/Login';
import { Offer } from '../../pages/offer/Offer';
import { Error } from '../../pages/error/error';
import { PrivateRoute } from '../private-route/private-route';
import { Review } from '../../types';
import { useEffect } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { fetchOffersAction, checkAuthStatus } from '../../store/api-actions';

type AppProps = {
  reviews: Review[];
}

export const App = ({reviews}: AppProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuthStatus());
    dispatch(fetchOffersAction());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main}
          element={<Main />}
        />
        <Route path={AppRoute.Login}
          element={<Login/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute>
              <Favorites/>
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Offer}
          element={<Offer reviews={reviews}/>}
        />
        <Route path={AppRoute.NotFound}
          element={<Error/>}
        />
      </Routes>
    </BrowserRouter>
  );
};

