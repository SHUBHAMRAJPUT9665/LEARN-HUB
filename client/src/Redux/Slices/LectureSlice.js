import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import axiosInstance from "../../Helper/axiosInstance"

const initialState = {
    lectures:[]
}

export const getCourseLecture = createAsyncThunk('/course/lecture/get',async(cid)=>{
    try {
        const response = axiosInstance.get(`/courses/${cid}`)
        toast.promise(response,{
            loading:"fetching course lecture",
            success:"lecture fetched successfully",
            error:"Failed to load course lecture"
        })
        return (await response).data
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})


export const addCourseLecture = createAsyncThunk('/course/lecture/add',async(data)=>{
    try {
        const formData = new FormData()
        formData.append('lecture',data.lecture)
        formData.append('title',data?.title)
        formData.append("description" , data?.description)

        const response = axiosInstance.get(`/courses/${data.id}` , formData)
        toast.promise(response,{
            loading:"adding course lecture",
            success:'lecture added succesfully',
            erorr:"failed to upload lecture"
        })
        return (await response).data
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})


export const deleteCourseLecture = createAsyncThunk('/course/lecture/delete',async(courseId,lectureId)=>{
    try {
        const response = axiosInstance.delete(`/courses?courseId=${courseId}&lectureId=${lectureId}`)
        toast.promise(response,{
            loading:"deleting...",
            success:'lecture deleted succesfully',
            erorr:"failed to delete lecture"
        })
        return (await response).data
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

const lectureSlice = createSlice({
    name:"lecture",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getCourseLecture.fulfilled,(state,action) =>{
            state.lectures = [...action?.payload?.data?.lectures]
        })
        .addCase(addCourseLecture.fulfilled,(state,action) =>{
            console.log(action)
            state.lectures = action?.payload?.course?.lectures
        })
    }
})

export default lectureSlice.reducer