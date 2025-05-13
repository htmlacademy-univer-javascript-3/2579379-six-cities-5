import ReactDOM from 'react-dom/client';
import { Reviews } from './mock/reviews-mock';
import { App } from './components/app/App';
import { Provider } from 'react-redux';
import { store } from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <App reviews={Reviews}/>
  </Provider>
);
