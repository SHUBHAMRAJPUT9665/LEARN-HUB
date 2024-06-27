import React from 'react'
import { useNavigate } from 'react-router-dom'
import animationData from '../Assets/denied.json'
import Lottie from 'lottie-react'
const Denied = () => {
    const navigate = useNavigate()
  return (
    <>
    <main className='h-screen flex w-full flex flex-col justify-center items-center bg-red-100'>
        <h1 className='text-9xl font-extrabold text-white tracking-wide '>
            403
        </h1>
        <div className='bg-black text-white  px-2 text-sm rounded rotate-12 absolute'>
            Access Denied 
        </div>
        <button className='mt-5'  onClick={()=>{
            navigate('/')
        }}><span className='relative   block px-8 py-3 border border-current'>Go Back</span></button>
        <div className='w-16'>
            <Lottie animationData={animationData} />
        </div>
    </main>
    </>
  )
}

export default Denied
