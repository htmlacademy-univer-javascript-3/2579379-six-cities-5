import { Main } from '../../pages/main/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../consts/consts';
import { Favorites } from '../../pages/favorites/Favorites';
import { Login } from '../../pages/login/Login';
import { Offer } from '../../pages/offer/Offer';
import { Error } from '../../pages/error/error';
import { AuthorizationStatus } from '../../consts/consts';
import { PrivateRoute } from '../private-route/private-route';

type AppProps = {
  cardsCount: number;
}

const App = ({cardsCount}: AppProps) => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Main}
        element={<Main cardsCount={cardsCount} />}
      />
      <Route path={AppRoute.Login}
        element={<Login/>}
      />
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute
            authorizationStatus={AuthorizationStatus.NoAuth}
          >
            <Favorites />
          </PrivateRoute>
        }
      />
      <Route path={AppRoute.Offer}
        element={<Offer/>}
      />
      <Route path='*'
        element={<Error/>}
      />
    </Routes>
  </BrowserRouter>
  // <Main cardsCount={cardsCount} />
);

export {App};
