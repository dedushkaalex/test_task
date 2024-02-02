import { configureStore } from '@reduxjs/toolkit';
import { currencySlice } from 'entities/currency/model/slice';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { baseApi } from 'shared/api';

export const store = configureStore({
  reducer: {
    [currencySlice.reducerPath]: currencySlice.reducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
