import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedGeneralService: []
};

const generalSlice = createSlice({
  name: 'generalService',
  initialState,
  reducers: {
    setGeneralService: (state, action) => {
      // Add service only if not already present
      if (!Array.isArray(state.selectedGeneralService)) {
        state.selectedGeneralService = [];
      }
      const exists = state.selectedGeneralService.find(
        (item) => item.title === action.payload.title
      );
      if (!exists) {
        state.selectedGeneralService.push(action.payload);
      }
    },
    
  },
});

export const { setGeneralService, clearSelectedService } = generalSlice.actions;
export default generalSlice.reducer;
