import { configureStore } from '@reduxjs/toolkit';
import generalReducer from "./generalSlice";
import userReducer from "./userSlice";
import waterServiceReducer from './waterSlice';
import bikeEngineReducer from "./bikeEngineSlice"
import bikeBreakdownReducer from "./bikeBreakDownSlice"
import PunctureReducer from "./punctureSlice"
import OfferReducer from "./offerSlice"
import bookingReducer from "./bookingSlice";


const store = configureStore({
  reducer: {
    generalService: generalReducer,
    user: userReducer,
    waterService: waterServiceReducer,
    bikeEngineService:bikeEngineReducer,
    bikeBreakdownService:bikeBreakdownReducer,
    PunctureService:PunctureReducer,
    OfferService:OfferReducer,
    booking:bookingReducer

  },
});

export default store;
