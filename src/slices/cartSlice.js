import { createSlice } from '@reduxjs/toolkit';
//Move the books state to the initialState in cartSlice.js
const initialState = {
  books: [
    { id: 1, name: 'Pride and Prejudice', price: 10 },
    { id: 2, name: '1984', price: 5 },
    { id: 3, name: 'Crime and Punishment', price: 40 },
    { id: 4, name: 'Hamlet', price: 20 },
  ],
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
