import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loggedIn: (state, action) => {
      state.login = !state.login;
    },
  },
});

export const { loggedIn } = loginSlice.actions;

export default loginSlice.reducer;
