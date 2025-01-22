import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: [],
  },
  reducers: {
    toggleFavorites: (state, action) => {
      const exists = state.items.some((item) => item.id === action.payload.id);
      if (exists) {
        // Remove the object if it exists
        state.items = state.items.filter((item) => item.id !== action.payload.id);
      } else {
        // Add the object if it doesn't exist
        state.items.push(action.payload);
      }
    },
  },
});

export const { toggleFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
