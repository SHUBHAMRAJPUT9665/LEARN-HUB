import React from 'react'
import animationData from '../../Assets/payment fail.json'
import Lottie from 'lottie-react'
import { useNavigate } from 'react-router-dom'
import HomeLayout from '../../Layouts/HomeLayout'
const CheckoutFail = () => {
    const navigate = useNavigate();
  return (
    <HomeLayout >
        <div className="min-h-[90vh] bg-white  flex items-center justify-center text-white">
        <div className="relative w-80 h-[26rem] flex flex-col justify-center  ">
        <h1 className='text-green-400'><Lottie  animationData={animationData}/></h1>

       <button onClick={()=> navigate('/checkout')} className='p-3 bg-red-500 font-semibold  m-3 rounded-md'>Try Again</button>
      </div>
        </div>

    </HomeLayout>
  )
}

export default CheckoutFail
