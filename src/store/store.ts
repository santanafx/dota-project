import { configureStore } from '@reduxjs/toolkit';
// import { thunk } from 'redux-thunk';
import heroesTableReducer from '../components/HeroesTable/heroesTableSlice.ts';

export const store = configureStore({
  reducer: {
    // @ts-expect-error error type generated because of redux toolkit
    heroesTable: heroesTableReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type RootReducer = ReturnType<typeof store.getState>;
