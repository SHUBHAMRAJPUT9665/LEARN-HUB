import { configureStore } from "@reduxjs/toolkit";

import authSliceReducer from './Slices/AuthSlice';
import CourseSliceReducer from "./Slices/CourseSlice";
import RazorpayReducer from "./Slices/RazorpaySlice";
const store = configureStore({
    reducer: {
        auth: authSliceReducer,
        course:CourseSliceReducer,
        razorpay:RazorpayReducer
    },
    devTools: true
});

export default store;