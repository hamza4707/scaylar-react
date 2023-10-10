import { createSlice } from "@reduxjs/toolkit";
// import { nanoid } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
  totalFavorites: 0,
};

// const initialState = [];

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      // const favorite = {
      //   id: nanoid(),
      //   text: action.payload,
      // };
      state.favorites.push(action.payload);
      state.totalFavorites = state.favorites.length;
      // state.push(action.payload);
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
