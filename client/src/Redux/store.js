import { configureStore } from "@reduxjs/toolkit";

import authSliceReducer from './Slices/AuthSlice';
import CourseSliceReducer from "./Slices/CourseSlice";
import RazorpayReducer from "./Slices/RazorpaySlice";
import LectureSlice from './Slices/LectureSlice'
import StatSlice from './Slices/StatSlice'
// import LectureReducer from './Slices/CourseSlice'
const store = configureStore({
    reducer: {
        auth: authSliceReducer,
        course:CourseSliceReducer,
        razorpay:RazorpayReducer,
        lecture:LectureSlice,
        stat:StatSlice
        },
    devTools: true
});

export default store;