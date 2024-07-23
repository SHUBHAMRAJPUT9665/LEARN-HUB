import React from 'react'
import HomeLayout from '../../Layouts/HomeLayout'
import animationData from '../../Assets/Payment Success.json'
import Lottie from 'lottie-react'
import { useNavigate } from 'react-router-dom'
const CheckoutSuccess = () => {
    const navigate = useNavigate()
  return (
    <HomeLayout >
        <div className="min-h-[90vh] bg-white  flex items-center justify-center text-white">
        <div className="relative w-80 h-[26rem] flex flex-col justify-center  ">
        <h1 className='text-green-400'><Lottie  animationData={animationData}/></h1>

       <button onClick={()=> navigate('/courses')} className='p-3 bg-green-600 font-semibold  m-3 rounded-md'>Go To Courses</button>
      </div>
        </div>

    </HomeLayout>
  )
}

export default CheckoutSuccess
