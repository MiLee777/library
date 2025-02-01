import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    selectedCategory: 'winter'
  },
  reducers: {
    filterCategory: (state, action) => {
      console.log(action);
      state.selectedCategory = action.payload;
    }
  },
})

export const getSelectedCategory = state => state.books.selectedCategory;
export const { filterCategory } = booksSlice.actions;
export default booksSlice.reducer;