import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedBikeBreakDownService: []
};

const BikeBreakDownSlice = createSlice({
  name: 'bikeBreakdownService',
  initialState,
  reducers: {
    setBikeBreakDownService: (state, action) => {
      // Add service only if not already present
      if (!Array.isArray(state.selectedBikeBreakDownService)) {
        state.selectedBikeBreakDownService = [];
      }
      const exists = state.selectedBikeBreakDownService.find(
        (item) => item.title === action.payload.title
      );
      if (!exists) {
        state.selectedBikeBreakDownService.push(action.payload);
      }
    },
    
  },
});

export const { setBikeBreakDownService, clearSelectedService } = BikeBreakDownSlice.actions;
export default BikeBreakDownSlice.reducer;
