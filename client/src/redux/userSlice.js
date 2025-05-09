// src/redux/userSlice.js

import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
    email: "",
    phone: "",
  },
  reducers: {
    setUser: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
    },
    logout: (state) => {
      state.username = "";
      state.email = "";
      state.phone = "";
    },
  },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
