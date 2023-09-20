import { configureStore } from "@reduxjs/toolkit";
import feedbackSlice from "../features/feedbackSlice";

const store = configureStore({
    reducer:{
        feedback:feedbackSlice
    }
})
export default store;