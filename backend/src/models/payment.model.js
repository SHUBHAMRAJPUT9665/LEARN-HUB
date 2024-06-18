import mongoose, { Schema } from "mongoose";

const paymentSchema = new Schema({
    razorpay_payment_id:{
        type:String,
        required:true
    },
    razorpay_subscription_id:{
        type:String,
        required:true
    },
    razorpay_signature:{
        type:String,
        required:true
    }
}, {
    timestamps:true
}

);

const Payment = mongoose.model('Payment',paymentSchema)

export default Payment;