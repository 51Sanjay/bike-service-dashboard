import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from './Slice';
import userReducer from "./userSlice";
import waterServiceReducer from './waterSlice';

const store = configureStore({
  reducer: {
    booking: bookingReducer,
    user: userReducer,
    waterService: waterServiceReducer,
  },
});

export default store;
