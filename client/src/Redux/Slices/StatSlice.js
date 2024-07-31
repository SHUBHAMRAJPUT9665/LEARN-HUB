import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../Helper/axiosInstance";


const initialState = {
    allUserCount:0,
    subscribedCount:0
};

export const getStatsData = createAsyncThunk('state/get',async()=>{
    try {
        const response = axiosInstance('/admin/states/users')
        toast.promise(response,{
            loading:"Getting the stats...",
            success:(data) =>{
                return data?.data?.message
            },
            error:"Failed to load data stats"
        })
        return (await response).data
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

const statSlice = createSlice({
    name:'state',
    initialState,
    reducers:{},
    extraReducers:() => {

    }
})

export default statSlice.reducer