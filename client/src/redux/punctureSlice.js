import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedPunctureService: []
};

const PunctureSlice = createSlice({
  name: 'PunctureService',
  initialState,
  reducers: {
    setPunctureService: (state, action) => {
      // Add service only if not already present
      if (!Array.isArray(state.selectedPunctureService)) {
        state.selectedPunctureService = [];
      }
      const exists = state.selectedPunctureService.find(
        (item) => item.title === action.payload.title
      );
      if (!exists) {
        state.selectedPunctureService.push(action.payload);
      }
    },
    
  },
});

export const { setPunctureService, clearSelectedService } = PunctureSlice.actions;
export default PunctureSlice.reducer;
