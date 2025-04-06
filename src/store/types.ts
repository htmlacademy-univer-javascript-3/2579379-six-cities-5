import { store } from './store';

export type StoreType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
