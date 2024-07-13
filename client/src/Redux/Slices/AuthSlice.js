import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from '../../Helper/axiosInstance'
const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') || false,
    role: localStorage.getItem('role') || "",
    data: localStorage.getItem('data') || {}
};

export const createAccount = createAsyncThunk("/auth/signup", async (data) => {
    try {
        const res = axiosInstance.post("user/register", data);
        toast.promise(res, {
            loading: "Wait! creating your account",
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to create account"
        });
        return (await res).data;
    } catch(error) {
        toast.error(error?.response?.data?.message);
    }
})

export const login = createAsyncThunk("/auth/login", async (data) => {
    try {
        const res = axiosInstance.post("user/login", data);
        toast.promise(res, {
            loading: "Wait! authentication in progress",
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to login"
        });
        return (await res).data;
    } catch(error) {
        toast.error(error?.response?.data?.message);
    }
})

export const logout =  createAsyncThunk('/auth/logout',async ()=>{
    try {
        const res = axiosInstance.post("user/logout",);
        toast.promise(res, {
            loading: "Wait! logout in progress",
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to logout"
        });
        return (await res).data;
    } catch(error) {
        toast.error(error?.response?.data?.message);
    }
})

export const updateProfile =  createAsyncThunk('user/update/profile',async (id,data)=>{
    try {
        const res = axiosInstance.post(`user/update/${id}`,data);
        toast.promise(res, {
            loading: "Wait! profile update in progress",
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to update profile"
        });
        return (await res).data;
    } catch(error) {
        toast.error(error?.response?.data?.message);
    }
})

export const getUserData =  createAsyncThunk('user/details',async (id,data)=>{
    try {
        const res = axiosInstance.post(`user/profile`);
        return (await res).data;
    } catch(error) {
        toast.error(error?.response?.data?.message);
    }
})


export const userData = createAsyncThunk('/auth/userData',async() =>{
    try {
        const res = axiosInstance.post("user/profile");
        return (await res).data
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
})

const authSlice = createSlice({
    name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // for user login
      .addCase(login.fulfilled, (state, action) => {
        localStorage.setItem("data", JSON.stringify(action?.payload?.data));
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("role", action?.payload?.data?.role);
        state.isLoggedIn = true;
        state.data = action?.payload?.data;
        state.role = action?.payload?.data?.role;
      })
      .addCase(logout.fulfilled,(state,action)=>{
        localStorage.clear();
        state.data = {};
        state.isLoggedIn = false
        state.role= ''
      })
      .addCase(getUserData.fulfilled,(state,action) =>{
        if(!action?.payload?.user) return;
            localStorage.setItem("data", JSON.stringify(action?.payload?.user));
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("role", action?.payload?.user?.role);
            state.isLoggedIn = true;
            state.data = action?.payload?.user;
            state.role = action?.payload?.user?.role
      })
    }
});

// export const {} = authSlice.actions;
export default authSlice.reducer;