import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../Helper/axiosInstance"
import toast from "react-hot-toast"


const initialState = {
    key:"",
    subscription_id :'',
    isPaymentVerified:false,
    allPayments:{},
    finalMonths:{},
    monthlySalesRecord:[]
}

export const getRazorPayId = createAsyncThunk('/razorpay/getId',async ()=>{
    try {
        const response = await axiosInstance.get('/payments/razorpay-key')
        return (await response).data 
    } catch (error) {
        toast.error('Failed to load razorpay key data')
    }
})
export const purchaseCourseBundle = createAsyncThunk('/purchaseCourse',async()=>{
    try {
        const response = await axiosInstance.post('/payments/subscribe');
        return (await response).data
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})
export const verifyUserPayment = createAsyncThunk('/payment/verify',async(data)=>{
    try {
        const response = await axiosInstance.post('/payments/verify',{
            razorpay_payment_id:data.razorpay_payment_id,
            razorpay_subscription_id:data.razorpay_subscription_id,
            razorpay_signature:data.razorpay_signature
        });

        console.log(response)
        return (await response).data 
    } catch (error) {
        toast.error(error?.response?.data?.message)

    }
})

export const getPaymentRecord = createAsyncThunk("paymentrecord", async () => {
  try {
    const res = axiosInstance.get("user/payments?count=50");
    console.log(res)
    toast.promise(res, {
      loading: "Getting the payments record...",
      success: (data) => {
        return data?.data?.message;
      },
      error: "Failed to get payment records",
    });

    const response = await res;
    return response.data;
  } catch (error) {
    toast.error("Operation failed");
  }
});

export const cancelCourseBundle = createAsyncThunk('/payments/cancel',async(data)=>{
    try {
        const response = await axiosInstance.post('/payments/unsubscribe');
        toast.promise(response,{
            loading:"unsubscribing bundle",
            success:(data) =>{
                console.log(data)
                return data?.data?.message
            },
            error:"failed to unsubscribe"
        })
        return (await response).data 
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

const razorpaySlice = createSlice({
    name:"razorpay",
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder
        .addCase(getRazorPayId.fulfilled,(state,action) =>{
            state.key = action?.payload?.data
        })
        .addCase(purchaseCourseBundle.fulfilled,(state,action)=>{
            state.subscription_id = action?.payload?.subscription_id
        })
        .addCase(verifyUserPayment.fulfilled,(state,action) =>{
            toast.success(action?.payload?.message)
            state.isPaymentVerified = action?.payload?.success
        })
        .addCase(verifyUserPayment.rejected,(state,action) =>{
            toast.success(action?.payload?.message)
            state.isPaymentVerified = action?.payload?.success
        })
        .addCase(getPaymentRecord.fulfilled,(state,action) =>{
            state.allPayments = action?.payload?.allPayments,
            state.finalMonths = action?.payload?.finalMonths,
            state.monthlySalesRecord = action?.payload?.monthlySalesRecord
        })

    }
})

export default razorpaySlice.reducer;
