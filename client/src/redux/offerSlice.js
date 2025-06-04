import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedOfferService: []
};

const OfferSlice = createSlice({
  name: 'OfferService',
  initialState,
  reducers: {
    setOfferService: (state, action) => {
      // Add service only if not already present
      if (!Array.isArray(state.selectedOfferService)) {
        state.selectedOfferService = [];
      }
      const exists = state.selectedOfferService.find(
        (item) => item.title === action.payload.title
      );
      if (!exists) {
        state.selectedOfferService.push(action.payload);
      }
    },
    
  },
});

export const { setOfferService, clearSelectedService } = OfferSlice.actions;
export default OfferSlice.reducer;
