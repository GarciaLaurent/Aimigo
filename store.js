import { configureStore } from '@reduxjs/toolkit';

import favoritesReducer from './features/favorites/data/favoritesSlice';
import dataReducer from './features/home/data/dataSlice';

export const store = configureStore({
  reducer: {
    data: dataReducer,
    favorites: favoritesReducer,
  },
});
