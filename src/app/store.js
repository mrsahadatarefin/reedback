import { configureStore } from "@reduxjs/toolkit";
import feedbackSlice from "../features/feedbackSlice";

const store = configureStore({
    reducer:{
        cart:feedbackSlice
    }
})
export default store;