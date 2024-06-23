import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast";
import axiosInstance from "../../Helper/axiosInstance";

const initialState = {
    courseData:[]
}
export const getAllCourses = createAsyncThunk('/course/get',async()=>{
    try {
        const response = axiosInstance.get('/courses');
        toast.promise(response,{
            loading:"loading course data",
            success: "Course loaded successfully",
            error:'failed to get the course'
        })
        return (await response).data
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})
const courseSlice = createSlice({
    name:"courses",
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder.addCase(getAllCourses.fulfilled,(state,action)=>{
            if(action.payload){
                console.log(action.payload)
                state.courseData = [...action.payload.courses]
            }
        })
    }
});

export default courseSlice.reducer;