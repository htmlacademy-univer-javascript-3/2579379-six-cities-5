import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainComponentProps } from './consts/consts';
import { App } from './components/app/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App cardsCount={MainComponentProps.cardsCount}/>
  </React.StrictMode>
);
