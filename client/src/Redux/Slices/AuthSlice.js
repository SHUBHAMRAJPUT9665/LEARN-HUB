import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from '../../Helper/axiosInstance';

const initialState = {
  isLoggedIn: localStorage.getItem('isLoggedIn') || false,
  role: localStorage.getItem('role') || "",
  data: JSON.parse(localStorage.getItem('data')) || {}
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
  } catch (error) {
    toast.error(error?.response?.data?.message);
    throw error;
  }
});

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
  } catch (error) {
    toast.error(error?.response?.data?.message);
    throw error;
  }
});

export const logout = createAsyncThunk('/auth/logout', async () => {
  try {
    const res = axiosInstance.post("user/logout");
    toast.promise(res, {
      loading: "Wait! logout in progress",
      success: (data) => {
        return data?.data?.message;
      },
      error: "Failed to logout"
    });
    return (await res).data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    throw error;
  }
});

export const updateProfile = createAsyncThunk('user/update/profile', async (data) => {
  try {
    const res = axiosInstance.post('user/update', data);
    toast.promise(res, {
      loading: "Wait! profile update in progress",
      success: 'Profile updated successfully',
      error: "Failed to update profile"
    });
    return (await res).data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    throw error;
  }
});

export const changePassword = createAsyncThunk('user/change/password', async (data) => {
  try {
    console.log(data)
    const res = axiosInstance.post('user/forgot', data);
    toast.promise(res, {
      loading: "Wait! password change in progress",
      success: 'reset password email sent',
      error: "Failed to change Password"
    });
    return (await res).data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    throw error;
  }
});

export const getUserData = createAsyncThunk('user/details', async () => {
  try {
    const res = axiosInstance.get('user/profile');
    return (await res).data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    throw error;
  }
});

export const userData = createAsyncThunk('/auth/userData', async () => {
  try {
    const res = axiosInstance.post("user/profile");
    return (await res).data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    throw error;
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // for user login
      .addCase(login.fulfilled, (state, action) => {
        const userData = action.payload.data;
        localStorage.setItem("data", JSON.stringify(userData));
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("role", userData.role);
        state.isLoggedIn = true;
        state.data = userData;
        state.role = userData.role;
      })
      .addCase(logout.fulfilled, (state) => {
        localStorage.clear();
        state.data = {};
        state.isLoggedIn = false;
        state.role = '';
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        const userData = action.payload.data;
        if (!userData) return;
        localStorage.setItem("data", JSON.stringify(userData));
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("role", userData.role);
        state.isLoggedIn = true;
        state.data = userData;
        state.role = userData.role;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        const updatedUserData = action.payload.data;
        localStorage.setItem("data", JSON.stringify(updatedUserData));
        state.data = updatedUserData;
      });
  }
});

export default authSlice.reducer;
