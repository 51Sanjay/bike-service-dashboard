import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedService: []
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setSelectedService: (state, action) => {
      // Add service only if not already present
      if (!Array.isArray(state.selectedService)) {
        state.selectedService = [];
      }
      const exists = state.selectedService.find(
        (item) => item.title === action.payload.title
      );
      if (!exists) {
        state.selectedService.push(action.payload);
      }
    },
    
  },
});

export const { setSelectedService, clearSelectedService } = bookingSlice.actions;
export default bookingSlice.reducer;
