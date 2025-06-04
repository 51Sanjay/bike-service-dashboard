// src/redux/slices/bookingSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookingData: null,
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setBookingData(state, action) {
      return { ...state, ...action.payload }; 
    },
  },
});

export const { setBookingData } = bookingSlice.actions;
export default bookingSlice.reducer;
