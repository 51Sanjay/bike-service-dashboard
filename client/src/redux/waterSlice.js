import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedWaterService: []
};

const waterSlice = createSlice({
  name: 'waterService',
  initialState,
  reducers: {
    setWaterService: (state, action) => {
      // Add service only if not already present
      if (!Array.isArray(state.selectedWaterService)) {
        state.selectedWaterService = [];
      }
      const exists = state.selectedWaterService.find(
        (item) => item.title === action.payload.title
      );
      if (!exists) {
        state.selectedWaterService.push(action.payload);
      }
    },
    
  },
});

export const { setWaterService, clearSelectedService } = waterSlice.actions;
export default waterSlice.reducer;
