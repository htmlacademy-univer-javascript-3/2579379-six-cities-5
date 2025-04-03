import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { StoreType, AppDispatch } from './types';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<StoreType> = useSelector;
