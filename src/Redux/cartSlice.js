import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: []
  },
  reducers: {
    addItemToCart: (state, action) => {
      console.log(action.payload);
      const existingItem = state.cartItems.find((item) => item.bookId === action.payload.book.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({
        bookId: action.payload.book.id,
        totalPrice: action.payload.book.price,
        quantity: 1
      })
      }
    },
    updateItemQuantity: (state, action) => {
      const item = state.cartItems.find(item => item.bookId === action.payload.bookId);
      if (item) {
        item.quantity = action.payload.quantity;
        item.totalPrice = item.quantity * action.payload.price;
      }
    }
  },
})

export const getTotalPrice = state => {
  return state.cart.cartItems.reduce((total, item) => {
    return total + item.totalPrice;
  }, 0)
}

export const getTotalQuantity = state => {
  return state.cart.cartItems.reduce((total, item) => total + item.quantity, 0);
}

export const getCartItems = state => state.cart.cartItems;
export const { addItemToCart, updateItemQuantity} = cartSlice.actions;
export default cartSlice.reducer;