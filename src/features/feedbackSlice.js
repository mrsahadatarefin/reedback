import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};
const feedbackSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state, state.cart.push(action.payload);
    },
  },
});
export const { addToCart } = feedbackSlice.actions;

export default feedbackSlice.reducer;
