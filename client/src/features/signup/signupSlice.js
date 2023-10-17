import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signup: false,
};

export const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    signupClicked: (state, action) => {
      state.signup = !state.signup;
    },
  },
});

export const { signupClicked } = signupSlice.actions;

export default signupSlice.reducer;
