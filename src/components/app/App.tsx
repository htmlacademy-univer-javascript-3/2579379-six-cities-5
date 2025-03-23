import { Main } from '../../pages/main/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../consts/consts';
import { Favorites } from '../../pages/favorites/Favorites';
import { Login } from '../../pages/login/Login';
import { Offer } from '../../pages/offer/Offer';
import { Error } from '../../pages/error/error';
import { AuthorizationStatus } from '../../consts/consts';
import { PrivateRoute } from '../private-route/private-route';
import { OfferType } from '../../types';

type AppProps = {
  offers: OfferType[];
}

export const App = ({offers}: AppProps) => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Main}
        element={<Main offers={offers} />}
      />
      <Route path={AppRoute.Login}
        element={<Login/>}
      />
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute
            authorizationStatus={AuthorizationStatus.Auth}
          >
            <Favorites offers={offers.filter((o) => o.isFavorite)}/>
          </PrivateRoute>
        }
      />
      <Route path={AppRoute.Offer}
        element={<Offer offers={offers}/>}
      />
      <Route path={AppRoute.NotFound}
        element={<Error/>}
      />
    </Routes>
  </BrowserRouter>
  // <Main cardsCount={cardsCount} />
);

