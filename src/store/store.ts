import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './reducer.ts';
import { configureAPI } from '../api/api.ts';

const api = configureAPI();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
    })
});
