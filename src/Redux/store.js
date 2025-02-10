import { configureStore } from '@reduxjs/toolkit';
import books from './booksSlice';
import cart from './cartSlice';

export default configureStore({
  reducer: {
    books,
    cart
  }
});