import React from 'react';
import HomeLayout from '../../Layouts/HomeLayout'
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getRazorPayId, purchaseCourseBundle, verifyUserPayment } from '../../Redux/Slices/RazorpaySlice';
import toast from 'react-hot-toast';
import { FaRupeeSign } from "react-icons/fa";

const Checkout = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const razorpayKey = useSelector((state) => state?.razorpay?.key)
    const subscription_id = useSelector((state) => state?.razorpay?.subscription_id)
    const userData = useSelector((state) => state?.auth?.data)

    const paymentDetails = {
            razorpay_payment_id:'',
            razorpay_subscription_id:' ',
            razorpay_signature:''
    }

    async function handleSubscription(e){
        e.preventDefault();
        if(!razorpayKey || !subscription_id){
            toast.error("no subscription_id please try again ");
            return
        }
        const options = {
            key:razorpayKey,
            subscription_id:subscription_id,
            name:"LEARN HUB Pvt. Ltd.",
            description:"subscription",
            theme:{
                color:'#F37254'
            },
            prefill:{
                email:userData.email,
                name:userData.fullName

            },
            handler:async function (response){
                paymentDetails.razorpay_payment_id = response.razorpay_payment_id
                paymentDetails.razorpay_signature = response.razorpay_signature
                paymentDetails.razorpay_subscription_id = response.razorpay_subscription_id

                const res = await dispatch(verifyUserPayment(paymentDetails))
                toast.success("Payment Successfully")
                res?.payload?.success ? navigate('/checkout/success'):navigate('/checkout/fail')
            }
        }
        const paymentObject = new window.Razorpay(options)
        paymentObject.open()
    }

    async function load(){
        await dispatch(getRazorPayId());
        await dispatch(purchaseCourseBundle())
    }

    useEffect(()=>{
        load()
    },[])

  return (
    <HomeLayout>
    <form onSubmit={handleSubscription} className="min-h-[90vh]  flex items-center justify-center text-white">
      <div className="relative w-80 h-[26rem] flex flex-col justify-center shadow-[0_0_10px_black] rounded-lg">
        <h1 className="bg-yellow-500 absolute top-0 w-full text-center p-4 font-bold rounded-t-lg">Subscription Bundle</h1>
        <div className="px-4 mt-[5rem] space-y-5 text-center">
          <p className="text-[17px]">
            This purchase will allow you to access all available courses.
          </p>
          <p className='flex items-center justify-center gap-1 text-2xl font-bold text-yellow-500'>
            <FaRupeeSign></FaRupeeSign><span>499</span> only
          </p>
          <div>
            <p>100% refund on cancellation within 24 hour</p>
            <p>* Terms & Conditons apply</p>
          </div>
          <button type='submit' className='bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 text-xl font-bold absolute p-2 rounded-br-lg rounded-bl-lg bottom-0 w-full left-0'>Buy now</button>
        </div>
      </div>
    </form>
  </HomeLayout>
  
  );
}

export default Checkout;
