import { configureStore } from '@reduxjs/toolkit';

import dataReducer from './features/home/data/dataSlice';

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});
