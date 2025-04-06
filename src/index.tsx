import React from 'react';
import ReactDOM from 'react-dom/client';
import { Reviews } from './mock/reviews-mock';
import { App } from './components/app/App';
import { Offers } from './mock/offers-mock';
import { Provider } from 'react-redux';
import { store } from './store/store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offers={Offers} reviews={Reviews}/>
    </Provider>
  </React.StrictMode>
);
