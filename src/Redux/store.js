import { configureStore } from '@reduxjs/toolkit';
import books from './booksSlice';

export default configureStore({
  reducer: {
    books
  }
});