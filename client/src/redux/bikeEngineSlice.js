import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedBikeEngineService: []
};

const BikeEngine = createSlice({
  name: 'bikeEngineService',
  initialState,
  reducers: {
    setBikeEngineService: (state, action) => {
      // Add service only if not already present
      if (!Array.isArray(state.selectedBikeEngineService)) {
        state.selectedBikeEngineService = [];
      }
      const exists = state.selectedBikeEngineService.find(
        (item) => item.title === action.payload.title
      );
      if (!exists) {
        state.selectedBikeEngineService.push(action.payload);
      }
    },
    
  },
});

export const { setBikeEngineService, clearSelectedService } = BikeEngine.actions;
export default BikeEngine.reducer;
