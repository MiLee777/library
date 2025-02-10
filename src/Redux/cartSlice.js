import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: []
  },
  reducers: {
    addItemToCart: (state, action) => {
      console.log(action.payload);
      state.cartItems.push({
        bookId: action.payload.book.id,
      })
    }
  },
})

export const getCartItems = state => state.cart.cartItems;
export const { addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;