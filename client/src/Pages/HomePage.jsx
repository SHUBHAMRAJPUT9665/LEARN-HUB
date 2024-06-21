import React from 'react'
import HomeLayout from '../Layouts/HomeLayout'
import { Link } from 'react-router-dom'
import HomePageImage from '../Assets/Images/homePageMainImage.png'
import Lottie from 'lottie-react'
import animationData from '../Assets/Animation - 1718891815653.json'
const HomePage = () => {
  return (
    <HomeLayout>
      <div className='pt-10 text-white flex flex-col-reverse lg:flex-row items-center justify-center gap-10 mx-6 md:mx-16 h-auto lg:h-[90vh]'>
    <div className='w-full lg:w-1/2 space-y-6 text-center lg:text-left'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold'>
            Find out best
            <span className='text-yellow-500 m-3 font-bold'>
                Online courses
            </span>
        </h1>
        <p className='text-base md:text-lg lg:text-xl text-gray-200'>
            We have a large library of courses taught by highly skilled and qualified faculties at affordable prices.
        </p>
        <div className='p-2 space-y-4 md:space-x-6 md:space-y-0 flex flex-col md:flex-row justify-center lg:justify-start'>
            <Link to='/courses'>
                <button className='bg-yellow-500 px-5 py-3 rounded-md font-semibold sm:text-lg text-sm cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300'>
                    Explore courses
                </button>
            </Link>
            <Link to='/contact'>
                <button className='border border-yellow-500 px-5 py-3 rounded-md font-semibold sm:text-lg text-sm cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300'>
                    Contact Us
                </button>
            </Link>
        </div>
    </div>
    <div className='w-full lg:w-1/2 flex items-center justify-center'>
        <Lottie  animationData={animationData}/>
    </div>
</div>

    </HomeLayout>
  )
}

export default HomePage
