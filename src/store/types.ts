import { store } from './index';

export type StoreType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
