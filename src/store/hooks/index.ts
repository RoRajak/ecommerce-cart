import { useDispatch, useSelector, useStore, TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch, AppStore } from '../store';

// Typed version of useDispatch for your app
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Typed version of useSelector for your app
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Typed version of useStore for your app
export const useAppStore = () => useStore<AppStore>();
