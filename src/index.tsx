import React from 'react';
import ReactDOM from 'react-dom/client';
import { Reviews } from './mock/reviews-mock';
import { App } from './components/app/App';
import { Favorites } from './mock/favorites-mock';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { fetchOffersAction } from './store/api-actions';

store.dispatch(fetchOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App favorites={Favorites} reviews={Reviews}/>
    </Provider>
  </React.StrictMode>
);
