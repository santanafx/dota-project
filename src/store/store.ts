import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import heroesTableReducer from '../components/HeroesTable/heroesTableSlice.ts';

export const store = configureStore({
  reducer: {
    heroesTable: heroesTableReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // Adicione o Redux Thunk ao middleware
});

export type RootReducer = ReturnType<typeof store.getState>;
