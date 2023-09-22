import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};
const feedbackSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(action.payload, "action");
      state.cart.push(action.payload);
    },
    updateTOCart: (state, action) => {
      state.cart = state.cart.map((cartItem) => {
        if (cartItem.id == action.payload.id) {
          return { ...cartItem, ...action.payload };
        }
        return cartItem;
      });
    },
  },
});
export const { addToCart, updateTOCart } = feedbackSlice.actions;

export default feedbackSlice.reducer;
