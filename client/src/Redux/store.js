import { configureStore } from "@reduxjs/toolkit";

import authSliceReducer from './Slices/AuthSlice';
import CourseSliceReducer from "./Slices/CourseSlice";
import RazorpayReducer from "./Slices/RazorpaySlice";
import LectureSlice from './Slices/LectureSlice'
// import LectureReducer from './Slices/CourseSlice'
const store = configureStore({
    reducer: {
        auth: authSliceReducer,
        course:CourseSliceReducer,
        razorpay:RazorpayReducer,
        lecture:LectureSlice
        },
    devTools: true
});

export default store;