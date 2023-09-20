import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};
const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
  
});
export const { increment, decrement } = feedbackSlice.actions;

export default feedbackSlice.reducer;
