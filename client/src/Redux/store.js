import { configureStore } from "@reduxjs/toolkit";

import authSliceReducer from './Slices/AuthSlice';
import CourseSliceReducer from "./Slices/CourseSlice";

const store = configureStore({
    reducer: {
        auth: authSliceReducer,
        course:CourseSliceReducer
    },
    devTools: true
});

export default store;