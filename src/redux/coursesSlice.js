import { createSlice } from '@reduxjs/toolkit';

export const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    selectedCategory: "ЗАВТРАК"
  },
  reducers: {
    filterCategory: (state, action) => {
      state.selectedCategory = action.payload;
    }
  }
});

export const getSelectedCategory = state => state.courses.selectedCategory;
export const { filterCategory } = coursesSlice.actions;
export default coursesSlice.reducer;