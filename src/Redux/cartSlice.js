import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: []
  },
  reducers: {
    addItemToCart: (state, action) => {
      const timeId = new Date().getTime();
      const existingItem = state.cartItems.find((item) => item.bookId === action.payload.book.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({
          id: timeId,
          bookId: action.payload.book.id,
          totalPrice: action.payload.book.price,
          quantity: 1
        })
      }
    },
    removeItemToCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.itemId)
    },
    removeItemToBooks: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.bookId !== action.payload.bookId)
    },
    updateItemQuantity: (state, action) => {
      const item = state.cartItems.find(item => item.bookId === action.payload.bookId);
      if (item) {
        item.quantity = action.payload.quantity;
        item.totalPrice = item.quantity * action.payload.price;
      }
    },
    removeAllItemstoCart: (state, action) => {
      state.cartItems = [];
    },
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
export const { addItemToCart, updateItemQuantity, removeItemToCart, removeItemToBooks, removeAllItemstoCart } = cartSlice.actions;
export default cartSlice.reducer;