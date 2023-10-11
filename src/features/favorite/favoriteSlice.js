import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
  totalFavorites: 0,
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
      state.totalFavorites = state.favorites.length;
    },

    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(favorite => {
        return favorite.id !== action.payload.id;
      });
      state.totalFavorites = state.favorites.length;
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
