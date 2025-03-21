import React from 'react';
import ReactDOM from 'react-dom/client';
//import { MainComponentProps } from './consts/consts';
import { App } from './components/app/App';
import { Offers } from './mock/offers-mock';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offers={Offers}/>
  </React.StrictMode>
);
